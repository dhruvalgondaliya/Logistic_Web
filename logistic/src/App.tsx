import Header from './components/Header/Header';
import Hero from './components/Hero';
import Business from './components/Business/Business';
import About from './components/About/About';
import Features from './components/Features';
import Services from './components/Services';
import Testimonials from './components/Testimonials/Testimonials';
import CaseStudies from './components/CaseStudies/CaseStudies';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer/Footer';

export default function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Business />
        <About />
        <Features />
        <Services />
        <Testimonials />
        <CaseStudies />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}