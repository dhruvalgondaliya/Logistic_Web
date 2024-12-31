import React from 'react';
import Header from './components/Header/Header';
import Hero from './components/Hero';
import ServicesSection from './components/Services/ServicesSection';
import AboutSection from './components/About/AboutSection';
import Footer from './components/Footer/Footer';

export default function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <ServicesSection />
        <AboutSection />
      </main>
      <Footer />
    </div>
  );
}