import Navbar from '../components/portfolio/Navbar';
import Hero from '../components/portfolio/Hero';
import About from '../components/portfolio/About';
import Skills from '../components/portfolio/Skills';
import Tools from '../components/portfolio/Tools';
import Projects from '../components/portfolio/Projects';
import CaseStudies from '../components/portfolio/CaseStudies';
import WhyMe from '../components/portfolio/WhyMe';
import Testimonials from '../components/portfolio/Testimonials';
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
      <Skills />
      <Tools />
      <Projects />
      <CaseStudies />
      <WhyMe />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}
