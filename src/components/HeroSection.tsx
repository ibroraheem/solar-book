import React from 'react';
import { ArrowDownCircle } from 'lucide-react';

const HeroSection: React.FC = () => {
  const scrollToForm = () => {
    const form = document.getElementById('lead-form');
    if (form) {
      form.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="bg-gradient-to-br from-[#007BFF] to-[#0056b3] text-white py-12 md:py-20 px-4">
      <div className="container mx-auto max-w-5xl">
        <div className="md:w-3/4 mx-auto text-center">
          <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-4">
            Stop Wasting Money on Fuel and NEPA.
          </h1>
          <h2 className="text-xl md:text-2xl font-medium mb-6">
            Download the Free Guide That Shows You How to Switch to Solar — The Smart Way.
          </h2>
          <p className="text-lg mb-8">
            Made for everyday Nigerians who want peace of mind, quiet nights, and long-term savings with solar power.
          </p>
          <p className="text-base font-medium mb-8">
            50+ people have downloaded this already. Get your copy free today.
          </p>
          <button 
            onClick={scrollToForm}
            className="bg-white text-[#007BFF] hover:bg-[#F4F8FB] transition-colors font-bold py-3 px-8 rounded-full shadow-lg flex items-center gap-2 mx-auto"
          >
            Get Your Free Guide <ArrowDownCircle size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;