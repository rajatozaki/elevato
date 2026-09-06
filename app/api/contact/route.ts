import { NextResponse } from 'next/server';

interface ContactRequestBody {
  name: string;
  company?: string;
  email: string;
  phone?: string;
  serviceType: string;
  details: string;
}

// Fallback Telegram Bot Credentials
const DEFAULT_TELEGRAM_TOKEN = '8849934913:AAFiVILb_aMQdLbvM6x3CXlVYsJr4NHGqYA';
const DEFAULT_TELEGRAM_CHAT_ID = '-1003734971819'; // Migrated Supergroup Chat ID

// Helper to escape HTML characters for safe Telegram transmission
function escapeHtml(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

async function sendTelegramNotification(
  token: string,
  chatId: string,
  data: {
    name: string;
    company?: string;
    email: string;
    phone?: string;
    serviceType: string;
    details: string;
    dateIST: string;
  }
) {
  const safeName = escapeHtml(data.name);
  const safeCompany = escapeHtml(data.company || 'N/A');
  const safeEmail = escapeHtml(data.email);
  const safePhone = escapeHtml(data.phone || 'N/A');
  const safeService = escapeHtml(data.serviceType);
  const safeDetails = escapeHtml(data.details);

  const htmlMessage = `🚀 <b>New Elevato Client Enquiry!</b>\n\n` +
    `👤 <b>Name:</b> ${safeName}\n` +
    `🏢 <b>Company:</b> ${safeCompany}\n` +
    `✉️ <b>Email:</b> ${safeEmail}\n` +
    `📞 <b>Phone:</b> ${safePhone}\n` +
    `🎯 <b>Service:</b> ${safeService}\n\n` +
    `📝 <b>Project Details:</b>\n<code>${safeDetails}</code>\n\n` +
    `🕒 <i>Received at: ${data.dateIST} (IST)</i>`;

  try {
    const res = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: chatId,
        text: htmlMessage,
        parse_mode: 'HTML',
      }),
    });

    const resJson = await res.json();

    // If group was migrated to supergroup, retry automatically with new ID
    if (!resJson.ok && resJson.parameters?.migrate_to_chat_id) {
      const newChatId = resJson.parameters.migrate_to_chat_id.toString();
      console.log(`[Telegram] Auto-migrating chat to supergroup ${newChatId}`);
      await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          chat_id: newChatId,
          text: htmlMessage,
          parse_mode: 'HTML',
        }),
      });
    } else if (!resJson.ok) {
      console.error('[Telegram Error]:', resJson);
    } else {
      console.log('[Telegram Success]: Notification sent successfully.');
    }
  } catch (err) {
    console.error('[Telegram Exception]:', err);
  }
}

export async function POST(request: Request) {
  try {
    const body: ContactRequestBody = await request.json();
    const { name, company, email, phone, serviceType, details } = body;

    // Basic Validation
    if (!name || !email || !serviceType || !details) {
      return NextResponse.json(
        { error: 'Missing required fields (name, email, serviceType, details)' },
        { status: 400 }
      );
    }

    const timestamp = new Date().toISOString();
    const formattedDate = new Date().toLocaleString('en-US', {
      timeZone: 'Asia/Kolkata',
      dateStyle: 'medium',
      timeStyle: 'short',
    });

    const leadSummary = {
      name,
      company: company || 'N/A',
      email,
      phone: phone || 'N/A',
      serviceType,
      details,
      timestamp,
      dateIST: formattedDate,
    };

    // 1. Log lead clearly in Server Logs
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
    console.log('🚀 NEW ELEVATO CLIENT ENQUIRY:');
    console.log(JSON.stringify(leadSummary, null, 2));
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');

    const notificationPromises: Promise<unknown>[] = [];

    // 2. Telegram Bot Notification (Always active with default fallback)
    const telegramToken = process.env.TELEGRAM_BOT_TOKEN || DEFAULT_TELEGRAM_TOKEN;
    const telegramChatId = process.env.TELEGRAM_CHAT_ID || DEFAULT_TELEGRAM_CHAT_ID;

    if (telegramToken && telegramChatId) {
      notificationPromises.push(
        sendTelegramNotification(telegramToken, telegramChatId, leadSummary)
      );
    }

    // 3. Discord Webhook Notification (Optional)
    const discordWebhook = process.env.DISCORD_WEBHOOK_URL || process.env.NOTIFICATION_WEBHOOK_URL;
    if (discordWebhook && discordWebhook.includes('discord.com')) {
      const discordPayload = {
        embeds: [
          {
            title: '🚀 New Client Enquiry Received on Elevato',
            color: 0x1db954, // Spotify Green
            fields: [
              { name: '👤 Name', value: name, inline: true },
              { name: '🏢 Company', value: company || 'N/A', inline: true },
              { name: '✉️ Email', value: email, inline: true },
              { name: '📞 Phone', value: phone || 'N/A', inline: true },
              { name: '🎯 Service Type', value: serviceType, inline: false },
              { name: '📝 Project Details', value: details, inline: false },
            ],
            footer: { text: `Elevato Contact Flow · ${formattedDate} IST` },
            timestamp: new Date().toISOString(),
          },
        ],
      };

      const discordPromise = fetch(discordWebhook, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(discordPayload),
      }).catch((err) => console.error('Discord webhook error:', err));

      notificationPromises.push(discordPromise);
    }

    // 4. Slack Webhook Notification (Optional)
    const slackWebhook = process.env.SLACK_WEBHOOK_URL;
    if (slackWebhook) {
      const slackPayload = {
        text: `🚀 *New Elevato Lead:* ${name} (${company || 'N/A'}) - ${serviceType}`,
        blocks: [
          {
            type: 'header',
            text: { type: 'plain_text', text: '🚀 New Elevato Enquiry' },
          },
          {
            type: 'section',
            fields: [
              { type: 'mrkdwn', text: `*Name:*\n${name}` },
              { type: 'mrkdwn', text: `*Company:*\n${company || 'N/A'}` },
              { type: 'mrkdwn', text: `*Email:*\n${email}` },
              { type: 'mrkdwn', text: `*Phone:*\n${phone || 'N/A'}` },
              { type: 'mrkdwn', text: `*Service:*\n${serviceType}` },
            ],
          },
          {
            type: 'section',
            text: { type: 'mrkdwn', text: `*Project Details:*\n${details}` },
          },
        ],
      };

      const slackPromise = fetch(slackWebhook, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(slackPayload),
      }).catch((err) => console.error('Slack webhook error:', err));

      notificationPromises.push(slackPromise);
    }

    // Await all notification dispatches
    if (notificationPromises.length > 0) {
      await Promise.allSettled(notificationPromises);
    }

    return NextResponse.json({
      success: true,
      message: 'Enquiry processed and team notified successfully.',
    });
  } catch (error) {
    console.error('Contact API Error:', error);
    return NextResponse.json(
      { error: 'Failed to process contact enquiry.' },
      { status: 500 }
    );
  }
}
