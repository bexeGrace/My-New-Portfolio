import Image from 'next/image';
import ScrollAnimation from '@/components/ScrollAnimation';

export default function HeroSection() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-24 pb-12 relative"
    >
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 xl:gap-20 items-center">
          <ScrollAnimation direction="right" className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 glass-effect mb-6">
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
              <p className="text-sm text-foreground/80 font-medium">Open to exciting collaborations</p>
            </div>

            <div className="space-y-5">
              <p className="text-lg md:text-xl text-cyan-300 font-semibold tracking-wide uppercase">
                Portfolio Experience
              </p>
              <h1 className="text-5xl md:text-7xl font-black leading-[0.95] bg-gradient-to-r from-cyan-300 via-violet-300 to-pink-300 bg-clip-text text-transparent animate-gradient">
                Hi, I&apos;m Betsegaw
              </h1>
              <p className="text-xl md:text-2xl text-foreground/80 font-medium">
                Full-Stack Developer crafting expressive web products.
              </p>
              <p className="text-base md:text-lg text-foreground/65 max-w-xl mx-auto lg:mx-0">
                I blend visual storytelling, clean architecture, and user empathy to ship experiences
                that are memorable, fast, and deeply human.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mt-10">
              <a
                href="#projects"
                className="px-8 py-3 bg-gradient-to-r from-cyan-500 via-blue-600 to-violet-600 text-white rounded-xl font-semibold hover:shadow-2xl hover:shadow-violet-600/40 hover:scale-[1.03] transition-all duration-300 relative overflow-hidden group"
              >
                <span className="relative z-10">View My Work</span>
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-violet-600 to-cyan-500" />
              </a>
              <a
                href="#contact"
                className="px-8 py-3 rounded-xl font-semibold border border-white/20 glass-effect hover:scale-[1.03] hover:border-cyan-300/40 transition-all duration-300"
              >
                Let&apos;s Build Something
              </a>
              <a
                href="/resume.pdf"
                download
                className="px-8 py-3 rounded-xl font-semibold border border-cyan-400/30 text-cyan-300 hover:bg-cyan-400/10 hover:scale-[1.03] transition-all duration-300 flex items-center gap-2 justify-center"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Resume
              </a>
            </div>

            <div className="mt-10 grid grid-cols-3 gap-3 max-w-lg mx-auto lg:mx-0">
              {['Design-led', 'Performance-first', 'Product-focused'].map((badge) => (
                <div
                  key={badge}
                  className="text-xs md:text-sm text-foreground/80 py-2 px-3 rounded-full border border-white/15 glass-effect text-center"
                >
                  {badge}
                </div>
              ))}
            </div>
          </ScrollAnimation>

          <ScrollAnimation direction="left" delay={200}>
            <div className="relative max-w-md mx-auto">
              <div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-r from-cyan-500/40 via-violet-500/40 to-pink-500/40 blur-2xl opacity-60" />
              <div className="relative glass-effect rounded-[2rem] p-6 md:p-8 border border-white/20 shadow-2xl">
                <div className="relative w-full aspect-square rounded-3xl overflow-hidden animate-float">
                  <Image
                    src="/images/hero.jpg"
                    alt="Betsegaw"
                    fill
                    className="object-cover"
                    priority
                    sizes="(max-width: 1024px) 70vw, 420px"
                  />
                </div>

                <div className="mt-5 grid grid-cols-2 gap-3">
                  <div className="rounded-xl px-4 py-3 bg-white/5 border border-white/10">
                    <p className="text-xs uppercase tracking-widest text-foreground/60">Based In</p>
                    <p className="font-semibold text-foreground/90">Addis Ababa</p>
                  </div>
                  <div className="rounded-xl px-4 py-3 bg-white/5 border border-white/10">
                    <p className="text-xs uppercase tracking-widest text-foreground/60">Specialty</p>
                    <p className="font-semibold text-foreground/90">Web Products</p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollAnimation>
        </div>

        <ScrollAnimation direction="up" delay={400}>
          <div className="mt-16 flex justify-center">
            <a href="#about" className="text-foreground/60 hover:text-foreground transition-colors group flex flex-col items-center gap-3">
              <div className="w-10 h-16 border border-white/20 rounded-full flex items-start justify-center p-2 glass-effect">
                <div className="w-1.5 h-3 bg-foreground/80 rounded-full animate-bounce" />
              </div>
              <svg className="w-5 h-5 group-hover:translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v14m0 0l-6-6m6 6l6-6" />
              </svg>
            </a>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
}
