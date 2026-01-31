import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Layers, ScanFace } from 'lucide-react';
import BeforeAfterSlider from './BeforeAfterSlider';

const cases = [
  {
    id: 1,
    before: 'https://images.unsplash.com/photo-1595152772835-219674b2a8a6?auto=format&fit=crop&q=80&w=800',
    after: 'https://images.unsplash.com/photo-1618077553780-7553bc930438?auto=format&fit=crop&q=80&w=800',
    title: 'Crown Restoration',
    details: '2,500 Grafts • FUE Technique',
    timeframe: '9 Months Post-Op'
  },
  {
    id: 2,
    before: 'https://images.unsplash.com/photo-1596392927818-23665bc4105e?auto=format&fit=crop&q=80&w=800',
    after: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=800',
    title: 'Hairline Redesign',
    details: '1,800 Grafts • DHI Method',
    timeframe: '12 Months Post-Op'
  },
  {
    id: 3,
    before: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?auto=format&fit=crop&q=80&w=800',
    after: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=800',
    title: 'Density Fill',
    details: 'PRP + 1,200 Grafts',
    timeframe: '6 Months Post-Op'
  },
  {
    id: 4,
    before: 'https://images.unsplash.com/photo-1503443207922-dff7d543fd0e?auto=format&fit=crop&q=80&w=800',
    after: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800',
    title: 'Temple Reconstruction',
    details: '1,500 Grafts • FUE',
    timeframe: '10 Months Post-Op'
  }
];

const GallerySection: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [stackItems, setStackItems] = useState(cases);
  const premiumEase = [0.22, 1, 0.36, 1];

  useEffect(() => {
    const interval = setInterval(() => {
      setStackItems((prev) => {
        const newItems = [...prev];
        const first = newItems.shift();
        if (first) newItems.push(first);
        return newItems;
      });
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-white text-brand-black border-b-2 border-brand-black py-24 px-6 overflow-hidden relative">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        
        <div className="text-center mb-16 relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 border-2 border-brand-black bg-brand-yellow font-black uppercase tracking-[0.2em] text-[10px] mb-6 shadow-[5px_5px_0px_0px_rgba(23,23,23,1)]"
          >
            <ScanFace size={14} /> Empirical Proof
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: premiumEase }}
            className="text-6xl md:text-9xl font-black uppercase tracking-tighter mb-8 leading-[0.85]"
          >
            Clinical<br />Results
          </motion.h2>
        </div>

        <div className="relative w-full max-w-lg h-[500px] flex items-center justify-center mb-20">
          <div className="relative w-full aspect-[4/5] max-w-[320px] md:max-w-[400px]">
            <AnimatePresence mode="popLayout">
              {stackItems.slice(0, 3).map((item, index) => {
                const isFront = index === 0;
                const isMiddle = index === 1;
                
                return (
                  <motion.div
                    key={item.id}
                    layoutId={`card-${item.id}`}
                    initial={{ scale: 0.8, opacity: 0, y: 100 }}
                    animate={{ 
                      scale: isFront ? 1 : isMiddle ? 0.94 : 0.88,
                      opacity: isFront ? 1 : isMiddle ? 0.6 : 0.2,
                      y: isFront ? 0 : isMiddle ? -30 : -60,
                      zIndex: 30 - index,
                      rotate: isFront ? 0 : isMiddle ? 4 : -4,
                    }}
                    exit={{ 
                      x: 300, 
                      opacity: 0, 
                      rotate: 15, 
                      transition: { duration: 0.8, ease: premiumEase } 
                    }}
                    transition={{ 
                      type: "spring", 
                      stiffness: 100, 
                      damping: 18,
                      mass: 0.8
                    }}
                    className="absolute inset-0 bg-white border-4 border-brand-black shadow-[20px_20px_0px_0px_rgba(23,23,23,0.1)] group overflow-hidden"
                  >
                    <div className="relative w-full h-full flex flex-col">
                       <div className="relative flex-grow overflow-hidden bg-gray-100">
                          <img 
                            src={item.after} 
                            alt={item.title} 
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                          />
                          <div className="absolute top-4 left-4 bg-brand-black text-brand-yellow px-2 py-1 text-[10px] font-black uppercase tracking-widest">
                            Case #{item.id}
                          </div>
                       </div>
                       <div className="p-5 border-t-4 border-brand-black bg-white">
                          <p className="text-sm font-black uppercase tracking-tight mb-1">{item.title}</p>
                          <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{item.timeframe}</p>
                       </div>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        </div>

        <motion.div layout className="z-20 flex flex-col items-center gap-6">
          <motion.button
            layout
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center gap-4 bg-brand-black text-white px-10 py-6 text-xl font-black uppercase tracking-widest hover:bg-brand-orange transition-all duration-300 shadow-[12px_12px_0px_0px_rgba(23,23,23,0.2)]"
          >
            <Layers size={24} />
            {isOpen ? 'Minimize Archive' : 'View Full Archive'}
          </motion.button>
        </motion.div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              transition={{ duration: 0.8, ease: premiumEase }}
              className="w-full mt-24"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 pb-24">
                {cases.map((item, index) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.15, duration: 0.8, ease: premiumEase }}
                    viewport={{ once: true }}
                    className="flex flex-col gap-6"
                  >
                    <BeforeAfterSlider 
                      beforeImage={item.before} 
                      afterImage={item.after} 
                      alt={item.title} 
                    />
                    <div className="border-l-8 border-brand-yellow pl-8 py-2">
                      <h3 className="text-3xl font-black uppercase tracking-tighter mb-2">{item.title}</h3>
                      <div className="flex flex-wrap gap-4 items-center">
                        <span className="text-xs font-black uppercase tracking-widest bg-brand-black text-white px-3 py-1">{item.details}</span>
                        <span className="text-xs font-black uppercase tracking-widest text-brand-orange">{item.timeframe}</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
};

export default GallerySection;