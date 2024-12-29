import React from 'react';
import { 
  Truck, Shield, Plane, Warehouse, 
  ArrowRight, ArrowLeft,
  Star, Search, ChevronRight
} from 'lucide-react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import MainSection from './components/MainSection';
import Services from './components/Services';
import CaseStudies from './components/CaseStudies';
import Reviews from './components/Reviews';
import Process from './components/Process';
import CallToAction from './components/CallToAction';
import FAQ from './components/FAQ';
import Blog from './components/Blog';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <Features />
        <MainSection />
        <Services />
        <CaseStudies />
        <Reviews />
        <Process />
        <CallToAction />
        <FAQ />
        <Blog />
      </main>
      <Footer />
    </div>
  );
}

export default App;