import React, { useState, useEffect } from 'react';
import { Menu, X, Instagram, Twitter, Linkedin, ArrowUpRight, Shield } from 'lucide-react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { scrollY } = useScroll();
  
  // Dynamic transformations based on scroll
  const navBg = useTransform(scrollY, [0, 100], ["rgba(23, 23, 23, 0)", "rgba(23, 23, 23, 0.98)"]);
  const navBorder = useTransform(scrollY, [0, 100], ["rgba(23, 23, 23, 0)", "rgba(23, 23, 23, 1)"]);
  const navPadding = useTransform(scrollY, [0, 100], ["32px", "20px"]);

  const menuVariants = {
    closed: {
      clipPath: "circle(0% at calc(100% - 48px) 40px)",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40,
        staggerChildren: 0.05,
        staggerDirection: -1
      }
    },
    open: {
      clipPath: "circle(150% at calc(100% - 48px) 40px)",
      transition: {
        type: "spring",
        stiffness: 60,
        damping: 20,
        restDelta: 2,
        staggerChildren: 0.08,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    closed: { opacity: 0, x: 30, filter: 'blur(10px)' },
    open: { opacity: 1, x: 0, filter: 'blur(0px)', transition: { ease: [0.22, 1, 0.36, 1], duration: 0.8 } }
  };

  const primaryLinks = [
    { label: 'Procedures', desc: 'Precision Scalp Engineering' },
    { label: 'Diagnostics', desc: 'DNA & Density Analysis' },
    { label: 'Patient Story', desc: 'Before & After Archive' },
    { label: 'Meet Surgeons', desc: 'The Clinical Architects' },
    { label: 'Locations', desc: 'Global Lab Network' },
  ];

  const secondaryLinks = ['Post-Op Guide', 'Price List', 'Safety Protocols', 'Press Kit'];

  return (
    <>
      <motion.nav 
        style={{ backgroundColor: navBg, borderBottomWidth: '4px', borderBottomColor: navBorder, paddingTop: navPadding, paddingBottom: navPadding }}
        className="fixed top-0 left-0 right-0 z-[100] text-white backdrop-blur-md transition-colors"
      >
        <div className="flex justify-between items-center px-6 md:px-12 max-w-7xl mx-auto w-full">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl font-black tracking-tighter uppercase cursor-pointer flex items-center gap-2 group"
          >
            <div className="w-8 h-8 bg-brand-yellow rounded-full flex items-center justify-center group-hover:rotate-180 transition-transform duration-700">
               <div className="w-4 h-4 bg-brand-black" />
            </div>
            Hair Cure<span className="text-brand-yellow">.</span>
          </motion.div>
          
          <div className="flex items-center gap-8">
            <button className="hidden md:flex items-center gap-2 text-[10px] font-black uppercase tracking-widest px-4 py-2 border-2 border-white hover:bg-white hover:text-brand-black transition-all">
               <Shield size={12} fill="currentColor" /> Certified Lab
            </button>
            <button 
              onClick={() => setIsOpen(true)}
              className="flex items-center gap-3 group relative"
            >
              <div className="p-3 bg-white text-brand-black rounded-full hover:bg-brand-yellow transition-all duration-300 shadow-[4px_4px_0px_0px_rgba(251,146,60,1)]">
                <Menu size={20} />
              </div>
            </button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="fixed inset-0 z-[110] bg-brand-yellow flex flex-col p-6 md:p-12 overflow-y-auto no-scrollbar"
          >
            <div className="flex justify-between items-center mb-16 max-w-7xl mx-auto w-full">
              <div className="text-[10px] font-black tracking-[0.4em] uppercase text-brand-black border-4 border-brand-black px-4 py-2 bg-white shadow-[6px_6px_0px_0px_rgba(23,23,23,1)]">
                System_Nav_v4.2
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="p-5 bg-brand-black text-white rounded-full hover:scale-110 transition-transform shadow-2xl active:scale-95"
              >
                <X size={32} />
              </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 flex-grow max-w-7xl mx-auto w-full">
              <div className="flex flex-col gap-2">
                <p className="text-[10px] font-black uppercase text-brand-black/40 tracking-[0.3em] mb-6">Core Modules</p>
                {primaryLinks.map((link) => (
                  <motion.div 
                    key={link.label} 
                    variants={itemVariants}
                    className="group border-b-4 border-brand-black/5 pb-6 flex flex-col cursor-pointer hover:border-brand-black transition-all"
                    onClick={() => setIsOpen(false)}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-5xl md:text-8xl font-black uppercase tracking-tighter group-hover:translate-x-6 transition-transform duration-700 ease-[0.22,1,0.36,1]">
                        {link.label}
                      </span>
                      <ArrowUpRight className="opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all duration-500" size={48} />
                    </div>
                    <span className="text-xs font-black uppercase tracking-widest opacity-40 group-hover:opacity-100 mt-2 transition-opacity group-hover:text-brand-orange">{link.desc}</span>
                  </motion.div>
                ))}
              </div>

              <div className="flex flex-col justify-between">
                <div className="bg-brand-black/5 p-10 border-4 border-brand-black/10">
                  <p className="text-[10px] font-black uppercase text-brand-black/40 tracking-[0.3em] mb-8">Quick Resources</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {secondaryLinks.map((link) => (
                      <motion.div 
                        key={link} 
                        variants={itemVariants}
                        className="text-xl font-black uppercase hover:text-brand-orange cursor-pointer transition-colors flex items-center gap-2 group"
                        onClick={() => setIsOpen(false)}
                      >
                        <div className="w-2 h-2 bg-brand-black rounded-full group-hover:scale-150 group-hover:bg-brand-orange transition-all" />
                        {link}
                      </motion.div>
                    ))}
                  </div>
                </div>

                <motion.div variants={itemVariants} className="mt-12 lg:mt-0 p-10 bg-brand-black text-white border-8 border-white/5 relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-brand-yellow/10 rounded-full translate-x-1/2 -translate-y-1/2" />
                  <p className="text-brand-yellow font-black uppercase tracking-[0.3em] text-[10px] mb-8">Clinical Support Hub</p>
                  <div className="flex gap-10 items-center mb-10">
                    <Instagram size={28} className="hover:text-brand-yellow cursor-pointer transition-all hover:-translate-y-1" />
                    <Twitter size={28} className="hover:text-brand-yellow cursor-pointer transition-all hover:-translate-y-1" />
                    <Linkedin size={28} className="hover:text-brand-yellow cursor-pointer transition-all hover:-translate-y-1" />
                  </div>
                  <div className="space-y-2">
                    <p className="text-gray-400 uppercase font-black text-[10px] tracking-widest">Global Intake</p>
                    <p className="text-3xl md:text-5xl font-black hover:text-brand-yellow transition-colors cursor-pointer tracking-tighter">+1.800.HAIR.CURE</p>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;