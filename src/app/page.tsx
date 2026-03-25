'use client';

import Navigation from '@/components/Navigation';
import ScrollAnimation from '@/components/ScrollAnimation';
import Image from 'next/image';

export default function Home() {
  const skillStack = [
    { name: 'Next.js', icon: 'https://cdn.simpleicons.org/nextdotjs/FFFFFF' },
    { name: 'Supabase', icon: 'https://cdn.simpleicons.org/supabase/3ECF8E' },
    { name: 'React', icon: 'https://cdn.simpleicons.org/react/61DAFB' },
    { name: 'TypeScript', icon: 'https://cdn.simpleicons.org/typescript/3178C6' },
    { name: 'Node.js', icon: 'https://cdn.simpleicons.org/nodedotjs/339933' },
    { name: 'Python', icon: 'https://cdn.simpleicons.org/python/3776AB' },
    { name: 'Tailwind CSS', icon: 'https://cdn.simpleicons.org/tailwindcss/06B6D4' },
    { name: 'PostgreSQL', icon: 'https://cdn.simpleicons.org/postgresql/4169E1' },
    { name: 'Git/GitHub', icon: 'https://cdn.simpleicons.org/git/F05032' },
  ];

  const focusAreas = [
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

  const projects = [
    {
      name: 'The New Boston',
      website: 'https://thenewboston.net',
      github: 'https://github.com/bexeGrace/thenewboston-Frontend',
      image: '/images/thenewboston.png',
      description:
        'Community-powered education platform frontend with a modern and intuitive learning experience.',
    },
    {
      name: 'Brainbite.ai',
      website: 'https://app.brainbite.ai',
      github: null,
      image: '/images/brainbite.png',
      description:
        'AI product experience designed for high-clarity interactions, fast content generation, and conversion.',
    },
    {
      name: 'Community Retention',
      website: 'https://app.communityretention.com',
      github: null,
      image: '/images/communityretention.png',
      description:
        'Retention platform helping communities increase engagement through actionable member insights.',
    },
    {
      name: 'Sailtech Hotel Marketing',
      website: 'https://app.sailtech.com',
      github: null,
      image: '/images/sail.png',
      description:
        'Marketing workflow product for hotels to coordinate campaigns and improve occupancy performance.',
    },
    {
      name: 'Skilltrade',
      website: null,
      github: 'https://github.com/abe16s/SkillTrade',
      image: '/images/skilltrade.jpg',
      description:
        'Service marketplace connecting skilled technicians with homeowners needing quality installation support.',
    },
  ];

  return (
    <>
      <Navigation />
      <main className="relative overflow-hidden">
        <div className="fixed inset-0 -z-10 pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_20%,rgba(124,58,237,0.25),transparent_35%),radial-gradient(circle_at_85%_30%,rgba(14,165,233,0.25),transparent_35%),radial-gradient(circle_at_50%_80%,rgba(236,72,153,0.2),transparent_40%)]" />
          <div className="absolute inset-0 noise-overlay opacity-30" />
        </div>

        <section
          id="home"
          className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-24 pb-12 relative"
        >
          <div className="max-w-7xl mx-auto w-full">
            <div className="grid lg:grid-cols-2 gap-12 xl:gap-20 items-center">
              <ScrollAnimation direction="right" className="text-center lg:text-left">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 glass-effect mb-6">
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-400 animate-pulse" />
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
                  <div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-r from-cyan-500/40 via-violet-500/40 to-pink-500/40 blur-2xl animate-pulse" />
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
                <a href="#about" className="text-foreground/60 hover:text-foreground transition-colors group">
                  <div className="w-10 h-16 border border-white/20 rounded-full flex items-start justify-center p-2 glass-effect">
                    <div className="w-1.5 h-3 bg-foreground/80 rounded-full animate-bounce" />
                  </div>
                  <svg className="w-6 h-6 mx-auto mt-3 group-hover:translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 5v14m0 0l-6-6m6 6l6-6"
                    />
                  </svg>
                </a>
              </div>
            </ScrollAnimation>
          </div>
        </section>

        <section
          id="about"
          className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20 relative"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/[0.03] to-transparent" />
          <div className="max-w-6xl mx-auto w-full relative z-10">
            <ScrollAnimation direction="down">
              <h2 className="text-4xl md:text-6xl font-bold mb-4 text-center bg-gradient-to-r from-cyan-300 via-violet-300 to-pink-300 bg-clip-text text-transparent">
                More Than Code
              </h2>
              <p className="text-center text-foreground/65 max-w-2xl mx-auto">
                I build products that feel alive: clear interaction, strong motion language, and purposeful
                decisions at every layer.
              </p>
            </ScrollAnimation>

            <ScrollAnimation direction="up" delay={100}>
              <div className="grid lg:grid-cols-2 gap-10 items-stretch mt-12">
                <div className="glass-effect rounded-3xl p-7 md:p-9 border border-white/15">
                  <p className="text-lg text-foreground/85 leading-relaxed">
                    I&apos;m a passionate builder who treats every project as both engineering and
                    storytelling. My work balances aesthetics with function, making each product
                    visually striking without sacrificing usability.
                  </p>
                  <p className="text-lg text-foreground/75 leading-relaxed mt-5">
                    When I&apos;m not shipping software, I&apos;m exploring modern tech, analyzing product
                    experiences, and sharpening the craft that turns ideas into impact.
                  </p>
                </div>

                <div className="grid gap-4">
                  {focusAreas.map((area, index) => (
                    <ScrollAnimation key={area.title} direction="left" delay={index * 120}>
                      <div className={`rounded-2xl p-6 border bg-gradient-to-r ${area.color} hover:scale-[1.02] transition-all duration-300`}>
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

        <section
          id="skills"
          className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20"
        >
          <div className="max-w-6xl mx-auto w-full">
            <ScrollAnimation direction="down">
              <h2 className="text-4xl md:text-6xl font-bold mb-4 text-center bg-gradient-to-r from-cyan-300 via-violet-300 to-pink-300 bg-clip-text text-transparent">
                My Creative Stack
              </h2>
              <p className="text-center text-foreground/65 mb-12">
                Tools and technologies I use to design, build, and scale digital products.
              </p>
            </ScrollAnimation>

            <ScrollAnimation direction="up" delay={100}>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mb-14">
                {skillStack.map((skill, index) => (
                  <ScrollAnimation
                    key={skill.name}
                    direction="fade"
                    delay={index * 50}
                  >
                    <div className="group relative rounded-2xl p-6 text-center border border-white/15 glass-effect hover:scale-105 transition-all duration-300 overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-violet-500/15 to-pink-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="relative mb-3 flex justify-center">
                        <div className="w-10 h-10 rounded-xl bg-black/20 border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <img
                            src={skill.icon}
                            alt={skill.name}
                            width={22}
                            height={22}
                            loading="lazy"
                            decoding="async"
                          />
                        </div>
                      </div>
                      <div className="relative font-semibold">{skill.name}</div>
                    </div>
                  </ScrollAnimation>
                ))}
              </div>
            </ScrollAnimation>

            <ScrollAnimation direction="up" delay={200}>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="rounded-2xl p-6 border border-cyan-400/30 bg-gradient-to-br from-cyan-500/15 to-blue-600/10 hover:shadow-xl hover:scale-[1.02] transition-all duration-300">
                  <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                    <span className="text-2xl">🧩</span> Frontend
                  </h3>
                  <p className="text-foreground/75">
                    React, Next.js, TypeScript, Tailwind CSS, Framer-style motion language
                  </p>
                </div>
                <div className="rounded-2xl p-6 border border-violet-400/30 bg-gradient-to-br from-violet-500/15 to-fuchsia-600/10 hover:shadow-xl hover:scale-[1.02] transition-all duration-300">
                  <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                    <span className="text-2xl">🛠️</span> Backend
                  </h3>
                  <p className="text-foreground/75">
                    Node.js, Python, API design, data modeling, secure integration patterns
                  </p>
                </div>
                <div className="rounded-2xl p-6 border border-emerald-400/30 bg-gradient-to-br from-emerald-500/15 to-teal-600/10 hover:shadow-xl hover:scale-[1.02] transition-all duration-300">
                  <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                    <span className="text-2xl">📈</span> Product Mindset
                  </h3>
                  <p className="text-foreground/75">
                    Performance, maintainability, user clarity, and measurable business value
                  </p>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </section>

        <section
          id="projects"
          className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20 relative"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/[0.03] to-transparent" />
          <div className="max-w-6xl mx-auto w-full relative z-10">
            <ScrollAnimation direction="down">
              <h2 className="text-4xl md:text-6xl font-bold mb-4 text-center bg-gradient-to-r from-cyan-300 via-violet-300 to-pink-300 bg-clip-text text-transparent">
                Featured Projects
              </h2>
              <p className="text-center text-foreground/65 mb-12">
                Selected builds where design, engineering, and product thinking come together.
              </p>
            </ScrollAnimation>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
              {projects.map((project, index) => (
                <ScrollAnimation
                  key={project.name}
                  direction="up"
                  delay={index * 100}
                >
                  <article className="group rounded-2xl overflow-hidden border border-white/15 glass-effect hover:shadow-2xl hover:shadow-violet-900/40 hover:-translate-y-1 transition-all duration-300">
                    <div className="h-48 relative overflow-hidden">
                      <Image
                        src={project.image}
                        alt={project.name}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-300" />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-semibold mb-2 group-hover:text-cyan-300 transition-colors">
                        {project.name}
                      </h3>
                      <p className="text-foreground/75 mb-4">{project.description}</p>
                      <div className="flex gap-2 mb-4 flex-wrap">
                        <span className="text-xs bg-cyan-500/20 text-cyan-300 px-2 py-1 rounded">
                          React
                        </span>
                        <span className="text-xs bg-violet-500/20 text-violet-300 px-2 py-1 rounded">
                          TypeScript
                        </span>
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
                            <span className="group-hover/link:translate-x-1 transition-transform">→</span>
                          </a>
                        )}
                        {project.github && (
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-foreground/80 hover:text-foreground font-semibold text-sm flex items-center gap-1 group/link"
                          >
                            GitHub
                            <span className="group-hover/link:translate-x-1 transition-transform">→</span>
                          </a>
                        )}
                      </div>
                    </div>
                  </article>
                </ScrollAnimation>
              ))}
            </div>
          </div>
        </section>

        <section
          id="contact"
          className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20"
        >
          <div className="max-w-2xl mx-auto w-full text-center">
            <ScrollAnimation direction="down">
              <h2 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-cyan-300 via-violet-300 to-pink-300 bg-clip-text text-transparent">
                Let&apos;s Create Something Magnetic
              </h2>
              <p className="text-lg text-foreground/70 mb-12">
                I&apos;m open to creative collaborations, impactful product work, and ideas that challenge the
                ordinary.
              </p>
            </ScrollAnimation>

            <ScrollAnimation direction="up" delay={100}>
              <div className="glass-effect rounded-3xl p-8 border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-300">
                <form className="space-y-6 text-left">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium mb-2"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full px-4 py-3 rounded-xl border border-white/20 bg-white/5 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all"
                      placeholder="Your Name"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium mb-2"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full px-4 py-3 rounded-xl border border-white/20 bg-white/5 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium mb-2"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      className="w-full px-4 py-3 rounded-xl border border-white/20 bg-white/5 focus:outline-none focus:ring-2 focus:ring-cyan-400 resize-none transition-all"
                      placeholder="Your message here..."
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full px-8 py-3 bg-gradient-to-r from-cyan-500 via-blue-600 to-violet-600 text-white rounded-xl font-semibold hover:shadow-xl hover:shadow-violet-600/50 hover:scale-[1.02] transition-all duration-300 relative overflow-hidden group"
                  >
                    <span className="relative z-10">Send Message</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-violet-600 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </button>
                </form>
              </div>
            </ScrollAnimation>

            <ScrollAnimation direction="up" delay={200}>
              <div className="mt-12 flex justify-center gap-6">
                <a
                  href="https://www.github.com/bexeGrace"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground/70 hover:text-foreground transition-all hover:scale-125 p-3 rounded-full hover:bg-white/10"
                  aria-label="GitHub"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/in/betsegaw-mesele-70136620a/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground/70 hover:text-foreground transition-all hover:scale-125 p-3 rounded-full hover:bg-white/10"
                  aria-label="LinkedIn"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
              </div>
            </ScrollAnimation>
          </div>
        </section>

        <footer className="bg-white/[0.03] py-8 text-center text-foreground/60 border-t border-white/10">
          <p>© {new Date().getFullYear()} Betsegaw. All rights reserved.</p>
        </footer>
      </main>
    </>
  );
}
