import React from 'react';
import { motion } from 'framer-motion';

const Marquee: React.FC = () => {
  return (
    <div className="bg-brand-black text-white py-4 border-b-2 border-brand-black overflow-hidden whitespace-nowrap">
      <motion.div 
        className="inline-block"
        animate={{ x: [0, -1000] }}
        transition={{ ease: "linear", duration: 20, repeat: Infinity }}
      >
        {[...Array(10)].map((_, i) => (
          <span key={i} className="text-2xl font-black uppercase tracking-wider mx-8">
            • Advanced Technology • Expert Care • Guaranteed Results
          </span>
        ))}
      </motion.div>
    </div>
  );
};

export default Marquee;