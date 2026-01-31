import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TestimonialSection from './components/TestimonialSection';
import ServicesSection from './components/ServicesSection';
import AwardSection from './components/AwardSection';
import GallerySection from './components/GallerySection';
import ClinicalJourney from './components/ClinicalJourney';
import GraftEstimator from './components/GraftEstimator';
import TeamSection from './components/TeamSection';
import PinkStats from './components/PinkStats';
import Marquee from './components/Marquee';
import Footer from './components/Footer';

function App() {
  // Smooth scroll behavior for anchor links
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <div className="min-h-screen w-full bg-brand-offwhite font-sans selection:bg-brand-black selection:text-brand-yellow">
      <Navbar />
      
      <main>
        <Hero />
        <Marquee />
        
        {/* Main Content Sections */}
        <div className="grid grid-cols-1 lg:grid-cols-2">
           <TestimonialSection />
           <ServicesSection />
        </div>
        
        <AwardSection />
        
        {/* New Specialized Clinic Sections */}
        <ClinicalJourney />
        <GraftEstimator />
        <TeamSection />
        
        <GallerySection />
        
        <PinkStats />
      </main>

      <Footer />
      
      {/* Sticky Mobile CTA */}
      <div className="fixed bottom-4 left-4 right-4 z-40 md:hidden">
         <button className="w-full bg-brand-black text-white py-4 font-black uppercase tracking-wider shadow-lg border-2 border-white active:scale-95 transition-transform">
           Book Consultation
         </button>
      </div>
    </div>
  );
}

export default App;