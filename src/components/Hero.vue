<template>
  <section id="home" class="bg-[#f8f9f8] px-6 md:px-12 pt-12 pb-20 md:pb-32 relative overflow-hidden">
    <div id="about" class="absolute -top-20"></div>
    <!-- Large half-circle (190 degree) on the right edge - Smaller size -->
    <div class="absolute right-0 top-[2%] w-[200px] md:w-[300px] h-[400px] md:h-[600px] bg-[#4ade80] rounded-l-full z-0 pointer-events-none translate-x-[20%] shadow-[-15px_15px_60px_-15px_rgba(0,0,0,0.15)]"></div>

    <div class="max-w-6xl mx-auto flex flex-col items-end text-right relative z-10 md:pr-80">
      <h1 class="font-['Cakra'] font-normal text-[32px] md:text-[50px] leading-[1.2] md:leading-[70px] tracking-normal text-gray-900 mb-8 md:mb-12 max-w-4xl text-right">
        <span class="block animate-fade-in-up" style="animation-delay: 0.1s">BUILD POWERFUL DIGITAL</span>
        <span class="block animate-fade-in-up" style="animation-delay: 0.3s">EXPERIENCES FOR MODERN</span>
        <span class="block animate-fade-in-up" style="animation-delay: 0.5s">BUSINESSES</span>
      </h1>
      
      <div class="flex flex-col md:flex-row items-center justify-between w-full mt-20 md:mt-80 gap-10">
        <div class="flex-1 text-right max-w-full md:max-w-[346px] font-['Poppins'] font-normal text-[16px] md:text-[18px] leading-[1.4] tracking-normal text-gray-600">
           <p>
             JAARC Techsphere is the digital innovation division of JAARC, delivering professional websites, web platforms, and digital systems that help organizations grow and operate efficiently in the modern digital world.
           </p>
        </div>
        
        <div class="hidden md:flex flex-1">
          <!-- Empty space to balance the layout -->
        </div>
      </div>
    </div>

    <!-- What is Techsphere section -->
    <div class="max-w-6xl mx-auto mt-32 md:mt-96 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
      <div>
        <h2 class="font-['Cakra'] font-normal text-[28px] md:text-[34px] leading-tight md:leading-[43.2px] tracking-normal align-middle mb-6 uppercase flex items-center flex-wrap">
          WHAT IS&nbsp;
          <span class="relative inline-flex items-center justify-center h-[36px] md:h-[42.17px] px-2 top-[-0.07px]">
            <span class="absolute inset-0 bg-[#4ade80] rounded-[3px] transform -rotate-[1.6deg] origin-left"></span>
            <span class="relative">TECHSPHERE?</span>
          </span>
        </h2>
        <p class="font-['Inter'] font-normal text-[17px] md:text-[19px] leading-[1.5] md:leading-[30px] tracking-normal text-gray-600 w-full md:w-[539.25px] md:h-[140px] opacity-100">
          Techsphere is the technology and digital solutions division of JAARC. We specialize in designing and developing modern websites and digital systems that help businesses establish a strong online presence and improve operational efficiency.
        </p>
      </div>
      <div class="relative h-auto md:h-[396.88px] flex items-center w-full overflow-visible">
         <div class="relative md:absolute md:-right-[130px] w-full md:w-[832.88px] h-auto md:h-[396.88px] border-[1.23px] border-[#42DD75B2] rounded-[30px] md:rounded-[50%] flex flex-col items-center justify-center p-8 md:p-0 opacity-100 bg-white md:bg-transparent"
              style="top: 0.56px; left: 0.56px;">
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-x-8 md:gap-x-12 gap-y-3 md:gap-y-4 w-full md:w-[492px] md:h-[131px]">
              <div class="flex items-center gap-2 font-['Inter'] font-normal text-[14px] md:text-[15.18px] leading-tight md:leading-[23.61px] tracking-normal text-gray-700">
                 <span class="text-green-500 text-sm">✦</span> Reliable Development
              </div>
              <div class="flex items-center gap-2 font-['Inter'] font-normal text-[14px] md:text-[15.18px] leading-tight md:leading-[23.61px] tracking-normal text-gray-700">
                 <span class="text-green-500 text-sm">✦</span> Business Digital Transformation
              </div>
              <div class="flex items-center gap-2 font-['Inter'] font-normal text-[14px] md:text-[15.18px] leading-tight md:leading-[23.61px] tracking-normal text-gray-700">
                 <span class="text-green-500 text-sm">✦</span> Modern UI Design
              </div>
              <div class="flex items-center gap-2 font-['Inter'] font-normal text-[14px] md:text-[15.18px] leading-tight md:leading-[23.61px] tracking-normal text-gray-700">
                 <span class="text-green-500 text-sm">✦</span> Business Growth Solutions
              </div>
              <div class="flex items-center gap-2 font-['Inter'] font-normal text-[14px] md:text-[15.18px] leading-tight md:leading-[23.61px] tracking-normal text-gray-700">
                 <span class="text-green-500 text-sm">✦</span> Branding
              </div>
              <div class="flex items-center gap-2 font-['Inter'] font-normal text-[14px] md:text-[15.18px] leading-tight md:leading-[23.61px] tracking-normal text-gray-700">
                 <span class="text-green-500 text-sm">✦</span> Tech Support
              </div>
            </div>
         </div>
      </div>
    </div>
  </section>
</template>
