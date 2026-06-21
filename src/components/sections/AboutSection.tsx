import ScrollAnimation from '@/components/ScrollAnimation';
import SectionTitle from '@/components/ui/SectionTitle';
import { focusAreas } from '@/data/focusAreas';

export default function AboutSection() {
  return (
    <section
      id="about"
      className="py-24 px-4 sm:px-6 lg:px-8 relative bg-white/[0.02]"
    >
      <div className="max-w-6xl mx-auto w-full">
        <ScrollAnimation direction="down">
          <SectionTitle
            title="More Than Code"
            subtitle="I build products that feel alive: clear interaction, strong motion language, and purposeful decisions at every layer."
          />
        </ScrollAnimation>

        <ScrollAnimation direction="up" delay={100}>
          <div className="grid lg:grid-cols-2 gap-8 items-stretch">
            <div className="glass-effect rounded-3xl p-7 md:p-9 border border-white/15">
              <p className="text-lg text-foreground/85 leading-relaxed">
                I&apos;m a passionate builder who treats every project as both engineering and
                storytelling. My work balances aesthetics with function, making each product
                visually striking without sacrificing usability.
              </p>
              <p className="text-lg text-foreground/70 leading-relaxed mt-5">
                When I&apos;m not shipping software, I&apos;m exploring modern tech, analyzing product
                experiences, and sharpening the craft that turns ideas into impact.
              </p>
            </div>

            <div className="grid gap-4">
              {focusAreas.map((area, index) => (
                <ScrollAnimation key={area.title} direction="left" delay={index * 120}>
                  <div
                    className={`rounded-2xl p-6 border bg-gradient-to-r ${area.color} hover:scale-[1.02] hover:-translate-y-1 transition-all duration-300`}
                  >
                    <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
                      <span className="text-2xl">{area.icon}</span>
                      {area.title}
                    </h3>
                    <p className="text-foreground/75 leading-relaxed">{area.description}</p>
                  </div>
                </ScrollAnimation>
              ))}
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
}
