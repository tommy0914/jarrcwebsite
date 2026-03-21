<script setup>
import logoImage from '../assets/logofirst.png'
</script>

<template>
  <footer id="contact" class="bg-[#4ade80] py-20 px-6 md:px-12">
    <div class="max-w-6xl mx-auto">
      <div class="flex flex-col md:flex-row justify-between items-start mb-24 gap-12">
        <div class="max-w-2xl">
          <h2 class="text-[48px] md:text-[84px] font-['Cakra'] font-normal leading-[1] text-gray-900 mb-8">
            Want to Start <br /> a Project?
          </h2>
          <button class="bg-white text-gray-900 px-8 py-4 rounded-full flex items-center gap-3 font-semibold hover:bg-gray-50 transition-colors">
            Let's Talk
            <span class="w-8 h-8 rounded-full bg-[#4ade80] flex items-center justify-center text-white">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </span>
          </button>
        </div>
        
        <div class="flex flex-col gap-2 text-right md:text-right w-full md:w-auto font-['Inter']">
          <a href="#" class="text-gray-900 hover:underline">Instagram</a>
          <a href="#" class="text-gray-900 hover:underline">Behance</a>
          <a href="#" class="text-gray-900 hover:underline">Facebook</a>
          <a href="#" class="text-gray-900 hover:underline">Twitter</a>
          <a href="#" class="text-gray-900 hover:underline">LinkedIn</a>
        </div>
      </div>

      <div class="flex flex-col md:flex-row justify-between items-center pb-8 gap-8">
        <div class="flex items-center gap-2">
          <img :src="logoImage" alt="JAARC TECHSPHERE" class="h-8 md:h-10" />
          <span class="font-bold text-gray-900 text-lg md:text-xl tracking-tight">JAARC <br/><span class="text-[10px] uppercase font-normal tracking-[0.2em] -mt-1 block">Techsphere</span></span>
        </div>
        
        <nav class="flex flex-wrap justify-center gap-6 md:gap-10 text-sm font-medium text-gray-900">
          <a href="#" class="hover:underline">Home</a>
          <a href="#" class="hover:underline">About</a>
          <a href="#" class="hover:underline">Services</a>
          <a href="#" class="hover:underline">Project</a>
          <a href="#" class="hover:underline">Contact</a>
        </nav>
      </div>
      
      <div class="border-t border-gray-900/20 pt-8 text-center text-sm text-gray-800 opacity-60">
        © 2025 Jaarc Techsphere. All rights reserved
      </div>
    </div>
  </footer>
</template>
