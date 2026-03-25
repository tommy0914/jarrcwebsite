<script setup>
import twcImage from '../assets/twc.jpg'
import brandImage from '../assets/brand and digital.jpg'
import techsphereImage from '../assets/techsphere branding.jpg'
import jaarcImage from '../assets/jaa.jpg'

const projects = [
  {
    title: 'True Worshippers Church Website',
    image: twcImage,
    category: 'Web Development',
    span: 'md:col-span-2'
  },
  {
    title: 'Techsphere Branding',
    image: techsphereImage,
    category: 'Branding',
    span: 'md:col-span-1'
  },
  {
    title: 'Jaarc Website',
    image: jaarcImage,
    category: 'Web Development',
    span: 'md:col-span-1'
  },
  {
    title: 'Jaarc Branding',
    image: brandImage,
    category: 'Brand and digital identity',
    span: 'md:col-span-2'
  }
];
</script>

<template>
  <section id="project" class="py-24 px-6 md:px-12 bg-white">
    <div class="max-w-6xl mx-auto">
      <h2 class="text-[40px] md:text-[54px] font-bold mb-12 tracking-tight text-gray-900">Projects</h2>
      
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div v-for="project in projects" :key="project.title" 
             :class="['relative rounded-[15px] overflow-hidden group h-[300px] md:h-[400px] shadow-sm border border-gray-100']">
          <img :src="project.image" :alt="project.title" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
          
          <!-- Bottom gradient overlay - more solid green as per design -->
          <div class="absolute inset-0 bg-gradient-to-t from-[#0A6B46]/90 via-[#0A6B46]/20 to-transparent"></div>
          
          <!-- Text content -->
          <div class="absolute bottom-0 left-0 p-6 md:p-10 w-full flex justify-between items-end">
            <h3 class="text-white text-[20px] md:text-[28px] font-bold leading-tight max-w-[200px] md:max-w-[280px]">{{ project.title }}</h3>
            <p class="text-white/60 text-[10px] md:text-[12px] uppercase tracking-wider font-medium mb-1">{{ project.category }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
