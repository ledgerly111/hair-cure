import React from 'react';
import { motion } from 'framer-motion';
import { Award, Microscope, ShieldCheck } from 'lucide-react';

const doctors = [
  {
    name: "Dr. Elena Vance",
    role: "Chief Surgical Architect",
    specialty: "Robotic FUE & Hairline Design",
    experience: "15+ Years",
    image: "https://images.unsplash.com/photo-1559839734-2b71f1536783?auto=format&fit=crop&q=80&w=800"
  },
  {
    name: "Dr. Marcus Thorne",
    role: "Restorative Biologist",
    specialty: "Stem Cell & PRP Therapies",
    experience: "12+ Years",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=800"
  },
  {
    name: "Dr. Sarah Chen",
    role: "Micro-Transplant Specialist",
    specialty: "Eyebrow & Beard Restoration",
    experience: "10+ Years",
    image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=800"
  }
];

const TeamSection: React.FC = () => {
  return (
    <section className="bg-brand-offwhite text-brand-black py-24 px-6 border-b-2 border-brand-black">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-xl">
            <span className="text-xs font-black uppercase tracking-widest border-2 border-brand-black px-2 py-1 bg-brand-yellow inline-block mb-4 shadow-[3px_3px_0px_0px_rgba(23,23,23,1)]">
              The Specialists
            </span>
            <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none">
              Meet the<br />Architects
            </h2>
          </div>
          <div className="flex gap-4">
             <div className="flex flex-col items-center">
                <Microscope size={24} className="mb-2" />
                <span className="text-[10px] font-black uppercase">Precision</span>
             </div>
             <div className="flex flex-col items-center">
                <ShieldCheck size={24} className="mb-2" />
                <span className="text-[10px] font-black uppercase">Certified</span>
             </div>
             <div className="flex flex-col items-center">
                <Award size={24} className="mb-2" />
                <span className="text-[10px] font-black uppercase">Awarded</span>
             </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {doctors.map((doc, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.1 }}
              className="group cursor-help"
            >
              <div className="relative aspect-[3/4] overflow-hidden border-4 border-brand-black shadow-[8px_8px_0px_0px_rgba(23,23,23,1)]">
                <img 
                  src={doc.image} 
                  alt={doc.name} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                />
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-brand-black text-white translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500">
                  <p className="text-xs font-black uppercase tracking-widest text-brand-yellow mb-1">{doc.role}</p>
                  <p className="font-bold text-sm leading-tight opacity-80">{doc.specialty}</p>
                </div>
              </div>
              <div className="mt-6 flex justify-between items-end">
                <div>
                  <h3 className="text-2xl font-black uppercase tracking-tight leading-none">{doc.name}</h3>
                  <p className="text-xs font-black uppercase mt-2 text-gray-400">Exp: {doc.experience}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;