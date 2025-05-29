import React, { useEffect } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import WhatYoullLearn from './components/WhatYoullLearn';
import BonusSection from './components/BonusSection';
import AboutAuthor from './components/AboutAuthor';
import LeadForm from './components/LeadForm';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    // Update page title
    document.title = "Before You Go Solar: A Nigerian Guide to Making the Right Choice";
    
    // Update favicon (optional)
    const link = document.querySelector("link[rel~='icon']") as HTMLLinkElement;
    if (link) {
      link.href = "/solar-favicon.svg";
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <HeroSection />
        <WhatYoullLearn />
        <BonusSection />
        <AboutAuthor />
        <LeadForm />
      </main>
      
      <Footer />
    </div>
  );
}

export default App;