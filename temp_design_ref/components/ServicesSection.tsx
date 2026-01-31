import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { ServiceItem } from '../types';
import ServiceDetail from './ServiceDetail';

const services: ServiceItem[] = [
  { 
    id: '01', 
    title: 'Transplant', 
    description: 'FUE & FUT Techniques',
    longDescription: 'Our flagship microsurgical procedure uses individual follicular units to restore natural hairlines with zero linear scarring.',
    benefits: ['Natural looking results', 'Minimal downtime', 'Permanent hair growth', 'High success rate'],
    duration: '4-8 Hours',
    price: '$4,500',
    color: 'bg-brand-orange'
  },
  { 
    id: '02', 
    title: 'PRP Therapy', 
    description: 'Platelet-Rich Plasma',
    longDescription: 'A revolutionary biological therapy that uses your own blood platelets to stimulate dormant hair follicles and improve thickness.',
    benefits: ['Non-surgical', 'No risk of rejection', 'Fast recovery', 'Scalp health boost'],
    duration: '45 Minutes',
    price: '$600',
    color: 'bg-brand-pink'
  },
  { 
    id: '03', 
    title: 'Laser Growth', 
    description: 'Low-Level Laser Therapy',
    longDescription: 'FDA-cleared technology that uses clinical-grade lasers to increase blood flow to the scalp and energize hair cells.',
    benefits: ['Painless treatment', 'Increases hair density', 'Reduces inflammation', 'Home-use options'],
    duration: '20 Minutes',
    price: '$200',
    color: 'bg-brand-yellow'
  },
  { 
    id: '04', 
    title: 'Scalp Micro', 
    description: 'Cosmetic Tattooing',
    longDescription: 'Also known as Scalp Micropigmentation (SMP), this replicates the appearance of natural hair follicles for a buzzed look.',
    benefits: ['Immediate results', 'Maintenance free', 'Hides scars', 'Fuller appearance'],
    duration: '2-4 Hours',
    price: '$1,200',
    color: 'bg-brand-offwhite'
  },
];

const ServicesSection: React.FC = () => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  return (
    <section className="bg-white text-brand-black border-b-2 border-brand-black">
      {/* Detail Overlay */}
      <ServiceDetail 
        service={selectedService} 
        onClose={() => setSelectedService(null)} 
      />

      {/* Intro Block with Image */}
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="p-6 md:p-12 border-b-2 md:border-b-0 md:border-r-2 border-brand-black flex flex-col justify-between">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-5xl font-black uppercase mb-6 tracking-tight">Services</h2>
            <p className="text-lg font-medium leading-relaxed mb-8">
              Our heritage is in strategic hair restoration. Over the years our clients have requested more and more expertise. As we've built our team, we've applied our curiosity with clinical rigour.
            </p>
          </motion.div>
          <button className="bg-brand-black text-white px-6 py-3 font-bold uppercase text-sm self-start hover:bg-brand-yellow hover:text-brand-black transition-colors">
            See all services
          </button>
        </div>
        
        <div className="h-64 md:h-auto overflow-hidden border-b-2 md:border-b-0 border-brand-black">
           <motion.img 
            initial={{ scale: 1.1 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 1.2 }}
            src="https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&q=80&w=800" 
            alt="Treatment" 
            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
          />
        </div>
      </div>

      {/* List Items */}
      <div className="flex flex-col">
        {services.map((service, index) => (
          <motion.div 
            key={service.id}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            whileHover={{ backgroundColor: '#FACC15' }} // brand-yellow
            onClick={() => setSelectedService(service)}
            className="flex justify-between items-center p-6 md:p-8 border-b border-brand-black last:border-b-0 cursor-pointer group transition-colors"
          >
            <div className="flex flex-col">
              <span className="text-xl md:text-2xl font-black uppercase group-hover:translate-x-2 transition-transform">{service.title}</span>
              <span className="text-xs uppercase font-medium mt-1 opacity-60 group-hover:opacity-100">{service.description}</span>
            </div>
            <div className="flex items-center gap-4">
               <span className="hidden md:inline text-xs font-black uppercase opacity-0 group-hover:opacity-100 transition-opacity">Learn More</span>
               <ArrowRight className="transform group-hover:translate-x-2 transition-transform" />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;