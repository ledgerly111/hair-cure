import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-black text-white p-6 md:p-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
        <div>
          <h2 className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-none mb-6">
            Ready to<br/>Transform?
          </h2>
          <button className="bg-white text-brand-black px-8 py-4 text-xl font-bold uppercase hover:bg-brand-yellow transition-colors">
            Book Consultation
          </button>
        </div>
        
        <div className="flex flex-col justify-end">
           <div className="grid grid-cols-2 gap-8 font-medium">
              <div>
                 <p className="text-gray-400 uppercase text-xs mb-2">Location</p>
                 <p>123 Scalp Street</p>
                 <p>New York, NY 10012</p>
              </div>
              <div>
                 <p className="text-gray-400 uppercase text-xs mb-2">Contact</p>
                 <p>hello@haircure.com</p>
                 <p>@haircure_clinic</p>
              </div>
           </div>
        </div>
      </div>

      <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
        <p>&copy; 2024 Hair Cure Clinic. All rights reserved.</p>
        <div className="flex gap-4 mt-4 md:mt-0">
          <a href="#" className="hover:text-white">Privacy</a>
          <a href="#" className="hover:text-white">Terms</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;