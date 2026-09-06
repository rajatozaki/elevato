import { NextResponse } from 'next/server';

interface ContactRequestBody {
  name: string;
  company?: string;
  email: string;
  phone?: string;
  serviceType: string;
  details: string;
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

    // 1. Log lead clearly in Vercel Server Logs
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
    console.log('🚀 NEW ELEVATO CLIENT ENQUIRY:');
    console.log(JSON.stringify(leadSummary, null, 2));
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');

    const notificationPromises: Promise<unknown>[] = [];

    // 2. Telegram Bot Notification
    const telegramToken = process.env.TELEGRAM_BOT_TOKEN;
    const telegramChatId = process.env.TELEGRAM_CHAT_ID;
    if (telegramToken && telegramChatId) {
      const text = `🚀 *New Elevato Lead Received!*\n\n` +
        `👤 *Name:* ${name}\n` +
        `🏢 *Company:* ${company || 'N/A'}\n` +
        `✉️ *Email:* ${email}\n` +
        `📞 *Phone:* ${phone || 'N/A'}\n` +
        `🎯 *Service:* ${serviceType}\n` +
        `📝 *Details:*\n${details}\n\n` +
        `🕒 _Received at: ${formattedDate} (IST)_`;

      const telegramPromise = fetch(
        `https://api.telegram.org/bot${telegramToken}/sendMessage`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            chat_id: telegramChatId,
            text,
            parse_mode: 'Markdown',
          }),
        }
      ).catch((err) => console.error('Telegram notification error:', err));

      notificationPromises.push(telegramPromise);
    }

    // 3. Discord Webhook Notification
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

    // 4. Slack Webhook Notification
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

    // 5. Resend Email API Notification
    const resendApiKey = process.env.RESEND_API_KEY;
    const recipientEmail = process.env.CONTACT_EMAIL_TO || 'hello@elevato.in';
    if (resendApiKey) {
      const emailPromise = fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${resendApiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: 'Elevato Leads <onboarding@resend.dev>',
          to: [recipientEmail],
          reply_to: email,
          subject: `🚀 New Lead: ${name} - ${serviceType} [${company || 'Elevato'}]`,
          html: `
            <div style="font-family: sans-serif; max-width: 600px; padding: 24px; border: 1px solid #eaeaea; border-radius: 12px; background: #ffffff;">
              <h2 style="color: #121212; margin-top: 0;">New Project Enquiry</h2>
              <div style="padding: 16px; background: #F9F9F7; border-radius: 8px; margin-bottom: 20px;">
                <p style="margin: 6px 0;"><strong>Name:</strong> ${name}</p>
                <p style="margin: 6px 0;"><strong>Company:</strong> ${company || 'N/A'}</p>
                <p style="margin: 6px 0;"><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
                <p style="margin: 6px 0;"><strong>Phone:</strong> ${phone || 'N/A'}</p>
                <p style="margin: 6px 0;"><strong>Service Type:</strong> ${serviceType}</p>
              </div>
              <h3 style="color: #121212; margin-bottom: 8px;">Project Details</h3>
              <p style="white-space: pre-wrap; color: #444444; line-height: 1.6;">${details}</p>
              <hr style="border: none; border-top: 1px solid #eaeaea; margin: 24px 0 16px;" />
              <p style="font-size: 12px; color: #888888; margin: 0;">Received on ${formattedDate} IST via Elevato Web Contact Flow</p>
            </div>
          `,
        }),
      }).catch((err) => console.error('Resend email error:', err));

      notificationPromises.push(emailPromise);
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
