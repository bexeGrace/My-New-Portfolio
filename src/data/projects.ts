export type Project = {
  name: string;
  website: string | null;
  github: string | null;
  image: string;
  description: string;
  tags: string[];
};

export const projects: Project[] = [
  {
    name: 'The New Boston',
    website: 'https://thenewboston.net',
    github: 'https://github.com/bexeGrace/thenewboston-Frontend',
    image: '/images/thenewboston.png',
    description:
      'Community-powered education platform frontend with a modern and intuitive learning experience.',
    tags: ['React', 'TypeScript', 'Tailwind'],
  },
  {
    name: 'Brainbite.ai',
    website: 'https://app.brainbite.ai',
    github: null,
    image: '/images/brainbite.png',
    description:
      'AI product experience designed for high-clarity interactions, fast content generation, and conversion.',
    tags: ['Next.js', 'AI', 'TypeScript'],
  },
  {
    name: 'Community Retention',
    website: 'https://app.communityretention.com',
    github: null,
    image: '/images/communityretention.png',
    description:
      'Retention platform helping communities increase engagement through actionable member insights.',
    tags: ['React', 'Node.js', 'PostgreSQL'],
  },
  {
    name: 'Sailtech Hotel Marketing',
    website: 'https://app.sailtech.com',
    github: null,
    image: '/images/sail.png',
    description:
      'Marketing workflow product for hotels to coordinate campaigns and improve occupancy performance.',
    tags: ['Next.js', 'TypeScript', 'Supabase'],
  },
  {
    name: 'Skilltrade',
    website: null,
    github: 'https://github.com/abe16s/SkillTrade',
    image: '/images/skilltrade.jpg',
    description:
      'Service marketplace connecting skilled technicians with homeowners needing quality installation support.',
    tags: ['React', 'Python', 'PostgreSQL'],
  },
];
