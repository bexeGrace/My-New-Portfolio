import Image from 'next/image';
import type { Skill } from '@/data/skills';

export default function SkillBadge({ skill }: { skill: Skill }) {
  return (
    <div className="group relative rounded-2xl p-6 text-center border border-white/15 glass-effect hover:scale-[1.02] hover:-translate-y-1 transition-all duration-300 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 via-violet-500/10 to-pink-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="relative mb-3 flex justify-center">
        <div className="w-11 h-11 rounded-xl bg-black/20 border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
          <Image
            src={skill.icon}
            alt={skill.name}
            width={24}
            height={24}
            className="object-contain"
          />
        </div>
      </div>
      <div className="relative font-semibold text-sm text-foreground/90">{skill.name}</div>
    </div>
  );
}
