import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Hero from "./components/Hero";
import Footer from "./components/Footer/Footer";
import AboutHero from "./components/About/AboutHero";
import PricingHero from "./components/Pricing/PricingHero";
import Loader from "./components/Loader/Loader";
import ServicesHero from "./components/ServiceHero/ServicesHero";
import ContactHero from "./components/Contact/ContactHero";

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
              <Route path="/aboutUS" element={<AboutHero />} />
              <Route path="/services" element={<ServicesHero />} />
              <Route path="/pricing" element={<PricingHero />} />
              <Route path="/contact" element={<ContactHero />} />
            </Routes>
          </main>
          <Footer />
        </>
      )}
    </div>
  );
}
