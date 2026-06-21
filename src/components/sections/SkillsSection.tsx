import ScrollAnimation from '@/components/ScrollAnimation';
import SectionTitle from '@/components/ui/SectionTitle';
import SkillBadge from '@/components/ui/SkillBadge';
import { skillStack, skillCategories } from '@/data/skills';

export default function SkillsSection() {
  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 bg-white/[0.02]">
      <div className="max-w-6xl mx-auto w-full">
        <ScrollAnimation direction="down">
          <SectionTitle
            title="My Creative Stack"
            subtitle="Tools and technologies I use to design, build, and scale digital products."
          />
        </ScrollAnimation>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mb-14">
          {skillStack.map((skill, index) => (
            <ScrollAnimation key={skill.name} direction="fade" delay={index * 50}>
              <SkillBadge skill={skill} />
            </ScrollAnimation>
          ))}
        </div>

        <ScrollAnimation direction="up" delay={200}>
          <div className="grid md:grid-cols-3 gap-6">
            {skillCategories.map((cat) => (
              <div
                key={cat.title}
                className={`rounded-2xl p-6 border bg-gradient-to-br ${cat.color} hover:shadow-xl hover:scale-[1.02] hover:-translate-y-1 transition-all duration-300`}
              >
                <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                  <span className="text-2xl">{cat.icon}</span> {cat.title}
                </h3>
                <p className="text-foreground/75 leading-relaxed">{cat.description}</p>
              </div>
            ))}
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
}
