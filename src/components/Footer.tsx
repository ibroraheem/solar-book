import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 py-8 px-4">
      <div className="container mx-auto max-w-5xl">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p>&copy; {new Date().getFullYear()} Ibrahim Abdulraheem. All rights reserved.</p>
          </div>
          
          <div className="flex gap-6">
            <a 
              href="mailto:ibroraheem95@gmail.com" 
              className="text-gray-300 hover:text-white transition-colors"
            >
              Contact
            </a>
            <a 
              href="#" 
              className="text-gray-300 hover:text-white transition-colors"
            >
              Privacy Policy
            </a>
            <a 
              href="#" 
              className="text-gray-300 hover:text-white transition-colors"
            >
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;