import Header from './components/Header/Header';
import Hero from './components/Hero';
import ServicesSection from './components/Services/ServicesSection';
import AboutSection from './components/About/AboutSection';
import Footer from './components/Footer/Footer';
import Testimonials from './components/Testimonials/Testimonials';
import BlogSection from './components/Blog/BlogSection';

export default function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <ServicesSection />
        <AboutSection />
        <Testimonials/>
        <BlogSection/>
      </main>
      <Footer />
    </div>
  );
}
