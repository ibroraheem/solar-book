import React from "react";
import { Mail, Phone } from "lucide-react";

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
            <h3 className="text-xl font-bold text-[#2C3E50] mb-2">
              Ibrahim Abdulraheem
            </h3>
            <p className="text-[#333333] mb-4">
              Ibrahim Abdulraheem is a graduate of Electrical and Electronics
              Engineering and currently works as an Associate Engineer at EM-ONE
              Energy Solutions.
            </p>
            <p className="text-[#333333] mb-6">
              He is passionate about helping everyday Nigerians make informed,
              confident decisions about clean energy. As a solar system designer
              and energy analyst, Ibrahim focuses on creating reliable,
              cost-effective solar and inverter solutions tailored to real-life
              needs and budgets. He is also the creator of SolarMate, a free
              online tool that simplifies load calculations for individuals and
              small businesses considering solar. Through his work, writing, and
              tools, he aims to bridge the gap between complex energy systems
              and everyday users, making sustainable energy more accessible
              across Nigeria.
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
