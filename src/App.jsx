import Backdrop from './components/Backdrop.jsx';
import Nav from './components/Nav.jsx';
import Hero from './components/Hero.jsx';
import TrackRail from './components/TrackRail.jsx';
import About from './components/About.jsx';
import Services from './components/Services.jsx';
import Experience from './components/Experience.jsx';
import Projects from './components/Projects.jsx';
import Stack from './components/Stack.jsx';
import Insights from './components/Insights.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import MobileCTA from './components/MobileCTA.jsx';

export default function App() {
  return (
    <>
      <Backdrop />
      <Nav />
      <main id="main">
        <Hero />
        <TrackRail />
        <About />
        <Services />
        <Experience />
        <Projects />
        <Stack />
        <Insights />
        <Contact />
      </main>
      <Footer />
      <MobileCTA />
    </>
  );
}
