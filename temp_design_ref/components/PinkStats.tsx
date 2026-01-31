import React from 'react';
import { motion } from 'framer-motion';

const PinkStats: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.9, 
      y: 30,
    },
    visible: { 
      opacity: 1, 
      scale: 1, 
      y: 0,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 20,
        mass: 1
      }
    }
  };

  return (
    <section className="bg-brand-pink text-brand-black p-6 md:p-12 border-b-2 border-brand-black overflow-hidden">
      <div className="mb-12">
        <motion.h2 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-4xl md:text-6xl font-black uppercase tracking-tight"
        >
          Client Satisfaction<br/>Results
        </motion.h2>
      </div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.1 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-8"
      >
        {[
            { label: 'Success Rate', value: '98%' },
            { label: 'Procedures', value: '10k+' },
            { label: 'Happiness', value: '5/5' }
        ].map((stat, idx) => (
            <motion.div 
                key={idx}
                variants={cardVariants}
                style={{ willChange: "transform, opacity" }}
                className="bg-white border-2 border-brand-black p-8 hover:-translate-y-2 transition-transform duration-300 shadow-[6px_6px_0px_0px_rgba(23,23,23,1)] flex flex-col items-center justify-center text-center"
            >
                <h3 className="text-6xl md:text-7xl font-black mb-2 tracking-tighter">{stat.value}</h3>
                <p className="text-xl font-bold uppercase tracking-tight opacity-80">{stat.label}</p>
            </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default PinkStats;