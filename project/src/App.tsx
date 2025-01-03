import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Hero from "./components/Hero";
import Footer from "./components/Footer/Footer";
import AboutHero from "./components/About/AboutHero";
import PricingHero from "./components/Pricing/PricingHero";
import Loader from "./components/Loader/Loader";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 5000);

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
              <Route path="/pricing" element={<PricingHero />} />
           
            </Routes>
          </main>
          <Footer />
        </>
      )}
    </div>
  );
}
