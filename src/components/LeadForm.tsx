import React, { useState } from 'react';
import { CheckCircle, Send } from 'lucide-react';
import emailjs from '@emailjs/browser';

interface FormData {
  name: string;
  email: string;
  whatsapp: string;
}

const LeadForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    whatsapp: ''
  });
  
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [sending, setSending] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const validate = () => {
    const newErrors: Partial<FormData> = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validate()) {
      setSending(true);
      try {
        await emailjs.send(
          'service_xql3qpy',
          'template_38x3jji',
          {
            to_name: formData.name,
            to_email: formData.email,
            whatsapp: formData.whatsapp || 'Not provided',
            download_link: 'https://files.fm/u/qvsdnfskdn',
            book_title: 'Before You Go Solar: A Nigerian Guide to Making the Right Choice'
          },
          'FmHaxlCbxHu1nh0Al'
        );
        setSubmitted(true);
      } catch (error) {
        console.error('Failed to send email:', error);
        alert('There was an error sending the guide. Please try again or contact us directly.');
      } finally {
        setSending(false);
      }
    }
  };

  return (
    <section id="lead-form" className="py-16 px-4 bg-[#F4F8FB]">
      <div className="container mx-auto max-w-5xl">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-[#CCCCCC]">
          {!submitted ? (
            <div className="p-8">
              <h2 className="text-2xl md:text-3xl font-bold text-center mb-2 text-[#2C3E50]">
                Get Your Free Solar Guide Now
              </h2>
              <p className="text-center text-[#333333] mb-8">
                Enter your details below to receive the guide directly in your inbox.
              </p>
              
              <form onSubmit={handleSubmit} className="max-w-md mx-auto">
                <div className="mb-6">
                  <label htmlFor="name" className="block text-[#2C3E50] font-medium mb-2">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#007BFF] focus:border-[#007BFF] outline-none transition ${errors.name ? 'border-red-500' : 'border-[#CCCCCC]'}`}
                    placeholder="John Doe"
                  />
                  {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                </div>
                
                <div className="mb-6">
                  <label htmlFor="email" className="block text-[#2C3E50] font-medium mb-2">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#007BFF] focus:border-[#007BFF] outline-none transition ${errors.email ? 'border-red-500' : 'border-[#CCCCCC]'}`}
                    placeholder="you@example.com"
                  />
                  {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                </div>
                
                <div className="mb-8">
                  <label htmlFor="whatsapp" className="block text-[#2C3E50] font-medium mb-2">
                    WhatsApp Number (Optional)
                  </label>
                  <input
                    type="text"
                    id="whatsapp"
                    name="whatsapp"
                    value={formData.whatsapp}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-[#CCCCCC] rounded-lg focus:ring-2 focus:ring-[#007BFF] focus:border-[#007BFF] outline-none transition"
                    placeholder="+234 000 000 0000"
                  />
                </div>
                
                <button
                  type="submit"
                  disabled={sending}
                  className={`w-full bg-[#007BFF] hover:bg-[#0056b3] text-white font-bold py-3 px-6 rounded-lg shadow-md transition-colors flex items-center justify-center gap-2 ${sending ? 'opacity-75 cursor-not-allowed' : ''}`}
                >
                  {sending ? 'Sending...' : 'Get the Free Guide Now'} <Send size={18} />
                </button>
                
                <p className="text-center text-[#333333] text-sm mt-4">
                  No spam. No pressure. Just knowledge.
                </p>
              </form>
            </div>
          ) : (
            <div className="p-8 text-center">
              <div className="flex justify-center mb-6">
                <CheckCircle className="h-16 w-16 text-green-500" />
              </div>
              <h2 className="text-2xl font-bold text-[#2C3E50] mb-4">
                Your guide is on the way!
              </h2>
              <p className="text-[#333333] mb-2">
                Check your email inbox for the download link.
              </p>
              <p className="text-[#333333] mb-6">
                Want a free consultation about your solar needs?
              </p>
              <a 
                href="https://wa.me/2349066730744" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#128C7E] text-white font-bold py-3 px-6 rounded-lg shadow-md transition-colors"
              >
                Chat with me on WhatsApp
              </a>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default LeadForm;