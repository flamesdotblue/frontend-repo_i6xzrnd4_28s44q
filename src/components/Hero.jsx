import { useEffect, useMemo, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';
import Spline from '@splinetool/react-spline';

const skillsToType = [
  'HTML',
  'CSS',
  'JavaScript',
  'React.js',
  'Node.js',
  'Next.js',
  'UI Design',
];

function useTypingLoop(items, speed = 90, pause = 1200) {
  const [text, setText] = useState('');
  const [index, setIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const item = items[index % items.length];
  const timeoutRef = useRef();

  useEffect(() => {
    const tick = () => {
      if (!deleting) {
        if (text.length < item.length) {
          setText(item.slice(0, text.length + 1));
          timeoutRef.current = setTimeout(tick, speed);
        } else {
          timeoutRef.current = setTimeout(() => setDeleting(true), pause);
        }
      } else {
        if (text.length > 0) {
          setText(item.slice(0, text.length - 1));
          timeoutRef.current = setTimeout(tick, speed / 1.6);
        } else {
          setDeleting(false);
          setIndex((i) => (i + 1) % items.length);
          timeoutRef.current = setTimeout(tick, speed);
        }
      }
    };

    timeoutRef.current = setTimeout(tick, speed);
    return () => clearTimeout(timeoutRef.current);
  }, [text, deleting, item, items, speed, pause]);

  return text;
}

export default function Hero() {
  const typed = useTypingLoop(skillsToType);

  const floatingBadges = useMemo(
    () => [
      { label: '5+ yrs exp', x: '10%', y: '20%' },
      { label: 'Pixel-perfect', x: '78%', y: '28%' },
      { label: 'Web Animations', x: '14%', y: '70%' },
    ],
    []
  );

  return (
    <section id="home" className="relative min-h-screen w-full overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
      <div className="absolute inset-0 opacity-60">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Top Navigation */}
      <div className="relative z-10">
        <header className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-400 shadow-lg shadow-blue-500/30" />
            <span className="font-semibold tracking-wide">Sweety</span>
          </div>
          <nav className="hidden gap-6 md:flex">
            <a href="#home" className="text-sm text-slate-200 transition hover:text-white">Home</a>
            <a href="#about" className="text-sm text-slate-200 transition hover:text-white">About</a>
            <a href="#portfolio" className="text-sm text-slate-200 transition hover:text-white">Portfolio</a>
            <a href="#skills" className="text-sm text-slate-200 transition hover:text-white">Skills</a>
            <a href="#contact" className="text-sm text-slate-200 transition hover:text-white">Contact</a>
          </nav>
          <div className="flex items-center gap-3">
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm backdrop-blur transition hover:bg-white/20"
            >
              Let’s talk
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
            </a>
          </div>
        </header>
      </div>

      {/* Gradient overlay that does not block the Spline interactions */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/60 via-slate-950/30 to-slate-950" />

      <div className="relative z-10 mx-auto grid min-h-[70vh] max-w-7xl grid-cols-1 items-center gap-10 px-6 py-20 md:grid-cols-2">
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold tracking-tight sm:text-5xl"
          >
            Sweety
            <span className="block bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">Creative Web Developer</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-4 max-w-xl text-slate-300"
          >
            I build modern, fast, and delightful web experiences with a focus on performance, accessibility, and design systems.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="mt-6"
          >
            <div className="text-sm text-slate-400">Specialities</div>
            <div className="mt-1 text-lg">
              <span className="mr-1 text-slate-200">{typed}</span>
              <span className="animate-pulse">|</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <a
              href="#portfolio"
              className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-400 px-5 py-3 font-medium text-slate-900 shadow-lg shadow-blue-500/30 transition hover:shadow-blue-500/50"
            >
              View Work
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="mailto:hello@sweety.dev"
              className="inline-flex items-center gap-2 rounded-xl border border-white/10 px-5 py-3 text-slate-200 backdrop-blur transition hover:bg-white/10"
            >
              <Mail className="size-4" /> Contact
            </a>
            <a aria-label="GitHub" href="https://github.com/" target="_blank" rel="noreferrer" className="rounded-xl border border-white/10 p-3 text-slate-200 backdrop-blur transition hover:bg-white/10">
              <Github className="size-5" />
            </a>
            <a aria-label="LinkedIn" href="https://linkedin.com/" target="_blank" rel="noreferrer" className="rounded-xl border border-white/10 p-3 text-slate-200 backdrop-blur transition hover:bg-white/10">
              <Linkedin className="size-5" />
            </a>
          </motion.div>
        </div>

        <div className="relative h-[420px] w-full rounded-3xl border border-white/10 bg-white/5 p-2 backdrop-blur-lg">
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/15 via-cyan-400/10 to-white/5" />
          <div className="relative grid h-full place-items-center">
            <div className="grid grid-cols-3 gap-4">
              {floatingBadges.map((b) => (
                <motion.div
                  key={b.label}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="rounded-2xl bg-white/10 px-4 py-3 text-center text-sm text-white backdrop-blur shadow-lg"
                >
                  {b.label}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* subtle scroll cue */}
      <div className="relative z-10 flex items-center justify-center pb-10">
        <div className="h-10 w-1 rounded-full bg-gradient-to-b from-white/60 to-transparent" />
      </div>
    </section>
  );
}
