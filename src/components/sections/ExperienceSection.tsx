import ScrollAnimation from '@/components/ScrollAnimation';
import SectionTitle from '@/components/ui/SectionTitle';
import { experience } from '@/data/experience';

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto w-full">
        <ScrollAnimation direction="down">
          <SectionTitle
            title="Experience"
            accent="Experience"
            subtitle="The roles and education that shaped how I think, build, and ship."
          />
        </ScrollAnimation>

        <div className="relative mt-4">
          <div className="absolute left-4 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-400/60 via-violet-400/40 to-transparent" />

          <div className="space-y-10 pl-12 md:pl-20">
            {experience.map((entry, index) => (
              <ScrollAnimation key={index} direction="right" delay={index * 100}>
                <div className="relative">
                  <div className="absolute -left-[3.25rem] md:-left-[4.75rem] top-1.5 w-5 h-5 rounded-full border-2 border-cyan-400 bg-background flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-cyan-400" />
                  </div>

                  <div className="glass-effect rounded-2xl p-6 border border-white/15 hover:border-cyan-400/30 hover:scale-[1.01] transition-all duration-300">
                    <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                      <div>
                        <h3 className="text-xl font-semibold text-foreground/95">{entry.role}</h3>
                        <p className="text-cyan-300 font-medium">{entry.company}</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <span
                          className={`text-xs px-2.5 py-1 rounded-full font-medium ${
                            entry.type === 'education'
                              ? 'bg-violet-500/20 text-violet-300'
                              : 'bg-cyan-500/20 text-cyan-300'
                          }`}
                        >
                          {entry.type === 'education' ? '🎓 Education' : '💼 Work'}
                        </span>
                        <span className="text-sm text-foreground/60 whitespace-nowrap">{entry.period}</span>
                      </div>
                    </div>
                    <ul className="space-y-2">
                      {entry.bullets.map((bullet, i) => (
                        <li key={i} className="flex gap-2 text-foreground/70 leading-relaxed">
                          <span className="text-cyan-400 mt-1.5 flex-shrink-0">▸</span>
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
