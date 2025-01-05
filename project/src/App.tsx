import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Hero from "./components/Hero";
import AboutHero from "./components/About/AboutHero";
import PricingHero from "./components/Pricing/PricingHero";
import Loader from "./components/Loader/Loader";
import ServicesHero from "./components/ServiceHero/ServicesHero";
import ContactHero from "./components/Contact/ContactHero";
import { Footer } from "./components/Footer/Footer";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen">
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<Hero />} />
              <Route path="/aboutus" element={<AboutHero />} />
              <Route path="/services" element={<ServicesHero />} />
              <Route path="/pricing" element={<PricingHero />} />
              <Route path="/contact" element={<ContactHero />} />
            </Routes>
          </main>
          {/* <Footer /> */}
          <Footer/>
        </>
      )}
    </div>
  );
}
