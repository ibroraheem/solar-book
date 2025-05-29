import React from 'react';
import { Mail, Phone } from 'lucide-react';

const AboutAuthor: React.FC = () => {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-12 text-[#2C3E50]">
          About The Author
        </h2>
        
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
          <div className="w-40 h-40 bg-gradient-to-br from-[#007BFF] to-[#0056b3] rounded-full flex items-center justify-center text-white text-3xl font-bold flex-shrink-0">
            IA
          </div>
          
          <div>
            <h3 className="text-xl font-bold text-[#2C3E50] mb-2">Ibrahim Abdulraheem</h3>
            <p className="text-[#333333] mb-4">
              Ibrahim is a qualified Electrical and Electronics Engineer with extensive knowledge in renewable energy systems. He combines his technical expertise with practical insights to help Nigerian homes and businesses make informed decisions about solar power solutions.
            </p>
            <p className="text-[#333333] mb-6">
              With his engineering background and deep understanding of Nigeria's energy challenges, Ibrahim bridges the gap between technical knowledge and practical applications that work for everyday Nigerians.
            </p>
            
            <div className="space-y-3">
              <a 
                href="mailto:ibroraheem95@gmail.com" 
                className="flex items-center gap-2 text-[#2C3E50] hover:text-[#007BFF] transition-colors"
              >
                <Mail size={18} />
                <span>ibroraheem95@gmail.com</span>
              </a>
              <a 
                href="https://wa.me/2349066730744" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-[#2C3E50] hover:text-[#25D366] transition-colors"
              >
                <Phone size={18} />
                <span>WhatsApp: +234 906 673 0744</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutAuthor;