'use client';

import { useState } from 'react';
import ScrollAnimation from '@/components/ScrollAnimation';
import SectionTitle from '@/components/ui/SectionTitle';

type FormState = { name: string; email: string; message: string };
type Status = 'idle' | 'loading' | 'success' | 'error';

function validate(form: FormState): string | null {
  if (!form.name.trim()) return 'Name is required.';
  if (!form.email.trim()) return 'Email is required.';
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) return 'Please enter a valid email.';
  if (!form.message.trim()) return 'Message is required.';
  return null;
}

export default function ContactSection() {
  const [form, setForm] = useState<FormState>({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<Status>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationError = validate(form);
    if (validationError) {
      setErrorMsg(validationError);
      return;
    }
    setErrorMsg('');
    setStatus('loading');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error('Server error');
      setStatus('success');
      setForm({ name: '', email: '', message: '' });
    } catch {
      setStatus('error');
    }
  };

  const inputClass =
    'w-full px-4 py-3 rounded-xl border border-white/20 bg-white/5 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all placeholder:text-foreground/40';

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 bg-white/[0.02]">
      <div className="max-w-2xl mx-auto w-full text-center">
        <ScrollAnimation direction="down">
          <SectionTitle
            title="Let's Create Something Magnetic"
            subtitle="I'm open to creative collaborations, impactful product work, and ideas that challenge the ordinary."
          />
        </ScrollAnimation>

        <ScrollAnimation direction="up" delay={100}>
          <div className="glass-effect rounded-3xl p-8 border border-white/20 shadow-xl">
            {status === 'success' ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-400/30 flex items-center justify-center mx-auto">
                  <svg className="w-8 h-8 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-foreground/90">Message sent!</h3>
                <p className="text-foreground/70">Thanks for reaching out. I&apos;ll get back to you soon.</p>
                <button
                  onClick={() => setStatus('idle')}
                  className="mt-2 text-sm text-cyan-300 hover:text-cyan-200 underline underline-offset-2"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6 text-left" noValidate>
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    className={inputClass}
                    placeholder="Your Name"
                    required
                    disabled={status === 'loading'}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    className={inputClass}
                    placeholder="your.email@example.com"
                    required
                    disabled={status === 'loading'}
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={5}
                    className={`${inputClass} resize-none`}
                    placeholder="Your message here..."
                    required
                    disabled={status === 'loading'}
                  />
                </div>

                {errorMsg && (
                  <p className="text-sm text-red-400 bg-red-500/10 border border-red-400/20 rounded-lg px-4 py-2">
                    {errorMsg}
                  </p>
                )}

                {status === 'error' && (
                  <p className="text-sm text-red-400 bg-red-500/10 border border-red-400/20 rounded-lg px-4 py-2">
                    Something went wrong. Please try again or email me directly.
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full px-8 py-3 bg-gradient-to-r from-cyan-500 via-blue-600 to-violet-600 text-white rounded-xl font-semibold hover:shadow-xl hover:shadow-violet-600/50 hover:scale-[1.02] transition-all duration-300 relative overflow-hidden group disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    {status === 'loading' ? (
                      <>
                        <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                        </svg>
                        Sending…
                      </>
                    ) : (
                      'Send Message'
                    )}
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-violet-600 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </button>
              </form>
            )}
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
  );
}
