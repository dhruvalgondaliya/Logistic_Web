import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Hero from "./components/Hero";
import ServicesSection from "./components/Services/ServicesSection";
import AboutSection from "./components/About/AboutSection";
import Footer from "./components/Footer/Footer";
import Testimonials from "./components/Testimonials/Testimonials";
import Blog from "./components/Blog";
import FAQSection from "./components/FAQ/FAQSection";
import WorkProcessSection from "./components/WorkProces/WorkProcessSection";
import { CaseStudiesSlider } from "./components/CaseStudy/CaseStudiesSlider";

export default function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Hero />} />
          {/* <Route path="/services" element={<ServicesSection />} /> */}
          {/* <Route path="/about" element={<AboutSection />} /> */}
          {/* <Route path="/testimonials" element={<Testimonials />} /> */}
          {/* <Route path="/work-process" element={} /> */}
          {/* <Route path="/faq" element={<FAQSection />} /> */}
          {/* <Route path="/blog" element={<Blog />} /> */}
          {/* <Route path="/case-studies" element={<CaseStudiesSlider />} /> */}
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
