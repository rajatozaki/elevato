export interface Service {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  whoIsItFor: string;
  typicalProblems: string[];
  whatWeBuild: string[];
  projectOutputs: string[];
  cta: {
    label: string;
    href: string;
  };
}

export const services: Service[] = [
  {
    id: 'website-development',
    title: 'Website and Front-End Development',
    shortDescription:
      'Clean, modern websites that present your business clearly, load fast, and work properly on every device.',
    fullDescription:
      'We build websites for businesses that have outgrown their current site. Whether it is a complete redesign or a new build, we focus on clear messaging, strong visual design, fast performance, and a mobile experience that works as well as the desktop version.',
    whoIsItFor:
      'Established businesses whose current website does not reflect the quality of their actual work. Companies that rely on credibility, such as real estate firms, healthcare practices, professional services, and B2B businesses.',
    typicalProblems: [
      'The current website looks outdated or was built years ago',
      'The site does not work well on mobile devices',
      'Visitors cannot quickly understand what the business offers',
      'Pages load slowly or feel unresponsive',
      'There is no clear path for visitors to make an enquiry',
      'The website cannot be easily updated with new content',
    ],
    whatWeBuild: [
      'Company websites',
      'Portfolio and showcase websites',
      'Service business websites',
      'Modern redesigns of existing sites',
      'Responsive front-end implementations',
      'Content-managed websites',
    ],
    projectOutputs: [
      'A fully responsive website built with modern technology',
      'Clear information architecture and page structure',
      'Mobile-optimised design and performance',
      'SEO-ready page structure and metadata',
      'Enquiry forms and contact flows',
      'Documentation for content updates',
    ],
    cta: {
      label: 'Discuss Your Website',
      href: '/contact',
    },
  },
  {
    id: 'landing-pages',
    title: 'Landing Pages and Lead Funnels',
    shortDescription:
      'Focused pages that present a specific offer, explain it clearly, and make it easy for interested visitors to get in touch.',
    fullDescription:
      'Not every marketing campaign needs a full website. Sometimes a single well-designed page with a clear offer and a simple form generates more enquiries than a complex site. We build landing pages that focus on one goal: helping visitors understand the offer and take the next step.',
    whoIsItFor:
      'Businesses running advertising campaigns, launching new services, or promoting specific offers that need a dedicated page rather than sending traffic to a general website.',
    typicalProblems: [
      'Ad campaigns send traffic to a homepage that does not match the offer',
      'There is no dedicated page for a specific service or promotion',
      'Lead forms are buried or difficult to find',
      'Enquiries arrive in a shared inbox with no structure',
      'There is no follow-up process after someone submits a form',
    ],
    whatWeBuild: [
      'Campaign landing pages',
      'Service-specific pages',
      'Lead capture forms',
      'Consultation booking flows',
      'Contact and enquiry funnels',
      'Thank-you and confirmation pages',
    ],
    projectOutputs: [
      'A focused landing page designed for a specific offer',
      'Lead capture form with appropriate fields',
      'Basic integrations with email or CRM tools',
      'Mobile-optimised design',
      'Clear calls to action and conversion-focused layout',
      'Analytics-ready page structure',
    ],
    cta: {
      label: 'Start a Project',
      href: '/contact',
    },
  },
  {
    id: 'ai-automation',
    title: 'Workflow & Process Automation',
    shortDescription:
      'Eliminate repetitive manual tasks by automating lead handling, customer follow-ups, reporting, and cross-system data sync.',
    fullDescription:
      'Many established businesses have operations that consume hours every week on predictable patterns. Routing incoming enquiries to the right person, sending follow-up notifications, updating records across CRM tools, generating routine reports, or preparing client documents. We build reliable automation pipelines that handle these tasks accurately in seconds without changing how your team likes to work.',
    whoIsItFor:
      'Businesses where the team spends significant time on routine administrative work and data transfer between systems. Companies that have outgrown manual spreadsheets and need reliable operational speed.',
    typicalProblems: [
      'New leads sit in unread inboxes and are not assigned promptly',
      'Follow-ups depend on individual memory rather than an automated system',
      'The same customer data is entered into multiple tools manually',
      'Weekly reporting takes hours of manual copying and pasting',
      'Client invoices and proposals are created by hand using templates',
      'Information gets lost between communication channels and team members',
    ],
    whatWeBuild: [
      'Instant lead routing and team notification pipelines',
      'Automated customer follow-up and booking workflows',
      'CRM, database, and webhook integrations',
      'Automated business reporting and summary delivery',
      'Document and contract generation workflows',
      'Two-way data synchronisation between internal tools',
    ],
    projectOutputs: [
      'A documented operational workflow tailored to the business',
      'Automated pipelines configured, tested, and error-monitored',
      'Direct integration with your existing CRM, email, and tools',
      'Clear documentation for team maintenance',
      'Real-time delivery status alerts and error handling',
    ],
    cta: {
      label: 'Start a Conversation',
      href: '/contact',
    },
  },
  {
    id: 'ai-enablement',
    title: 'Digital Systems Consulting',
    shortDescription:
      'Clear, practical guidance on evaluating software, modernizing legacy workflows, and implementing reliable tools without wasted spend.',
    fullDescription:
      'Modern software and automation tools offer huge leverage, but choosing what actually works for your business is challenging. We audit your existing processes, identify specific bottlenecks where software or automation will save measurable hours, and build straightforward systems your team will actually use.',
    whoIsItFor:
      'Businesses looking to modernize internal systems or replace outdated legacy software. Companies seeking practical technical guidance and implementation rather than abstract theory.',
    typicalProblems: [
      'The team is unsure which software tools are actually worth paying for',
      'Previous software initiatives were abandoned because they were too complex',
      'Manual processes are undocumented and rely on individual staff habits',
      'Customer enquiries and project files are scattered across multiple disconnected tools',
      'The business wants to scale operations without proportionally increasing headcount',
    ],
    whatWeBuild: [
      'Operational workflow audits and bottleneck mapping',
      'Software stack evaluation and integration plans',
      'Custom webhook and API pipeline architectures',
      'Implementation support, testing, and team onboarding',
      'Internal dashboard and operational tools',
    ],
    projectOutputs: [
      'A clear audit map of automatable business processes',
      'Recommended tool stack with cost and timeline breakdowns',
      'Production-ready workflow blueprints',
      'Hands-on implementation and team training',
      'Ongoing technical advisory and support',
    ],
    cta: {
      label: 'Start a Conversation',
      href: '/contact',
    },
  },
];

export function getServiceById(id: string): Service | undefined {
  return services.find((s) => s.id === id);
}
