import Navigation from '@/components/Navigation';
import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import ExperienceSection from '@/components/sections/ExperienceSection';
import SkillsSection from '@/components/sections/SkillsSection';
import ProjectsSection from '@/components/sections/ProjectsSection';
import ContactSection from '@/components/sections/ContactSection';

export default function Home() {
  return (
    <>
      <Navigation />
      <main className="relative overflow-hidden">
        <div className="fixed inset-0 -z-10 pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_20%,rgba(124,58,237,0.25),transparent_35%),radial-gradient(circle_at_85%_30%,rgba(14,165,233,0.25),transparent_35%),radial-gradient(circle_at_50%_80%,rgba(236,72,153,0.2),transparent_40%)]" />
        </div>
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
        <footer className="bg-white/[0.03] py-8 text-center text-foreground/60 border-t border-white/10">
          <p>© {new Date().getFullYear()} Betsegaw. All rights reserved.</p>
        </footer>
      </main>
    </>
  );
}
