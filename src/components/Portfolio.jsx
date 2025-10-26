import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, X } from 'lucide-react';

const PROJECTS = [
  {
    title: 'Awwwards-style Showcase',
    desc: 'Immersive portfolio with scroll-driven 3D, parallax layers, and glassy UI.',
    tags: ['Three.js', 'GSAP', 'Next.js'],
    url: 'https://www.awwwards.com/',
    colorFrom: 'from-blue-500/60',
    colorTo: 'to-cyan-400/60',
  },
  {
    title: 'Amazon-Inspired Storefront',
    desc: 'High-performance e-commerce with server-side rendering and smart search.',
    tags: ['Next.js', 'Edge', 'Stripe'],
    url: 'https://www.amazon.com/',
    colorFrom: 'from-amber-400/60',
    colorTo: 'to-yellow-500/60',
  },
  {
    title: 'Restaurant Experience',
    desc: 'Menu animations, online bookings, and chef stories in a tasteful layout.',
    tags: ['React', 'Framer Motion'],
    url: '#',
    colorFrom: 'from-rose-500/60',
    colorTo: 'to-pink-500/60',
  },
  {
    title: 'Hospital Management',
    desc: 'Dashboards, appointment flows, and secure patient data interfaces.',
    tags: ['React', 'Node', 'MongoDB'],
    url: '#',
    colorFrom: 'from-emerald-500/60',
    colorTo: 'to-teal-500/60',
  },
  {
    title: 'FitIn5 Fitness',
    desc: 'Habit loops, workout builder, and progress visualizations.',
    tags: ['Next.js', 'Charts'],
    url: '#',
    colorFrom: 'from-purple-500/60',
    colorTo: 'to-indigo-500/60',
  },
  {
    title: 'Real Estate Explorer',
    desc: 'Map-based listings with 3D tours and mortgage calculators.',
    tags: ['Maps', 'SSR'],
    url: '#',
    colorFrom: 'from-sky-500/60',
    colorTo: 'to-blue-600/60',
  },
];

export default function Portfolio() {
  const [active, setActive] = useState(null);

  return (
    <section id="portfolio" className="scroll-mt-24 bg-slate-950 py-20 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-semibold tracking-tight md:text-4xl"
        >
          Portfolio Highlights
        </motion.h2>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((p, idx) => (
            <motion.button
              key={p.title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: idx * 0.03 }}
              onClick={() => setActive(p)}
              className={`group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-0 text-left shadow-lg backdrop-blur`}
            >
              <div className={`h-40 w-full bg-gradient-to-br ${p.colorFrom} ${p.colorTo}`} />
              <div className="p-5">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-lg font-semibold">{p.title}</h3>
                    <p className="mt-1 line-clamp-2 text-sm text-slate-300">{p.desc}</p>
                  </div>
                  <ExternalLink className="size-5 opacity-60 transition group-hover:opacity-100" />
                </div>
                <div className="mt-3 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span key={t} className="rounded-full bg-white/10 px-2 py-1 text-xs text-slate-200">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="pointer-events-none absolute inset-0 opacity-0 transition group-hover:opacity-100">
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 to-transparent" />
                </div>
              </div>
            </motion.button>
          ))}
        </div>

        <AnimatePresence>
          {active && (
            <motion.div
              className="fixed inset-0 z-50 grid place-items-center bg-slate-950/70 p-6 backdrop-blur"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 20, opacity: 0 }}
                transition={{ type: 'spring', stiffness: 140, damping: 18 }}
                className="w-full max-w-2xl overflow-hidden rounded-3xl border border-white/10 bg-slate-900 text-white shadow-xl"
              >
                <div className="relative h-52 w-full bg-gradient-to-br from-white/10 to-white/5">
                  <button
                    className="absolute right-4 top-4 rounded-full bg-white/10 p-2 text-white backdrop-blur transition hover:bg-white/20"
                    onClick={() => setActive(null)}
                    aria-label="Close"
                  >
                    <X className="size-5" />
                  </button>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-semibold">{active.title}</h3>
                  <p className="mt-2 text-slate-300">{active.desc}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {active.tags.map((t) => (
                      <span key={t} className="rounded-full bg-white/10 px-2 py-1 text-xs text-slate-200">
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="mt-6 flex gap-3">
                    <a
                      className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-400 px-4 py-2 font-medium text-slate-900 shadow-lg shadow-blue-500/30 transition hover:shadow-blue-500/50"
                      href={active.url}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Visit project <ExternalLink className="size-4" />
                    </a>
                    <button
                      className="rounded-xl border border-white/10 px-4 py-2 text-slate-200 backdrop-blur transition hover:bg-white/10"
                      onClick={() => setActive(null)}
                    >
                      Close
                    </button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
