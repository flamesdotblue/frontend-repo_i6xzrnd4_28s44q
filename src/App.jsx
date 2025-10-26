import Hero from './components/Hero';
import About from './components/About';
import Portfolio from './components/Portfolio';
import SkillsContact from './components/SkillsContact';

export default function App() {
  return (
    <div className="scroll-smooth antialiased">
      <Hero />
      <About />
      <Portfolio />
      <SkillsContact />
      <footer className="bg-slate-950 py-10 text-center text-sm text-slate-400">
        © {new Date().getFullYear()} Sweety — Crafted with React, animations, and a lot of love.
      </footer>
    </div>
  );
}
