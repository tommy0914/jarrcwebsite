import React from 'react';
import dividerImg from '../assets/divider_bg.png';

const Hero = () => {
  return (
    <section id="home" className="bg-[#f8f9f8] px-6 md:px-12 pt-12 pb-20 md:pb-32 relative overflow-hidden">
      <div id="about" className="absolute -top-20"></div>
      {/* Large half-circle (190 degree) on the right edge - Smaller size */}
      <div className="absolute right-0 top-[2%] w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-[#4ade80] rounded-full z-0 pointer-events-none translate-x-[45%] shadow-[-15px_15px_60px_-15px_rgba(0,0,0,0.15)] animate-float"></div>

      <div className="max-w-6xl mx-auto flex flex-col items-end text-right relative z-10 md:pr-20 lg:pr-80">
        <h1 className="font-['Cakra'] font-normal text-[32px] md:text-[50px] leading-[1.2] md:leading-[70px] tracking-normal text-gray-900 mb-8 md:mb-12 max-w-4xl text-right overflow-hidden">
          <span className="block animate-fade-in-up opacity-0" style={{ animationDelay: '0.2s' }}>BUILD POWERFUL DIGITAL</span>
          <span className="block animate-fade-in-up opacity-0" style={{ animationDelay: '0.5s' }}>EXPERIENCES FOR MODERN</span>
          <span className="block animate-fade-in-up opacity-0" style={{ animationDelay: '0.8s' }}>BUSINESSES</span>
        </h1>
        
        <div className="flex flex-col md:flex-row items-center justify-between w-full mt-12 md:mt-24 lg:mt-48 gap-10">
          <div className="flex-1 text-right max-w-full md:max-w-[346px] font-['Poppins'] font-normal text-[16px] md:text-[18px] leading-[1.4] tracking-normal text-gray-600 animate-fade-in-up opacity-0" style={{ animationDelay: '1.2s' }}>
             <p>
               JAARC Techsphere is the digital innovation division of JAARC, delivering professional websites, web platforms, and digital systems that help organizations grow and operate efficiently in the modern digital world.
             </p>
          </div>
          
          <div className="hidden md:flex flex-1">
            {/* Empty space to balance the layout */}
          </div>
        </div>
      </div>

      {/* Divider Background */}
      <div className="absolute w-full left-0 top-[10%] md:top-[12%] z-0 opacity-80 pointer-events-none">
        <img src={dividerImg} className="w-full h-auto object-cover" alt="divider" />
      </div>

      {/* What is Techsphere section */}
      <div className="max-w-6xl mx-auto mt-20 md:mt-40 lg:mt-64 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 lg:gap-20 items-center relative z-10">
        <div>
          <h2 className="font-['Cakra'] font-normal text-[28px] md:text-[34px] leading-tight md:leading-[43.2px] tracking-normal align-middle mb-3 uppercase flex items-center flex-wrap">
            WHAT IS&nbsp;
            <span className="relative inline-flex items-center justify-center h-[36px] md:h-[42.17px] px-2 top-[-0.07px]">
              <span className="absolute inset-0 bg-[#4ade80] rounded-[3px] transform -rotate-[1.6deg] origin-left"></span>
              <span className="relative">TECHSPHERE?</span>
            </span>
          </h2>
          <p className="font-['Inter'] font-normal text-[17px] md:text-[19px] leading-[1.5] md:leading-[30px] tracking-normal text-gray-600 w-full lg:w-[539.25px] opacity-100">
            Techsphere is the technology and digital solutions division of JAARC. We specialize in designing and developing modern websites and digital systems that help businesses establish a strong online presence and improve operational efficiency.
          </p>
        </div>
        <div className="relative w-full flex items-center justify-center lg:justify-end overflow-visible">
           <div className="w-full lg:w-[850px] border-[1.23px] border-[#42DD75B2] rounded-[30px] lg:rounded-[50%] flex flex-col items-center justify-center p-8 md:p-12 lg:p-0 lg:h-[380px] bg-white lg:bg-transparent lg:relative lg:-right-20">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6 w-full max-w-[500px]">
              <div className="flex items-center gap-3 text-gray-800" style={{ fontFamily: 'Inter', fontWeight: 500, fontSize: '16px' }}>
                 <span className="text-green-500 text-[18px]">&#x2726;</span> Web Development
              </div>
              <div className="flex items-center gap-3 text-gray-800" style={{ fontFamily: 'Inter', fontWeight: 500, fontSize: '16px' }}>
                 <span className="text-green-500 text-[18px]">&#x2726;</span> Digital Transformation
              </div>
              <div className="flex items-center gap-3 text-gray-800" style={{ fontFamily: 'Inter', fontWeight: 500, fontSize: '16px' }}>
                 <span className="text-green-500 text-[18px]">&#x2726;</span> Modern UI/UX Design
              </div>
              <div className="flex items-center gap-3 text-gray-800" style={{ fontFamily: 'Inter', fontWeight: 500, fontSize: '16px' }}>
                 <span className="text-green-500 text-[18px]">&#x2726;</span> Maintenance & Support
              </div>
            </div>
           </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
