export type FocusArea = {
  icon: string;
  title: string;
  description: string;
  color: string;
};

export const focusAreas: FocusArea[] = [
  {
    icon: '🎨',
    title: 'Visual Frontend Systems',
    description:
      'Interface architecture with strong design language, animation intent, and responsive detail.',
    color: 'from-cyan-500/20 to-blue-600/20 border-cyan-400/30',
  },
  {
    icon: '⚙️',
    title: 'Product + Backend Thinking',
    description:
      'I build for outcomes: fast APIs, scalable data flow, and decisions that support long-term growth.',
    color: 'from-violet-500/20 to-fuchsia-600/20 border-violet-400/30',
  },
  {
    icon: '🚀',
    title: 'Execution + Ownership',
    description:
      'From concept to deployment, I thrive in shipping meaningful experiences with polish and reliability.',
    color: 'from-emerald-500/20 to-teal-600/20 border-emerald-400/30',
  },
];
