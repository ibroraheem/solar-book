import React from 'react';
import { ExternalLink, Calculator } from 'lucide-react';

const BonusSection: React.FC = () => {
  return (
    <section className="py-16 px-4 bg-[#E8F4FF]">
      <div className="container mx-auto max-w-5xl">
        <div className="bg-white rounded-xl p-8 shadow-lg border border-[#CCCCCC]">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="bg-[#007BFF] rounded-full p-4 flex-shrink-0">
              <Calculator className="h-12 w-12 text-white" />
            </div>
            
            <div className="flex-grow">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[#2C3E50]">BONUS: Free Solar Calculator</h2>
              <p className="text-lg mb-6 text-[#333333]">
                Need to calculate your exact solar power needs now? Use our free online calculator to estimate your load requirements.
              </p>
              
              <a 
                href="https://solarmate.netlify.app" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#007BFF] text-white hover:bg-[#0056b3] transition-colors py-3 px-6 rounded-lg font-bold"
              >
                Try Our Free Calculator <ExternalLink size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BonusSection;