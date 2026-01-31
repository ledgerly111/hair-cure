import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const TestimonialSection: React.FC = () => {
  return (
    <section className="bg-brand-yellow text-brand-black p-6 md:p-12 border-b-2 border-brand-black min-h-[60vh] flex flex-col justify-between overflow-hidden">
      <div className="flex justify-between items-start mb-8">
        <Quote size={48} className="fill-brand-black" />
        <div className="text-xs font-black uppercase tracking-widest border border-brand-black px-2 py-1">
          Verified Client
        </div>
      </div>

      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false, amount: 0.4 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-3xl"
      >
        <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-8 italic">
          "I highly recommend Hair Cure. Over two months, the team has been responsive, provided true scientific insight and always ensure that their service represents great value for money."
        </h2>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="flex items-center gap-4 mt-8"
      >
        <img 
          src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100" 
          alt="Client" 
          className="w-16 h-16 rounded-full border-2 border-brand-black object-cover"
        />
        <div>
          <p className="font-black text-lg uppercase">Russell Clarke</p>
          <p className="font-medium text-sm opacity-80">Full Restoration Program</p>
        </div>
      </motion.div>
    </section>
  );
};

export default TestimonialSection;