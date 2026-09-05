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
    title: 'AI Automation',
    shortDescription:
      'Reduce the time your team spends on repetitive tasks by automating routine processes such as lead handling, follow-ups, reporting, and data entry.',
    fullDescription:
      'Many businesses have processes that consume hours every week but follow predictable patterns. Routing incoming leads to the right person, sending follow-up messages, updating records across systems, generating routine reports, or organising documents. These tasks can often be automated without replacing the team, simply by removing the repetitive manual steps.',
    whoIsItFor:
      'Businesses where the team spends significant time on routine administrative work that follows consistent patterns. Companies that have grown beyond the point where manual processes can keep up reliably.',
    typicalProblems: [
      'Leads sit in a shared inbox and are not assigned promptly',
      'Follow-ups depend on individual memory rather than a system',
      'The same data is entered into multiple tools manually',
      'Routine reports take hours to compile each week',
      'Documents are created manually using templates',
      'Information gets lost between tools and team members',
    ],
    whatWeBuild: [
      'Lead routing and assignment workflows',
      'Automated follow-up sequences',
      'CRM and tool integrations',
      'Automated reporting systems',
      'Document generation workflows',
      'Data processing and synchronisation between systems',
    ],
    projectOutputs: [
      'A documented workflow tailored to the business process',
      'Automated systems configured and tested',
      'Integration with existing tools where possible',
      'Documentation for the team to understand and manage the workflow',
      'Monitoring to confirm the automation is running correctly',
    ],
    cta: {
      label: 'Start a Conversation',
      href: '/contact',
    },
  },
  {
    id: 'ai-enablement',
    title: 'AI Enablement',
    shortDescription:
      'Understand where AI can genuinely help your business, and get practical guidance on choosing tools, designing workflows, and implementing them properly.',
    fullDescription:
      'AI tools have become widely available, but knowing where to apply them in a specific business is still difficult. We help organisations identify the processes where AI can create genuine value, choose the right tools for those use cases, and design workflows that the team can actually adopt. This is not about adopting AI for its own sake. It is about finding the specific points in your operations where automation or AI assistance would save meaningful time or reduce errors.',
    whoIsItFor:
      'Businesses that know AI could be useful but are not sure where to start. Companies that have tried AI tools without clear results, or organisations looking for practical guidance rather than general consulting.',
    typicalProblems: [
      'The team is unsure which processes would benefit from AI',
      'Previous AI initiatives did not produce clear results',
      'There are too many tools available and no clear way to evaluate them',
      'The organisation wants to use AI but does not have internal expertise',
      'Processes are not documented well enough to automate',
      'Adopted tools are not being used effectively by the team',
    ],
    whatWeBuild: [
      'Workflow analysis and process mapping',
      'Identification of automatable processes',
      'Tool evaluation and selection guidance',
      'Custom workflow design around AI capabilities',
      'Implementation support and team onboarding',
      'Internal systems that use AI for specific business tasks',
    ],
    projectOutputs: [
      'A clear map of processes suitable for AI assistance',
      'Recommendations for specific tools and approaches',
      'Designed workflows ready for implementation',
      'Implementation support during rollout',
      'Documentation and training for internal teams',
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
