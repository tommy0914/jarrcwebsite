<script setup>
const scrollToSection = (id) => {
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
      <img src="/src/assets/logofirst.png" alt="JAARC Logo" class="h-8 md:h-10 object-contain" />
    </div>
    
    <div class="hidden md:flex gap-10 text-[18px] font-normal leading-[27px] tracking-normal text-gray-700 font-['Inter']">
      <a href="#" @click.prevent="scrollToSection('home')" class="hover:text-green-500 transition-colors">Home</a>
      <a href="#" @click.prevent="scrollToSection('about')" class="hover:text-green-500 transition-colors">About</a>
      <a href="#" @click.prevent="scrollToSection('services')" class="hover:text-green-500 transition-colors">Services</a>
      <a href="#" @click.prevent="scrollToSection('project')" class="hover:text-green-500 transition-colors">Project</a>
      <a href="#" @click.prevent="scrollToSection('contact')" class="hover:text-green-500 transition-colors">Contact</a>
    </div>

    <div class="flex items-center gap-4">
      <div class="w-10 h-10 border border-gray-300 rounded-full flex items-center justify-center cursor-pointer hover:bg-white transition-all shadow-sm">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </div>
    </div>
  </nav>
</template>
