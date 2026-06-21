export type ExperienceEntry = {
  role: string;
  company: string;
  period: string;
  type: 'work' | 'education';
  bullets: string[];
};

export const experience: ExperienceEntry[] = [
  {
    role: 'Full-Stack Developer',
    company: 'Freelance / Contract',
    period: '2023 – Present',
    type: 'work',
    bullets: [
      'Delivered production web products for clients across EdTech, AI, and hospitality verticals.',
      'Built and shipped The New Boston platform frontend, Brainbite.ai, Community Retention, and Sailtech.',
      'Owned end-to-end development: architecture, UI, API integration, and deployment.',
    ],
  },
  {
    role: 'Software Engineer Intern',
    company: 'Open Source Contributor',
    period: '2022 – 2023',
    type: 'work',
    bullets: [
      'Contributed to open-source projects including SkillTrade, a service marketplace platform.',
      'Collaborated with cross-functional teams to design scalable data models and REST APIs.',
      'Improved frontend performance and component reusability across shared codebases.',
    ],
  },
  {
    role: 'BSc Software Engineering',
    company: 'Addis Ababa University',
    period: '2020 – 2024',
    type: 'education',
    bullets: [
      'Studied core computer science: data structures, algorithms, systems design, and databases.',
      'Built multiple team projects spanning mobile, web, and backend domains.',
      'Graduated with strong hands-on experience from coursework and independent projects.',
    ],
  },
];
