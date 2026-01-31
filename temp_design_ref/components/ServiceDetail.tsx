import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2, Clock, Zap } from 'lucide-react';
import { ServiceItem } from '../types';

interface ServiceDetailProps {
  service: ServiceItem | null;
  onClose: () => void;
}

const ServiceDetail: React.FC<ServiceDetailProps> = ({ service, onClose }) => {
  return (
    <AnimatePresence>
      {service && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-[70] bg-brand-black/80 backdrop-blur-sm"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 h-full w-full md:w-[600px] z-[80] bg-white border-l-4 border-brand-black shadow-[-20px_0px_60px_rgba(0,0,0,0.5)] overflow-y-auto no-scrollbar"
          >
            {/* Header Area */}
            <div className={`p-8 md:p-12 ${service.color} border-b-4 border-brand-black relative`}>
              <button 
                onClick={onClose}
                className="absolute top-6 right-6 p-2 bg-brand-black text-white rounded-full hover:scale-110 transition-transform"
              >
                <X size={24} />
              </button>
              
              <motion.span 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-block px-3 py-1 bg-brand-black text-white text-xs font-black uppercase tracking-widest mb-4"
              >
                Service ID: {service.id}
              </motion.span>
              
              <motion.h2 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none"
              >
                {service.title}
              </motion.h2>
            </div>

            {/* Content Area */}
            <div className="p-8 md:p-12 space-y-12">
              <section>
                <h3 className="text-xs font-black uppercase tracking-widest text-gray-400 mb-4 border-b border-gray-100 pb-2">Overview</h3>
                <p className="text-xl md:text-2xl font-bold leading-tight text-brand-black">
                  {service.longDescription}
                </p>
              </section>

              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 border-2 border-brand-black bg-brand-offwhite">
                  <Clock className="mb-2 text-brand-orange" size={20} />
                  <p className="text-xs uppercase font-black opacity-50">Duration</p>
                  <p className="font-bold">{service.duration}</p>
                </div>
                <div className="p-4 border-2 border-brand-black bg-brand-offwhite">
                  <Zap className="mb-2 text-brand-yellow" size={20} />
                  <p className="text-xs uppercase font-black opacity-50">Price From</p>
                  <p className="font-bold">{service.price}</p>
                </div>
              </div>

              <section>
                <h3 className="text-xs font-black uppercase tracking-widest text-gray-400 mb-6 border-b border-gray-100 pb-2">Key Benefits</h3>
                <div className="grid grid-cols-1 gap-4">
                  {service.benefits.map((benefit, idx) => (
                    <motion.div 
                      key={idx}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5 + (idx * 0.1) }}
                      className="flex items-start gap-4 p-4 border-2 border-transparent hover:border-brand-black hover:bg-brand-offwhite transition-all group"
                    >
                      <CheckCircle2 className="text-brand-pink shrink-0" size={24} />
                      <p className="font-bold text-lg group-hover:translate-x-1 transition-transform">{benefit}</p>
                    </motion.div>
                  ))}
                </div>
              </section>

              <div className="pt-12">
                <button className="w-full py-6 bg-brand-black text-white text-xl font-black uppercase tracking-widest hover:bg-brand-orange transition-colors shadow-[8px_8px_0px_0px_rgba(251,146,60,1)] active:translate-x-1 active:translate-y-1 active:shadow-none">
                  Book This Treatment
                </button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ServiceDetail;