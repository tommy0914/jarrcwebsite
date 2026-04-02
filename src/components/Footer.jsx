import React from 'react';
import logoImage from '../assets/logofirst.png';

const Footer = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      // Remove the hash from the URL without reloading the page
      window.history.pushState('', document.title, window.location.pathname + window.location.search);
    }
  };

  return (
    <footer id="contact" className="bg-[#4ade80] py-16 md:py-24 px-6 md:px-12 relative overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-col h-full">
        <div className="flex flex-col md:flex-row justify-between items-start mb-20 md:mb-32 gap-12 relative z-10">
          <div className="max-w-4xl">
            <h2 className="text-[64px] md:text-[110px] font-bold leading-[0.9] text-gray-900 mb-12 tracking-tighter">
              Want to Start <br /> a Project?
            </h2>
            <button 
              onClick={() => scrollToSection('contact')} 
              className="bg-white text-gray-900 px-5 py-2 rounded-full flex items-center gap-2 font-medium hover:bg-gray-50 transition-colors text-sm"
            >
              Let's Talk
              <div className="w-6 h-6 rounded-full bg-[#4ade80] flex items-center justify-center text-white">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </div>
            </button>
          </div>

          <div className="flex flex-col gap-1.5 text-right md:text-right w-full md:w-auto font-['Inter'] text-[13px] font-medium text-gray-900/80">
            <a href="#" className="hover:text-black transition-colors">Instagram</a>
            <a href="#" className="hover:text-black transition-colors">Behance</a>
            <a href="#" className="hover:text-black transition-colors">Facebook</a>
            <a href="#" className="hover:text-black transition-colors">Twitter</a>
            <a href="#" className="hover:text-black transition-colors">LinkedIn</a>
          </div>
        </div>

        <div className="mt-auto relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-center border-b border-gray-900/10 pb-8 mb-8 gap-8">
             <img src={logoImage} alt="JAARC TECHSPHERE" className="h-10 md:h-12 object-contain grayscale brightness-0 opacity-80" />
             
             <div className="flex gap-8 md:gap-12 text-[13px] font-medium text-gray-900/80">
                <a href="#" onClick={(e) => { e.preventDefault(); scrollToSection('home'); }} className="hover:text-black transition-colors">Home</a>
                <a href="#" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }} className="hover:text-black transition-colors">About</a>
                <a href="#" onClick={(e) => { e.preventDefault(); scrollToSection('services'); }} className="hover:text-black transition-colors">Services</a>
                <a href="#" onClick={(e) => { e.preventDefault(); scrollToSection('project'); }} className="hover:text-black transition-colors">Project</a>
                <a href="#" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }} className="hover:text-black transition-colors">Contact</a>
             </div>
          </div>
          
          <div className="flex justify-center md:justify-center text-[12px] text-gray-900/60 font-medium">
            <p>© 2026 Jaarc Techsphere. All rights reserved</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
