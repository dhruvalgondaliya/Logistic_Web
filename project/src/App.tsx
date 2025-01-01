import Header from './components/Header/Header';
import Hero from './components/Hero';
import ServicesSection from './components/Services/ServicesSection';
import AboutSection from './components/About/AboutSection';
import Footer from './components/Footer/Footer';
import Testimonials from './components/Testimonials/Testimonials';
import Blog from './components/Blog';
import FAQSection from './components/FAQ/FAQSection';
import WorkProcessSection from './components/WorkProces/WorkProcessSection';

export default function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <ServicesSection />
        <AboutSection />
        <Testimonials/>
        <Blog/>
        <FAQSection/>
        <WorkProcessSection/>

      </main>
      <Footer />
    </div>
  );
}
