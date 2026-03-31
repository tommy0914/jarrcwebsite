<script setup>
import { ref } from 'vue';
import logoImg from '../assets/logofirst.png';
import dividerBg from '../assets/divider_bg.png';

const isMenuOpen = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
  if (isMenuOpen.value) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = 'auto';
  }
};

const scrollToSection = (id) => {
  isMenuOpen.value = false;
  document.body.style.overflow = 'auto';
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
    // Remove the hash from the URL without reloading the page
    window.history.pushState('', document.title, window.location.pathname + window.location.search);
  }
};
</script>

<template>
  <nav class="flex justify-between items-center px-6 md:px-12 py-8 bg-[#f8f9f8] font-['Inter'] sticky top-0 z-50 shadow-sm">
    <div class="flex items-center gap-2">
      <img :src="logoImg" alt="JAARC Logo" class="h-8 md:h-10 object-contain cursor-pointer" @click="scrollToSection('home')" />
    </div>
    
    <div class="hidden md:flex gap-10 text-[18px] font-normal leading-[27px] tracking-normal text-gray-700 font-['Inter']">
      <a href="#" @click.prevent="scrollToSection('home')" class="hover:text-green-500 transition-colors">Home</a>
      <a href="#" @click.prevent="scrollToSection('about')" class="hover:text-green-500 transition-colors">About</a>
      <a href="#" @click.prevent="scrollToSection('services')" class="hover:text-green-500 transition-colors">Services</a>
      <a href="#" @click.prevent="scrollToSection('project')" class="hover:text-green-500 transition-colors">Project</a>
      <a href="#" @click.prevent="scrollToSection('contact')" class="hover:text-green-500 transition-colors">Contact</a>
    </div>

    <div class="flex items-center gap-4">
      <button @click="scrollToSection('contact')" class="hidden md:flex items-center gap-2 border border-gray-300 rounded-full pl-4 pr-1 py-1 bg-white hover:bg-gray-50 transition-all shadow-sm group animate-pulse-slow">
        <span class="text-[14px] font-medium text-gray-900 group-hover:text-green-600">Let's Talk</span>
        <div class="w-8 h-8 bg-[#4ade80] rounded-full flex items-center justify-center text-white group-hover:scale-110 transition-transform">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 -rotate-45 group-hover:rotate-0 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="3">
            <path stroke-linecap="round" stroke-linejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </div>
      </button>
      
      <div @click="toggleMenu" class="w-10 h-10 border border-gray-300 rounded-full flex items-center justify-center cursor-pointer hover:bg-white transition-all shadow-sm">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </div>
    </div>

    <!-- Full-screen Mobile Menu Overlay -->
    <div v-if="isMenuOpen" class="fixed inset-0 bg-[#f8f9f8] z-[60] flex flex-col p-6 md:p-12 overflow-hidden">
      <!-- Decorative Background Image -->
      <div class="absolute inset-0 z-0 opacity-100 pointer-events-none overflow-hidden">
        <img :src="dividerBg" class="w-full h-full object-cover opacity-10" alt="background pattern" />
      </div>

      <div class="flex justify-between items-center relative z-10 w-full mb-20">
        <div class="flex items-center gap-2">
          <img :src="logoImg" alt="JAARC Logo" class="h-8 md:h-10 object-contain" />
        </div>
        
        <div class="flex items-center gap-4">
          <button @click="scrollToSection('contact')" class="flex items-center gap-2 border border-gray-300 rounded-full pl-4 pr-1 py-1 bg-white hover:bg-gray-50 transition-all">
            <span class="text-[14px] font-medium text-gray-900">Let's Talk</span>
            <div class="w-7 h-7 bg-[#4ade80] rounded-full flex items-center justify-center text-white">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="3">
                <path stroke-linecap="round" stroke-linejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </div>
          </button>
          
          <div @click="toggleMenu" class="w-10 h-10 border border-gray-300 rounded-full flex items-center justify-center cursor-pointer bg-white hover:bg-gray-50 transition-all">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </div>
        </div>
      </div>

      <div class="flex flex-col gap-1 relative z-10 mt-10 w-full">
        <div v-for="link in ['HOME', 'SERVICES', 'ABOUT', 'PROJECT', 'CONTACT']" :key="link" 
             @click="scrollToSection(link.toLowerCase())"
             class="flex justify-between items-center cursor-pointer group py-3 border-b border-gray-100/50 w-full">
          <span class="text-gray-900 group-hover:text-green-500 transition-colors uppercase inline-block"
                style="font-family: 'Cakra'; font-weight: 400; font-style: normal; font-size: 29.66px; line-height: 44.49px; letter-spacing: 0%; text-align: center; vertical-align: middle;">
            {{ link }}
          </span>
          <div class="flex items-center justify-end w-10 md:w-10">
            <div class="w-10 h-10 border border-gray-300 rounded-full flex items-center justify-center text-gray-400 group-hover:text-green-500 group-hover:border-green-500 transition-all">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>
