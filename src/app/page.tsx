'use client';

import Navigation from '@/components/Navigation';
import ScrollAnimation from '@/components/ScrollAnimation';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <Navigation />
      <main className="relative overflow-hidden">
        {/* Background gradient effects */}
        <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
          <div className="absolute top-0 -left-4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 -right-4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl"></div>
        </div>

        {/* Hero Section */}
        <section
          id="home"
          className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20 relative"
        >
          <div className="max-w-6xl mx-auto w-full">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Text Content */}
              <ScrollAnimation direction="right" className="text-center md:text-left">
                <div className="mb-6">
                  <p className="text-lg md:text-xl text-blue-600 dark:text-blue-400 mb-4 font-semibold">
                    Welcome to my portfolio
                  </p>
                  <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-gradient">
                    Hi, I'm Betsegaw
                  </h1>
                  <p className="text-xl md:text-2xl text-foreground/70 mb-2">
                    Full Stack Developer
                  </p>
                  <p className="text-lg md:text-xl text-foreground/60">
                    Building beautiful and functional web experiences
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mt-8">
                  <a
                    href="#projects"
                    className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:shadow-2xl hover:shadow-purple-500/50 hover:scale-105 transition-all duration-300 relative overflow-hidden group"
                  >
                    <span className="relative z-10">View My Work</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </a>
                  <a
                    href="#contact"
                    className="px-8 py-3 border-2 border-foreground/20 rounded-lg font-semibold hover:bg-foreground/5 hover:border-blue-500/50 transition-all duration-300"
                  >
                    Get In Touch
                  </a>
                </div>
              </ScrollAnimation>

              {/* Profile Picture */}
              <ScrollAnimation direction="left" delay={200}>
                <div className="flex justify-center md:justify-end">
                  <div className="relative w-64 h-64 md:w-80 md:h-80">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full blur-2xl opacity-30 animate-pulse"></div>
                    <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-foreground/10 shadow-2xl animate-float">
                      <Image
                        src="/images/hero.jpg"
                        alt="Betsegaw"
                        fill
                        className="object-cover"
                        priority
                        sizes="(max-width: 768px) 256px, 320px"
                      />
                    </div>
                    <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-background/90 backdrop-blur-sm px-4 py-2 rounded-full border border-foreground/10 shadow-lg">
                      <p className="text-sm font-semibold text-foreground">
                        Available for hire
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollAnimation>
            </div>

            {/* Scroll Indicator */}
            <ScrollAnimation direction="up" delay={400}>
              <div className="mt-16 flex justify-center">
                <a href="#about" className="text-foreground/50 hover:text-foreground/80 animate-bounce">
                  <svg
                    className="w-8 h-8 mx-auto"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 14l-7 7m0 0l-7-7m7 7V3"
                    />
                  </svg>
                </a>
              </div>
            </ScrollAnimation>
          </div>
        </section>

        {/* About Section */}
        <section
          id="about"
          className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20 relative"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-foreground/5 to-transparent"></div>
          <div className="max-w-4xl mx-auto relative z-10">
            <ScrollAnimation direction="down">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                About Me
              </h2>
            </ScrollAnimation>
            <ScrollAnimation direction="up" delay={100}>
              <div className="grid md:grid-cols-2 gap-12 items-center mt-12">
                <div className="space-y-6">
                  <p className="text-lg text-foreground/80 leading-relaxed">
                    I'm a passionate developer with a love for creating innovative
                    solutions and bringing ideas to life through code. With expertise
                    in modern web technologies, I specialize in building responsive,
                    user-friendly applications that deliver exceptional experiences.
                  </p>
                  <p className="text-lg text-foreground/80 leading-relaxed">
                    When I'm not coding, you can find me exploring new technologies,
                    contributing to open-source projects, or sharing knowledge with
                    the developer community.
                  </p>
                </div>
                <ScrollAnimation direction="left" delay={200}>
                  <div className="bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 rounded-2xl p-8 border border-foreground/10 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                    <h3 className="text-2xl font-semibold mb-4">Quick Facts</h3>
                    <ul className="space-y-3 text-foreground/80">
                      <li className="flex items-center gap-3">
                        <span className="text-blue-600 text-xl">✓</span>
                        Years of experience in web development
                      </li>
                      <li className="flex items-center gap-3">
                        <span className="text-blue-600 text-xl">✓</span>
                        Passionate about clean code and best practices
                      </li>
                      <li className="flex items-center gap-3">
                        <span className="text-blue-600 text-xl">✓</span>
                        Always learning and adapting to new technologies
                      </li>
                      <li className="flex items-center gap-3">
                        <span className="text-blue-600 text-xl">✓</span>
                        Strong problem-solving and analytical skills
                      </li>
                    </ul>
                  </div>
                </ScrollAnimation>
              </div>
            </ScrollAnimation>
          </div>
        </section>

        {/* Skills Section */}
        <section
          id="skills"
          className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20"
        >
          <div className="max-w-6xl mx-auto w-full">
            <ScrollAnimation direction="down">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Skills & Technologies
              </h2>
              <p className="text-center text-foreground/60 mb-12">
                Technologies I work with
              </p>
            </ScrollAnimation>
            
            <ScrollAnimation direction="up" delay={100}>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
                {[
                  'React',
                  'Next.js',
                  'TypeScript',
                  'JavaScript',
                  'Node.js',
                  'Python',
                  'Tailwind CSS',
                  'Git',
                ].map((skill, index) => (
                  <ScrollAnimation
                    key={skill}
                    direction="fade"
                    delay={index * 50}
                  >
                    <div className="bg-foreground/5 rounded-xl p-6 text-center hover:bg-foreground/10 hover:scale-110 transition-all duration-300 border border-foreground/10 hover:border-blue-500/50 hover:shadow-lg group">
                      <div className="text-3xl mb-2 group-hover:scale-125 transition-transform duration-300">💻</div>
                      <div className="font-semibold">{skill}</div>
                    </div>
                  </ScrollAnimation>
                ))}
              </div>
            </ScrollAnimation>

            <ScrollAnimation direction="up" delay={200}>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-gradient-to-br from-blue-500/10 to-blue-600/10 rounded-xl p-6 border border-blue-500/20 hover:shadow-xl hover:scale-105 transition-all duration-300">
                  <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                    <span className="text-2xl">🎨</span> Frontend
                  </h3>
                  <p className="text-foreground/70">
                    React, Next.js, TypeScript, Tailwind CSS, HTML5, CSS3
                  </p>
                </div>
                <div className="bg-gradient-to-br from-purple-500/10 to-purple-600/10 rounded-xl p-6 border border-purple-500/20 hover:shadow-xl hover:scale-105 transition-all duration-300">
                  <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                    <span className="text-2xl">⚙️</span> Backend
                  </h3>
                  <p className="text-foreground/70">
                    Node.js, Python, REST APIs, Database Design
                  </p>
                </div>
                <div className="bg-gradient-to-br from-pink-500/10 to-pink-600/10 rounded-xl p-6 border border-pink-500/20 hover:shadow-xl hover:scale-105 transition-all duration-300">
                  <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                    <span className="text-2xl">🛠️</span> Tools
                  </h3>
                  <p className="text-foreground/70">
                    Git, VS Code, Docker, CI/CD, Testing
                  </p>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </section>

        {/* Projects Section */}
        <section
          id="projects"
          className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20 relative"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-foreground/5 to-transparent"></div>
          <div className="max-w-6xl mx-auto w-full relative z-10">
            <ScrollAnimation direction="down">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Featured Projects
              </h2>
              <p className="text-center text-foreground/60 mb-12">
                Some of my recent work
              </p>
            </ScrollAnimation>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  name: 'The New Boston',
                  website: 'https://thenewboston.net',
                  github: 'https://github.com/bexeGrace/thenewboston-Frontend',
                  image: '/images/thenewboston.png',
                  description: 'Frontend for thenewboston platform - a community-driven educational platform.',
                },
                {
                  name: 'Brainbite.ai',
                  website: 'https://app.brainbite.ai',
                  github: null,
                  image: '/images/brainbite.png',
                  description: 'AI-powered application for intelligent interactions and content generation.',
                },
                {
                  name: 'Community Retention',
                  website: 'https://app.communityretention.com',
                  github: null,
                  image: '/images/communityretention.png',
                  description: 'Platform designed to help communities retain and engage their members effectively.',
                },
                {
                  name: 'Sailtech Hotel Marketing',
                  website: 'https://app.sailtech.com',
                  github: null,
                  image: '/images/sail.png',
                  description: 'Marketing platform specifically designed for hotels to manage and optimize their marketing efforts.',
                },
                {
                  name: 'Skilltrade',
                  website: null,
                  github: 'https://github.com/abe16s/SkillTrade',
                  image: '/images/skilltrade.jpg',
                  description: 'Hub connecting skilled technicians to customers for home installation and maintenance services.',
                },
              ].map((project, index) => (
                <ScrollAnimation
                  key={project.name}
                  direction="up"
                  delay={index * 100}
                >
                  <div className="bg-background rounded-xl overflow-hidden border border-foreground/10 hover:shadow-2xl hover:scale-105 transition-all duration-300 group">
                    <div className="h-48 relative overflow-hidden">
                      <Image
                        src={project.image}
                        alt={project.name}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-600 transition-colors">
                        {project.name}
                      </h3>
                      <p className="text-foreground/70 mb-4">
                        {project.description}
                      </p>
                      <div className="flex gap-2 mb-4 flex-wrap">
                        <span className="text-xs bg-blue-500/20 text-blue-600 dark:text-blue-400 px-2 py-1 rounded">
                          React
                        </span>
                        <span className="text-xs bg-purple-500/20 text-purple-600 dark:text-purple-400 px-2 py-1 rounded">
                          TypeScript
                        </span>
                      </div>
                      <div className="flex gap-4 flex-wrap">
                        {project.website && (
                          <a
                            href={project.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:text-blue-700 font-semibold text-sm flex items-center gap-1 group/link"
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
                            className="text-foreground/70 hover:text-foreground font-semibold text-sm flex items-center gap-1 group/link"
                          >
                            GitHub
                            <span className="group-hover/link:translate-x-1 transition-transform">→</span>
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </ScrollAnimation>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section
          id="contact"
          className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20"
        >
          <div className="max-w-2xl mx-auto w-full text-center">
            <ScrollAnimation direction="down">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Get In Touch
              </h2>
              <p className="text-lg text-foreground/70 mb-12">
                I'm always open to discussing new projects, creative ideas, or
                opportunities to be part of your visions.
              </p>
            </ScrollAnimation>
            
            <ScrollAnimation direction="up" delay={100}>
              <div className="bg-foreground/5 rounded-2xl p-8 border border-foreground/10 shadow-xl hover:shadow-2xl transition-all duration-300">
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
                      className="w-full px-4 py-3 rounded-lg border border-foreground/20 bg-background focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
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
                      className="w-full px-4 py-3 rounded-lg border border-foreground/20 bg-background focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
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
                      className="w-full px-4 py-3 rounded-lg border border-foreground/20 bg-background focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none transition-all"
                      placeholder="Your message here..."
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:shadow-xl hover:shadow-purple-500/50 hover:scale-105 transition-all duration-300 relative overflow-hidden group"
                  >
                    <span className="relative z-10">Send Message</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
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
                  className="text-foreground/70 hover:text-foreground transition-all hover:scale-125 p-3 rounded-full hover:bg-foreground/10"
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
                  className="text-foreground/70 hover:text-foreground transition-all hover:scale-125 p-3 rounded-full hover:bg-foreground/10"
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

        {/* Footer */}
        <footer className="bg-foreground/5 py-8 text-center text-foreground/60 border-t border-foreground/10">
          <p>© {new Date().getFullYear()} Betsegaw. All rights reserved.</p>
        </footer>
      </main>
    </>
  );
}
