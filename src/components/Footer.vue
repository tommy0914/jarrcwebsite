<template>
  <footer class="bg-[#4ade80] text-black px-12 py-24 rounded-t-[60px]">
    <div class="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start">
      <div class="max-w-2xl">
        <h2 class="text-[80px] md:text-[100px] font-extrabold leading-[0.9] mb-12 tracking-tighter">
          Want to Start <br /> a Project?
        </h2>
        <button class="bg-white px-10 py-5 rounded-full flex items-center gap-4 font-bold hover:bg-black hover:text-white transition-all group">
          Let's Talk
          <span class="bg-green-500 text-white w-10 h-10 rounded-full flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">→</span>
        </button>
      </div>
      
      <div class="mt-16 md:mt-0 flex flex-col gap-2 text-right font-bold text-sm uppercase tracking-widest">
        <a href="#" class="hover:underline opacity-80 hover:opacity-100">Instagram</a>
        <a href="#" class="hover:underline opacity-80 hover:opacity-100">Behance</a>
        <a href="#" class="hover:underline opacity-80 hover:opacity-100">Facebook</a>
        <a href="#" class="hover:underline opacity-80 hover:opacity-100">Twitter</a>
        <a href="#" class="hover:underline opacity-80 hover:opacity-100">LinkedIn</a>
      </div>
    </div>

    <div class="max-w-7xl mx-auto border-t border-black/10 mt-32 pt-16 flex flex-col md:flex-row justify-between items-center gap-8">
      <div class="flex items-center gap-3">
        <div class="w-12 h-12 bg-green-700/20 rounded-full flex items-center justify-center">
           <div class="w-8 h-8 bg-green-800 rounded-full blur-sm"></div>
        </div>
        <div class="flex flex-col">
          <span class="font-black text-2xl tracking-tighter uppercase leading-none">JAARC</span>
          <span class="text-[10px] font-bold tracking-[0.2em] uppercase opacity-60">Techsphere</span>
        </div>
      </div>
      
      <div class="flex gap-10 text-[13px] font-bold uppercase tracking-widest">
        <a href="#" class="hover:text-green-800 transition-colors">Home</a>
        <a href="#" class="hover:text-green-800 transition-colors">About</a>
        <a href="#" class="hover:text-green-800 transition-colors">Services</a>
        <a href="#" class="hover:text-green-800 transition-colors">Project</a>
        <a href="#" class="hover:text-green-800 transition-colors">Contact</a>
      </div>
    </div>
    
    <div class="max-w-7xl mx-auto mt-12 pt-8 border-t border-black/5 text-center text-[11px] font-bold uppercase tracking-[0.3em] opacity-40">
      © 2023 Jaarc Techsphere. All rights reserved
    </div>
  </footer>
</template>
