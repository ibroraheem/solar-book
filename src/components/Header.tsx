import React from 'react';
import { Sun } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="py-4 px-4 md:px-8 bg-white shadow-sm border-b border-[#CCCCCC]">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Sun className="h-8 w-8 text-[#007BFF]" />
          <span className="text-xl font-bold text-[#2C3E50]">SolarGuideNG</span>
        </div>
        <a 
          href="https://wa.me/2349066730744" 
          target="_blank" 
          rel="noopener noreferrer"
          className="hidden md:block text-sm font-medium text-[#007BFF] hover:text-[#0056b3] transition-colors"
        >
          Contact Us
        </a>
      </div>
    </header>
  );
};

export default Header;