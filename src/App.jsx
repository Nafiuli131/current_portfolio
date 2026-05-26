import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Skills from './components/Skills.jsx';
import Experience from './components/Experience.jsx';
import Projects from './components/Projects.jsx';
import Education from './components/Education.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      {/* Ambient background layers */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-white dark:bg-ink-950" />
        <div className="absolute inset-x-0 top-0 h-[600px] bg-radial-fade opacity-90 dark:opacity-100" />
        <div
          className="absolute inset-0 opacity-[0.35] mask-radial dark:opacity-[0.5]"
          style={{
            backgroundImage:
              'linear-gradient(to right, rgba(15,23,42,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(15,23,42,0.06) 1px, transparent 1px)',
            backgroundSize: '32px 32px',
          }}
        />
        <div
          className="absolute inset-0 hidden opacity-[0.5] mask-radial dark:block"
          style={{
            backgroundImage:
              'linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)',
            backgroundSize: '32px 32px',
          }}
        />
      </div>

      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
