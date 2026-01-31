import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Calendar, Search, Scissors, HeartPulse, ChevronRight } from 'lucide-react';

const steps = [
  {
    icon: <Search size={32} />,
    title: "DNA Analysis",
    desc: "A deep dive into your follicular genetics. We don't just look; we sequence.",
    color: "bg-brand-yellow"
  },
  {
    icon: <Calendar size={32} />,
    title: "Symmetry Design",
    desc: "Mathematical mapping of your new hairline based on cranial golden ratios.",
    color: "bg-brand-orange"
  },
  {
    icon: <Scissors size={32} />,
    title: "The Procedure",
    desc: "Single-day robotic extraction in a high-sterility architectural laboratory.",
    color: "bg-brand-pink"
  },
  {
    icon: <HeartPulse size={32} />,
    title: "Bio-Harvest",
    desc: "12 months of regenerative bio-therapy to ensure 100% density yield.",
    color: "bg-white"
  }
];

const ClinicalJourney: React.FC = () => {
  const containerRef = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <section ref={containerRef} className="bg-brand-black text-white py-32 px-6 border-b-4 border-brand-black relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-yellow/5 skew-x-12 translate-x-1/2" />
      
      <div className="max-w-7xl mx-auto relative">
        <div className="mb-24 flex flex-col md:flex-row justify-between items-end gap-8">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="flex items-center gap-2 mb-6"
            >
              <div className="w-12 h-[2px] bg-brand-orange" />
              <span className="text-brand-orange font-black uppercase tracking-[0.4em] text-xs">The Protocol</span>
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-6xl md:text-9xl font-black uppercase tracking-tighter leading-[0.8]"
            >
              The Path to<br />Density
            </motion.h2>
          </div>
          <div className="hidden md:block text-right pb-4">
             <p className="text-xs font-black uppercase tracking-widest text-gray-500 mb-2">Duration Estimate</p>
             <p className="text-2xl font-black">12 MONTHS TOTAL</p>
          </div>
        </div>

        {/* Journey Timeline */}
        <div className="relative grid grid-cols-1 md:grid-cols-4 gap-0 border-4 border-white/10 bg-white/5 backdrop-blur-sm">
          {/* Animated Progress Line (Mobile is vertical, Desktop is horizontal) */}
          <motion.div 
            style={{ scaleX: scaleY }} 
            className="hidden md:block absolute top-0 left-0 w-full h-1 bg-brand-yellow origin-left z-20"
          />

          {steps.map((step, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.15 }}
              className="p-10 border-b-2 md:border-b-0 md:border-r-2 border-white/10 last:border-r-0 last:border-b-0 flex flex-col group relative overflow-hidden transition-all hover:bg-white/[0.03]"
            >
              {/* Card Index background */}
              <span className="absolute -top-4 -right-2 text-9xl font-black opacity-5 select-none pointer-events-none">
                0{idx + 1}
              </span>

              <div className={`w-20 h-20 ${step.color} text-brand-black flex items-center justify-center mb-10 border-4 border-brand-black shadow-[8px_8px_0px_0px_white] group-hover:-translate-y-2 group-hover:shadow-[12px_12px_0px_0px_#FACC15] transition-all duration-300`}>
                {step.icon}
              </div>
              
              <h3 className="text-3xl font-black uppercase mb-4 tracking-tight group-hover:text-brand-yellow transition-colors">{step.title}</h3>
              <p className="font-bold text-gray-400 leading-tight mb-8">
                {step.desc}
              </p>
              
              <div className="mt-auto flex items-center gap-2 text-xs font-black uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all translate-x-[-10px] group-hover:translate-x-0">
                View Protocol <ChevronRight size={14} className="text-brand-orange" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Background Decorative Element */}
      <div className="absolute bottom-10 left-10 flex gap-4 opacity-10">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="w-2 h-32 bg-white" />
        ))}
      </div>
    </section>
  );
};

export default ClinicalJourney;