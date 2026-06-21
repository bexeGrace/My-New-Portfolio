export type Skill = {
  name: string;
  icon: string;
  category: 'frontend' | 'backend' | 'tooling';
};

export const skillStack: Skill[] = [
  { name: 'Next.js', icon: 'https://cdn.simpleicons.org/nextdotjs/FFFFFF', category: 'frontend' },
  { name: 'React', icon: 'https://cdn.simpleicons.org/react/61DAFB', category: 'frontend' },
  { name: 'TypeScript', icon: 'https://cdn.simpleicons.org/typescript/3178C6', category: 'frontend' },
  { name: 'Tailwind CSS', icon: 'https://cdn.simpleicons.org/tailwindcss/06B6D4', category: 'frontend' },
  { name: 'Node.js', icon: 'https://cdn.simpleicons.org/nodedotjs/339933', category: 'backend' },
  { name: 'Python', icon: 'https://cdn.simpleicons.org/python/3776AB', category: 'backend' },
  { name: 'PostgreSQL', icon: 'https://cdn.simpleicons.org/postgresql/4169E1', category: 'backend' },
  { name: 'Supabase', icon: 'https://cdn.simpleicons.org/supabase/3ECF8E', category: 'backend' },
  { name: 'Git/GitHub', icon: 'https://cdn.simpleicons.org/git/F05032', category: 'tooling' },
];

export const skillCategories = [
  {
    icon: '🧩',
    title: 'Frontend',
    description: 'React, Next.js, TypeScript, Tailwind CSS, Framer-style motion language',
    color: 'border-cyan-400/30 from-cyan-500/15 to-blue-600/10',
  },
  {
    icon: '🛠️',
    title: 'Backend',
    description: 'Node.js, Python, API design, data modeling, secure integration patterns',
    color: 'border-violet-400/30 from-violet-500/15 to-fuchsia-600/10',
  },
  {
    icon: '📈',
    title: 'Product Mindset',
    description: 'Performance, maintainability, user clarity, and measurable business value',
    color: 'border-emerald-400/30 from-emerald-500/15 to-teal-600/10',
  },
];
