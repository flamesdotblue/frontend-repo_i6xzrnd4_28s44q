import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const bars = [
  { label: 'React.js', value: 92, color: 'from-blue-500 to-cyan-400' },
  { label: 'Next.js', value: 88, color: 'from-sky-400 to-blue-500' },
  { label: 'Node.js', value: 84, color: 'from-emerald-400 to-teal-500' },
  { label: 'UI Design', value: 80, color: 'from-fuchsia-400 to-pink-500' },
  { label: 'Accessibility', value: 86, color: 'from-amber-400 to-orange-500' },
];

export default function SkillsContact() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <section id="skills" className="scroll-mt-24 bg-slate-950 py-20 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-semibold tracking-tight md:text-4xl"
        >
          Skills & Contact
        </motion.h2>

        <div className="mt-10 grid gap-10 md:grid-cols-2">
          <div>
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <div className="text-sm uppercase tracking-wider text-slate-400">Core Skills</div>
              <div className="mt-6 space-y-5">
                {bars.map((b, i) => (
                  <div key={b.label}>
                    <div className="mb-2 flex items-center justify-between text-sm">
                      <span className="text-slate-200">{b.label}</span>
                      <span className="text-slate-400">{b.value}%</span>
                    </div>
                    <div className="h-3 w-full overflow-hidden rounded-full bg-white/10">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: mounted ? `${b.value}%` : 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.9, delay: i * 0.05 }}
                        className={`h-full rounded-full bg-gradient-to-r ${b.color}`}
                      />
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 grid grid-cols-2 gap-4 text-sm text-slate-300">
                <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/0 p-4">
                  Animations & micro-interactions
                </div>
                <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/0 p-4">
                  Design systems & theming
                </div>
                <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/0 p-4">
                  API integrations & testing
                </div>
                <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/0 p-4">
                  Performance & accessibility
                </div>
              </div>
            </div>
          </div>

          <div id="contact" className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <div className="text-sm uppercase tracking-wider text-slate-400">Contact</div>
            <form
              className="mt-4 space-y-4"
              onSubmit={(e) => {
                e.preventDefault();
                const fd = new FormData(e.currentTarget);
                const payload = Object.fromEntries(fd.entries());
                console.log('Contact form submitted:', payload);
                alert('Thanks for reaching out! I will reply shortly.');
                e.currentTarget.reset();
              }}
            >
              <div>
                <label className="text-xs text-slate-400">Your name</label>
                <input
                  name="name"
                  required
                  className="mt-1 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none ring-0 transition placeholder:text-slate-400 focus:border-cyan-400/50 focus:bg-white/10"
                  placeholder="Jane Doe"
                />
              </div>
              <div>
                <label className="text-xs text-slate-400">Email</label>
                <input
                  type="email"
                  name="email"
                  required
                  className="mt-1 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition placeholder:text-slate-400 focus:border-cyan-400/50 focus:bg-white/10"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label className="text-xs text-slate-400">Message</label>
                <textarea
                  name="message"
                  rows={4}
                  required
                  className="mt-1 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition placeholder:text-slate-400 focus:border-cyan-400/50 focus:bg-white/10"
                  placeholder="Tell me a bit about your project..."
                />
              </div>

              <button
                type="submit"
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-400 px-5 py-3 font-medium text-slate-900 shadow-lg shadow-blue-500/30 transition hover:shadow-blue-500/50"
              >
                Send message
                <span className="translate-x-0 transition-transform group-hover:translate-x-0.5">→</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
