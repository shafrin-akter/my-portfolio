import Navbar from '../components/portfolio/Navbar';
import Hero from '../components/portfolio/Hero';
import About from '../components/portfolio/About';
import Services from '../components/portfolio/Services';
import Projects from '../components/portfolio/Projects';
import Contact from '../components/portfolio/Contact';
import Footer from '../components/portfolio/Footer';
import MouseGlow from '../components/portfolio/MouseGlow';

export default function HomePage() {
  return (
    <div className="bg-dark-950 text-slate-200">
      <MouseGlow />
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}
