export interface Project {
  slug: string;
  title: string;
  category: string;
  description: string;
  image: string;
  status: 'Concept Project' | 'Demonstration Project' | 'Internal Build' | 'Client Project';
  projectUrl?: string;
  caseStudyUrl?: string;
  overview: string;
  challenge: string;
  approach: string;
  solution: string;
  technologies: string[];
  outcome: string;
}

export const projects: Project[] = [
  {
    slug: 'real-estate-concept',
    title: 'Real Estate Website',
    category: 'Website Development',
    description:
      'A modern website concept for a premium real estate business, focused on property presentation, enquiry generation, and building trust with prospective buyers.',
    image: '/projects/real-estate.svg',
    status: 'Concept Project',
    overview:
      'A comprehensive website concept designed for a premium real estate business. The design prioritises clean property presentation, easy navigation, and a strong enquiry flow that connects interested buyers directly with the sales team.',
    challenge:
      'Many real estate businesses depend on portal listings and word-of-mouth, while their own website does not reflect the quality of properties they represent. Buyers often judge credibility based on the digital experience before making contact.',
    approach:
      'We focused on three priorities: presenting properties with clarity, making it simple to get in touch, and ensuring the site worked well on mobile devices where most initial property searches happen.',
    solution:
      'A responsive website with dedicated property listings, neighbourhood information, clear calls to action on every page, and a fast-loading mobile experience. The design uses restrained visuals to let the properties themselves create impact.',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Responsive Design', 'SEO'],
    outcome:
      'This is a concept project demonstrating our approach to real estate websites. It showcases how we structure property information, design enquiry flows, and build trust through clean, professional digital experiences.',
  },
  {
    slug: 'healthcare-concept',
    title: 'Healthcare Website',
    category: 'Website Development',
    description:
      'A website concept for a clinic or healthcare group, emphasising credibility, clear service information, appointment access, and a strong mobile experience.',
    image: '/projects/healthcare.svg',
    status: 'Concept Project',
    overview:
      'A website concept designed for a multi-speciality clinic or healthcare group. The site structure prioritises patient trust, clear presentation of services, easy appointment scheduling, and accurate location information.',
    challenge:
      'Healthcare businesses often have websites that were built years ago and no longer represent the professionalism of the practice. Patients increasingly research clinics online before booking, and an outdated site can undermine confidence.',
    approach:
      'We designed the information architecture around the patient journey: understanding available services, learning about the medical team, finding the right location, and booking an appointment without friction.',
    solution:
      'A clean, accessible website with structured service pages, doctor profiles, location maps with directions, and a straightforward appointment request flow. The design maintains a professional tone appropriate for healthcare.',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Accessibility', 'Mobile-First'],
    outcome:
      'This is a concept project showing how we approach healthcare websites. It demonstrates our focus on accessibility, clear information hierarchy, and building patient confidence through professional digital design.',
  },
  {
    slug: 'lead-automation-concept',
    title: 'Lead and Automation System',
    category: 'Landing Pages & Automation',
    description:
      'A landing page and lead automation concept for a service business, combining enquiry capture with automatic lead organisation and follow-up workflows.',
    image: '/projects/lead-automation.svg',
    status: 'Concept Project',
    overview:
      'A combined landing page and lead management concept designed for a service business that generates enquiries from digital campaigns. The system captures leads, organises them automatically, and initiates follow-up workflows.',
    challenge:
      'Many service businesses run advertising campaigns that generate enquiries, but those leads arrive in a shared inbox or spreadsheet. Without a structured follow-up process, potential customers are lost or contacted too late.',
    approach:
      'We designed a focused landing page optimised for a single clear offer, connected to an automated workflow that categorises incoming enquiries, assigns them to the right person, and triggers timely follow-up reminders.',
    solution:
      'A conversion-focused landing page with a clear value proposition and simple enquiry form, connected to an automated system that organises leads by service type, sends confirmation messages, and creates follow-up tasks for the team.',
    technologies: ['Next.js', 'TypeScript', 'Automation Workflows', 'CRM Integration', 'Forms'],
    outcome:
      'This is a concept project illustrating how we combine focused landing pages with practical automation. It shows our approach to reducing manual lead management and improving response times for service businesses.',
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getAllProjectSlugs(): string[] {
  return projects.map((p) => p.slug);
}
