import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Info, Calculator, Zap, Thermometer } from 'lucide-react';

const GraftEstimator: React.FC = () => {
  const [coverage, setCoverage] = useState(2);
  const [isCalculating, setIsCalculating] = useState(false);

  useEffect(() => {
    setIsCalculating(true);
    const timer = setTimeout(() => setIsCalculating(false), 400);
    return () => clearTimeout(timer);
  }, [coverage]);

  const calculateGrafts = (level: number) => {
    const grafts = [800, 1500, 2500, 3500, 5000];
    return grafts[level - 1];
  };

  const calculateHours = (level: number) => {
    const hours = [2.5, 4, 6.5, 8, 11];
    return hours[level - 1];
  };

  const getLabel = (level: number) => {
    const labels = ["Receding Hairline", "Crown Thinning", "Mid-Scalp Area", "Severe Recession", "Full Restoration"];
    return labels[level - 1];
  };

  return (
    <section className="bg-brand-pink text-brand-black py-32 px-6 border-b-4 border-brand-black relative overflow-hidden">
      <div className="absolute inset-0 bg-grid pointer-events-none opacity-10" />
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center relative z-10">
        
        <div className="space-y-12">
          <div>
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="flex items-center gap-3 mb-6"
            >
              <div className="p-2 bg-brand-black text-white shadow-[4px_4px_0px_0px_white]">
                <Calculator size={18} />
              </div>
              <span className="font-black uppercase tracking-[0.3em] text-[10px]">Algorithm V2.4</span>
            </motion.div>
            <h2 className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-[0.8] mb-8">
              Diagnostic<br />Estimator
            </h2>
            <p className="text-2xl font-bold max-w-md leading-none text-brand-black/80">
              Select your progression level to calculate graft density and clinical hours.
            </p>
          </div>
          
          <div className="bg-white border-4 border-brand-black p-10 shadow-[16px_16px_0px_0px_rgba(23,23,23,1)] relative">
            <div className="mb-12">
              <div className="flex justify-between items-end mb-6">
                <label className="text-[10px] font-black uppercase tracking-widest opacity-60">Coverage Zone Selection</label>
                <motion.span 
                  key={coverage}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-xs font-black bg-brand-black text-white px-3 py-1 uppercase"
                >
                  {getLabel(coverage)}
                </motion.span>
              </div>
              
              <div className="relative h-12 flex items-center">
                 <input 
                  type="range" 
                  min="1" 
                  max="5" 
                  step="1"
                  value={coverage}
                  onChange={(e) => setCoverage(parseInt(e.target.value))}
                  className="w-full h-8 bg-gray-200 rounded-none appearance-none cursor-pointer accent-brand-black border-4 border-brand-black z-10"
                />
                <div className="absolute top-0 left-0 h-full flex justify-between w-full pointer-events-none items-center px-1">
                  {[1,2,3,4,5].map(tick => (
                    <div key={tick} className={`w-1 h-3 ${coverage >= tick ? 'bg-brand-black' : 'bg-gray-400'}`} />
                  ))}
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-6 border-4 border-brand-black bg-brand-yellow relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-2 opacity-20 group-hover:opacity-100 transition-opacity">
                  <Zap size={20} fill="currentColor" />
                </div>
                <p className="text-[10px] font-black uppercase opacity-40 mb-2">Required Grafts</p>
                <div className="flex items-baseline gap-1">
                  <motion.p 
                    key={coverage}
                    initial={{ scale: 0.9 }}
                    animate={{ scale: 1 }}
                    className={`text-5xl font-black ${isCalculating ? 'opacity-20' : 'opacity-100'} transition-opacity`}
                  >
                    {calculateGrafts(coverage).toLocaleString()}
                  </motion.p>
                  <span className="text-xs font-black uppercase opacity-40">GRAFTS</span>
                </div>
              </div>

              <div className="p-6 border-4 border-brand-black bg-brand-offwhite group">
                <div className="absolute top-0 right-0 p-2 opacity-20 group-hover:opacity-100 transition-opacity text-brand-orange">
                  <Thermometer size={20} />
                </div>
                <p className="text-[10px] font-black uppercase opacity-40 mb-2">Op Duration</p>
                <div className="flex items-baseline gap-1">
                   <motion.p 
                    key={coverage}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className={`text-5xl font-black ${isCalculating ? 'opacity-20' : 'opacity-100'} transition-opacity`}
                  >
                    ~{calculateHours(coverage)}
                  </motion.p>
                  <span className="text-xs font-black uppercase opacity-40">HOURS</span>
                </div>
              </div>
            </div>
            
            <AnimatePresence>
              {isCalculating && (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 bg-brand-black/5 backdrop-blur-[2px] flex items-center justify-center pointer-events-none"
                >
                  <div className="text-[10px] font-black uppercase tracking-[0.4em] animate-pulse">Calculating...</div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Right Info Card */}
        <div className="relative group">
          <div className="absolute inset-0 bg-brand-black rotate-2 translate-x-4 translate-y-4 -z-10 transition-all duration-700 group-hover:rotate-0 group-hover:translate-x-0 group-hover:translate-y-0" />
          <div className="border-4 border-brand-black bg-brand-offwhite p-12 flex flex-col justify-center items-center text-center">
            <div className="w-20 h-20 bg-brand-orange rounded-full flex items-center justify-center mb-8 border-4 border-brand-black">
              <Info size={36} className="text-brand-black" />
            </div>
            <h3 className="text-3xl font-black uppercase mb-6 tracking-tight">Accuracy Notice</h3>
            <p className="font-bold text-lg mb-10 leading-snug">
              Every scalp architecture is different. This estimate uses standard clinical benchmarks for follicle density.
            </p>
            <button className="w-full group relative py-5 bg-brand-black text-white font-black uppercase tracking-widest border-4 border-brand-black overflow-hidden">
               <span className="relative z-10 group-hover:text-brand-black transition-colors">Book Digital Scan</span>
               <div className="absolute inset-0 bg-brand-yellow translate-y-[101%] group-hover:translate-y-0 transition-transform duration-300" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default GraftEstimator;