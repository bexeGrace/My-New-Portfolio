import Image from 'next/image';
import type { Project } from '@/data/projects';

const tagColors: Record<string, string> = {
  React: 'bg-cyan-500/20 text-cyan-300',
  'Next.js': 'bg-white/10 text-white/80',
  TypeScript: 'bg-blue-500/20 text-blue-300',
  'Tailwind': 'bg-cyan-500/15 text-cyan-200',
  'Node.js': 'bg-green-500/20 text-green-300',
  Python: 'bg-yellow-500/20 text-yellow-300',
  PostgreSQL: 'bg-indigo-500/20 text-indigo-300',
  Supabase: 'bg-emerald-500/20 text-emerald-300',
  AI: 'bg-violet-500/20 text-violet-300',
};

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group rounded-2xl overflow-hidden border border-white/15 glass-effect hover:shadow-2xl hover:shadow-violet-900/40 hover:-translate-y-1 hover:scale-[1.02] transition-all duration-300 flex flex-col">
      <div className="h-48 relative overflow-hidden flex-shrink-0">
        <Image
          src={project.image}
          alt={project.name}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-700"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-300" />
      </div>
      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-xl font-semibold mb-2 group-hover:text-cyan-300 transition-colors">
          {project.name}
        </h3>
        <p className="text-foreground/70 mb-4 flex-1 leading-relaxed">{project.description}</p>
        <div className="flex gap-2 mb-4 flex-wrap">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className={`text-xs px-2.5 py-1 rounded-full font-medium ${tagColors[tag] ?? 'bg-white/10 text-white/70'}`}
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="flex gap-4 flex-wrap">
          {project.website && (
            <a
              href={project.website}
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-300 hover:text-cyan-200 font-semibold text-sm flex items-center gap-1 group/link"
            >
              Live Demo
              <span className="group-hover/link:translate-x-1 transition-transform inline-block">→</span>
            </a>
          )}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/70 hover:text-foreground font-semibold text-sm flex items-center gap-1 group/link"
            >
              GitHub
              <span className="group-hover/link:translate-x-1 transition-transform inline-block">→</span>
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
