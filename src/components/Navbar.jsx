import React, { useState } from 'react';
import logoImg from '../assets/logofirst.png';
import dividerBg from '../assets/divider_bg.png';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (!isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  };

  const scrollToSection = (id) => {
    setIsMenuOpen(false);
    document.body.style.overflow = 'auto';
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      // Remove the hash from the URL without reloading the page
      window.history.pushState('', document.title, window.location.pathname + window.location.search);
    }
  };

  return (
    <nav className="flex justify-between items-center px-6 md:px-12 py-8 bg-[#f8f9f8] font-['Inter'] sticky top-0 z-50 shadow-sm">
      <div className="flex items-center gap-2">
        <img 
          src={logoImg} 
          alt="JAARC Logo" 
          className="h-8 md:h-10 object-contain cursor-pointer" 
          onClick={() => scrollToSection('home')} 
        />
      </div>
      
      <div className="hidden md:flex gap-10 text-[18px] font-normal leading-[27px] tracking-normal text-gray-700 font-['Inter']">
        <a href="#" onClick={(e) => { e.preventDefault(); scrollToSection('home'); }} className="hover:text-green-500 transition-colors">Home</a>
        <a href="#" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }} className="hover:text-green-500 transition-colors">About</a>
        <a href="#" onClick={(e) => { e.preventDefault(); scrollToSection('services'); }} className="hover:text-green-500 transition-colors">Services</a>
        <a href="#" onClick={(e) => { e.preventDefault(); scrollToSection('project'); }} className="hover:text-green-500 transition-colors">Project</a>
        <a href="#" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }} className="hover:text-green-500 transition-colors">Contact</a>
      </div>

      <div className="flex items-center gap-4">
        <button 
          onClick={() => scrollToSection('contact')} 
          className="hidden md:flex items-center gap-2 border border-gray-300 rounded-full pl-4 pr-1 py-1 bg-white hover:bg-gray-50 transition-all shadow-sm group animate-pulse-slow"
        >
          <span className="text-[14px] font-medium text-gray-900 group-hover:text-green-600">Let's Talk</span>
          <div className="w-8 h-8 bg-[#4ade80] rounded-full flex items-center justify-center text-white group-hover:scale-110 transition-transform">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 -rotate-45 group-hover:rotate-0 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
              <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </div>
        </button>
        
        <div 
          onClick={toggleMenu} 
          className="w-10 h-10 border border-gray-300 rounded-full flex items-center justify-center cursor-pointer hover:bg-white transition-all shadow-sm"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </div>
      </div>

      {/* Full-screen Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-[#f8f9f8] z-[60] flex flex-col p-6 md:p-12 overflow-hidden">
          {/* Decorative Background Image */}
          <div className="absolute inset-0 z-0 opacity-100 pointer-events-none overflow-hidden">
            <img src={dividerBg} className="w-full h-full object-cover opacity-10" alt="background pattern" />
          </div>

          <div className="flex justify-between items-center relative z-10 w-full mb-20">
            <div className="flex items-center gap-2">
              <img src={logoImg} alt="JAARC Logo" className="h-8 md:h-10 object-contain" />
            </div>
            
            <div className="flex items-center gap-4">
              <button 
                onClick={() => scrollToSection('contact')} 
                className="flex items-center gap-2 border border-gray-300 rounded-full pl-4 pr-1 py-1 bg-white hover:bg-gray-50 transition-all"
              >
                <span className="text-[14px] font-medium text-gray-900">Let's Talk</span>
                <div className="w-7 h-7 bg-[#4ade80] rounded-full flex items-center justify-center text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
              </button>
              
              <div 
                onClick={toggleMenu} 
                className="w-10 h-10 border border-gray-300 rounded-full flex items-center justify-center cursor-pointer bg-white hover:bg-gray-50 transition-all"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-1 relative z-10 mt-10 w-full">
            {['HOME', 'SERVICES', 'ABOUT', 'PROJECT', 'CONTACT'].map((link) => (
              <div 
                key={link} 
                onClick={() => scrollToSection(link.toLowerCase())}
                className="flex justify-between items-center cursor-pointer group py-3 border-b border-gray-100/50 w-full"
              >
                <span 
                  className="text-gray-900 group-hover:text-green-500 transition-colors uppercase inline-block"
                  style={{ fontFamily: "'Cakra'", fontWeight: 400, fontStyle: 'normal', fontSize: '29.66px', lineHeight: '44.49px', letterSpacing: '0%', textAlign: 'center', verticalAlign: 'middle' }}
                >
                  {link}
                </span>
                <div className="flex items-center justify-end w-10 md:w-10">
                  <div className="w-10 h-10 border border-gray-300 rounded-full flex items-center justify-center text-gray-400 group-hover:text-green-500 group-hover:border-green-500 transition-all">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
