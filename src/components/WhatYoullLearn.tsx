import React from 'react';
import { Battery, Calculator, Lightbulb, Shield, ZapOff } from 'lucide-react';

const WhatYoullLearn: React.FC = () => {
  const learningPoints = [
    {
      title: "The 3 types of solar setups that work in Nigeria",
      description: "Understand off-grid, hybrid, and grid-tied systems and which one is right for your situation.",
      icon: <Battery className="h-6 w-6 text-[#007BFF]" />
    },
    {
      title: "How to calculate your exact energy needs",
      description: "Using real Nigerian examples to know exactly what you need, without overpaying.",
      icon: <Calculator className="h-6 w-6 text-[#007BFF]" />
    },
    {
      title: "What inverter size and battery type you actually need",
      description: "Stop wasting money on oversized systems or risking blackouts with undersized ones.",
      icon: <Lightbulb className="h-6 w-6 text-[#007BFF]" />
    },
    {
      title: "Common scams and installer mistakes to avoid",
      description: "The tricks that some installers use to cut corners and how to spot them.",
      icon: <Shield className="h-6 w-6 text-[#007BFF]" />
    },
    {
      title: "Case studies from real Nigerians who now have 24/7 light",
      description: "Real-life examples of homes and businesses that made the switch successfully.",
      icon: <ZapOff className="h-6 w-6 text-[#007BFF]" />
    }
  ];

  return (
    <section className="py-16 px-4 bg-[#F4F8FB]">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-12 text-[#2C3E50]">
          What You'll Learn In This Free Guide
        </h2>
        
        <div className="space-y-6">
          {learningPoints.map((point, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md flex items-start gap-4 transform transition-transform hover:scale-[1.01] border border-[#CCCCCC]">
              <div className="flex-shrink-0 mt-1">
                {point.icon}
              </div>
              <div>
                <h3 className="font-semibold text-lg text-[#2C3E50] mb-2">{point.title}</h3>
                <p className="text-[#333333]">{point.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatYoullLearn;