import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';

const Hero: React.FC = () => {
  const premiumEase = [0.22, 1, 0.36, 1];

  const titleWords = ["Revive.", "Restore.", "Rebirth"];

  return (
    <div className="relative w-full bg-brand-offwhite pt-24 overflow-hidden">
      {/* Background Precision Grid */}
      <div className="absolute inset-0 bg-grid pointer-events-none" />
      
      <div className="flex flex-col md:flex-row min-h-[90vh] relative z-10">
        {/* Text Content */}
        <div className="w-full md:w-1/2 p-6 md:p-16 flex flex-col justify-center border-b-4 md:border-b-0 md:border-r-4 border-brand-black">
          <div className="mb-6 overflow-hidden">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-2 text-brand-orange font-black uppercase tracking-[0.3em] text-xs"
            >
              <Sparkles size={14} /> The Gold Standard in Trichology
            </motion.div>
          </div>

          <div className="space-y-2 mb-12">
            {titleWords.map((word, i) => (
              <div key={i} className="overflow-hidden h-fit">
                <motion.h1
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  transition={{ delay: 0.2 + (i * 0.1), duration: 1, ease: premiumEase }}
                  className={`text-7xl md:text-[9.5rem] font-black tracking-tighter leading-[0.8] uppercase ${i === 2 ? 'text-brand-orange relative inline-block' : 'text-brand-black'}`}
                >
                  {word}
                  {i === 2 && (
                    <motion.span 
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ delay: 1, duration: 1.2, ease: premiumEase }}
                      className="absolute bottom-2 md:bottom-6 left-0 w-full h-3 md:h-6 bg-brand-yellow -z-10 origin-left"
                    />
                  )}
                </motion.h1>
              </div>
            ))}
          </div>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8, ease: premiumEase }}
            className="text-xl md:text-2xl font-bold mb-12 max-w-lg leading-tight text-brand-black/70"
          >
            Clinical engineering meets architectural aesthetics. We design hairlines that aren't just natural—they're structural masterpieces.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8, duration: 0.6, ease: premiumEase }}
          >
            <button
              className="group relative px-10 py-6 bg-brand-black text-white font-black text-xl uppercase flex items-center gap-4 hover:shadow-[12px_12px_0px_0px_#FACC15] active:translate-x-1 active:translate-y-1 transition-all duration-300 overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-4">
                Start Consultation <ArrowRight size={24} className="group-hover:translate-x-2 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-brand-orange translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-500 ease-out" />
            </button>
          </motion.div>
        </div>

        {/* Hero Image Section */}
        <div className="w-full md:w-1/2 h-[50vh] md:h-auto relative overflow-hidden bg-brand-black">
          <motion.div
            initial={{ scale: 1.2, filter: "grayscale(100%) brightness(0)" }}
            animate={{ scale: 1, filter: "grayscale(0%) brightness(1)" }}
            transition={{ duration: 1.8, ease: premiumEase }}
            className="w-full h-full"
          >
            <img 
              src="https://images.unsplash.com/photo-1560869713-7d0a29430803?auto=format&fit=crop&q=80&w=1200" 
              alt="Hair Cure Model"
              className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
            />
          </motion.div>

          {/* Clinical Overlay HUD */}
          <div className="absolute inset-0 p-8 flex flex-col justify-between pointer-events-none">
            <div className="flex justify-between items-start">
               <div className="border-l-2 border-brand-yellow pl-4">
                  <p className="text-[10px] font-black text-white uppercase tracking-[0.2em] mb-1">Status</p>
                  <p className="text-brand-yellow font-black uppercase text-xs">Live Clinical Lab</p>
               </div>
               <div className="text-right">
                  <p className="text-[10px] font-black text-white uppercase tracking-[0.2em] mb-1">Precision Rating</p>
                  <p className="text-brand-orange font-black uppercase text-xs">99.8% Success</p>
               </div>
            </div>
            
            <div className="flex justify-between items-end">
               <div className="space-y-1">
                  {['01', '02', '03'].map(num => (
                    <div key={num} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-brand-yellow rounded-full" />
                      <span className="text-[8px] text-white font-black">MODULE_{num} READY</span>
                    </div>
                  ))}
               </div>
               <div className="bg-white/10 backdrop-blur-md p-4 border border-white/20">
                  <p className="text-[10px] font-black text-white uppercase">Scan Profile</p>
                  <div className="w-32 h-1 bg-white/20 mt-2 relative overflow-hidden">
                    <motion.div 
                      animate={{ x: [-128, 128] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                      className="absolute inset-0 bg-brand-yellow w-1/2" 
                    />
                  </div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;