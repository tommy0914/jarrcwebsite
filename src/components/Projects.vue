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
      <h2 class="text-[54px] font-bold mb-12 tracking-tight text-gray-900">Projects</h2>
      
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div v-for="project in projects" :key="project.title" 
             :class="[project.span, 'relative rounded-[20px] overflow-hidden group h-[400px] shadow-lg']">
          <img :src="project.image" :alt="project.title" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
          
          <!-- Bottom gradient overlay -->
          <div class="absolute inset-0 bg-gradient-to-t from-green-900/90 via-green-900/40 to-transparent opacity-80"></div>
          
          <!-- Text content -->
          <div class="absolute bottom-0 left-0 p-8 w-full">
            <h3 class="text-white text-2xl font-bold leading-tight max-w-[250px] mb-2">{{ project.title }}</h3>
            <p class="text-green-300 text-xs uppercase tracking-widest font-medium opacity-60">{{ project.category }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
