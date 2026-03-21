<template>
  <nav class="flex justify-between items-center px-6 md:px-12 py-8 bg-[#f8f9f8] font-['Inter'] sticky top-0 z-50 shadow-sm">
    <div class="flex items-center gap-2">
      <img src="/src/assets/logofirst.png" alt="JAARC Logo" class="h-8 md:h-10 object-contain" />
    </div>
    
    <div class="hidden md:flex gap-10 text-[18px] font-normal leading-[27px] tracking-normal text-gray-700 font-['Inter']">
      <a href="#home" class="hover:text-green-500 transition-colors">Home</a>
      <a href="#about" class="hover:text-green-500 transition-colors">About</a>
      <a href="#services" class="hover:text-green-500 transition-colors">Services</a>
      <a href="#project" class="hover:text-green-500 transition-colors">Project</a>
      <a href="#contact" class="hover:text-green-500 transition-colors">Contact</a>
    </div>

    <div class="flex items-center gap-4">
      <div class="w-10 h-10 border border-gray-300 rounded-full flex items-center justify-center cursor-pointer hover:bg-white transition-all shadow-sm">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      </div>
    </div>
  </nav>
</template>
