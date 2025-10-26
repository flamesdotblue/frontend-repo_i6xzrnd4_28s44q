import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="scroll-mt-24 bg-slate-950 py-20 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-semibold tracking-tight md:text-4xl"
        >
          About Sweety
        </motion.h2>

        <div className="mt-10 grid gap-8 md:grid-cols-5">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="md:col-span-3"
          >
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 leading-relaxed text-slate-300 backdrop-blur">
              <p>
                I’m a developer who blends code and craft to create human-centered websites. My work sits at the
                intersection of performance, accessibility, and beautiful design. I love building engaging interfaces,
                design systems, and animations that feel alive — all while keeping things scalable and maintainable.
              </p>
              <p className="mt-4">
                Beyond shipping features, I care about developer experience and teamwork. I write clean, documented
                code, mentor juniors, and iterate quickly with data-driven decisions. When I’m not coding, you’ll find
                me exploring UI trends, sketching interfaces, or perfecting a pour-over coffee.
              </p>
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              {[
                { title: 'Design-driven', desc: 'Fluent in Figma and motion, with a sharp eye for detail.' },
                { title: 'Performance-first', desc: 'Core Web Vitals, accessibility, and scalability built-in.' },
                { title: 'Team player', desc: 'Clear communication, PR discipline, and mentoring culture.' },
              ].map((card) => (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5 }}
                  className="rounded-2xl border border-white/10 bg-gradient-to-br from-blue-500/10 to-cyan-400/10 p-5 text-slate-200 shadow-lg"
                >
                  <div className="text-base font-medium">{card.title}</div>
                  <div className="mt-1 text-sm text-slate-300/90">{card.desc}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="md:col-span-2"
          >
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <div className="text-sm uppercase tracking-wider text-slate-400">Quick Snapshot</div>
              <ul className="mt-3 space-y-2 text-slate-300">
                <li>• Based in Bangalore, available remotely worldwide</li>
                <li>• Specialized in React, Next.js, Node.js and modern CSS</li>
                <li>• Passionate about 3D on the web and micro-interactions</li>
                <li>• Advocate for inclusive, accessible design</li>
              </ul>
            </div>

            <div className="mt-6 rounded-3xl border border-white/10 bg-gradient-to-br from-blue-500/10 via-cyan-400/10 to-white/5 p-6">
              <div className="text-sm uppercase tracking-wider text-slate-400">Highlights</div>
              <div className="mt-3 grid grid-cols-2 gap-4 text-slate-200">
                <div>
                  <div className="text-3xl font-bold">50+</div>
                  <div className="text-xs text-slate-400">Projects shipped</div>
                </div>
                <div>
                  <div className="text-3xl font-bold">100ms</div>
                  <div className="text-xs text-slate-400">First input target</div>
                </div>
                <div>
                  <div className="text-3xl font-bold">A11y</div>
                  <div className="text-xs text-slate-400">Inclusive by design</div>
                </div>
                <div>
                  <div className="text-3xl font-bold">2025</div>
                  <div className="text-xs text-slate-400">Trend-savvy builds</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
