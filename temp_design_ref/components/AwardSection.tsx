import React from 'react';
import { motion } from 'framer-motion';

const AwardSection: React.FC = () => {
  return (
    <section className="bg-brand-orange text-brand-black border-b-2 border-brand-black grid grid-cols-1 md:grid-cols-2 overflow-hidden">
      <div className="p-6 md:p-12 flex flex-col justify-between min-h-[450px] border-b-2 md:border-b-0 md:border-r-2 border-brand-black">
        <motion.h2 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-5xl md:text-7xl font-black uppercase leading-none tracking-tighter"
        >
          Award winning<br/>clinical<br/>research
        </motion.h2>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mt-12"
        >
           <p className="font-bold text-sm uppercase mb-2 border-b-2 border-brand-black inline-block pb-1">Established 2021</p>
           <p className="text-xl font-medium leading-tight mt-4">We pride ourselves on knowing the right questions to ask. We're constantly climbing the learning curve of hair genetics.</p>
        </motion.div>
      </div>

      <div className="relative bg-brand-black overflow-hidden flex items-center justify-center p-12 min-h-[400px]">
         <div className="absolute inset-0 opacity-10">
            <svg viewBox="0 0 100 100" className="w-full h-full fill-brand-orange">
                <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="0.5" fill="none" />
            </svg>
         </div>
         
         <motion.div 
            initial={{ scale: 0.8, opacity: 0, rotate: -45 }}
            whileInView={{ scale: 1, opacity: 1, rotate: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 1, ease: "circOut" }}
            style={{ willChange: "transform, opacity" }}
            className="relative w-full aspect-square max-w-[300px]"
         >
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 border-4 border-dashed border-brand-orange rounded-full"
            />
            <div className="absolute inset-0 flex items-center justify-center">
               <span className="text-brand-orange font-black text-8xl md:text-9xl tracking-tighter">HC</span>
            </div>
         </motion.div>
      </div>
    </section>
  );
};

export default AwardSection;