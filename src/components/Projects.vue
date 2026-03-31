<script setup>
import twcImage from '../assets/twc.jpg'
import brandImage from '../assets/brand and digital.jpg'
import techsphereImage from '../assets/techsphere branding.jpg'
import jaarcImage from '../assets/jaa.jpg'
import zoeLogo from '../assets/zoeschoollogo.png'
import twcLogo from '../assets/twclogo.png'
import jaarcLogo from '../assets/logowithjarrc.png'
import rnaLogo from '../assets/revniyi logo.png'

const projects = [
  {
    title: 'True Worshippers Church Website',
    image: twcImage,
    category: 'Web Development',
    span: 'md:col-span-3',
    overlayColor: 'from-[#0A6B46]/80 via-[#0A6B46]/40 to-[#0A6B46]/20'
  },
  {
    title: 'Techsphere Branding',
    image: techsphereImage,
    category: 'Branding',
    span: 'md:col-span-2',
    overlayColor: 'from-[#0A6B46]/95 via-[#0A6B46]/40 to-black'
  },
  {
    title: 'Jaarc Website',
    image: jaarcImage,
    category: 'Web Development',
    span: 'md:col-span-2',
    overlayColor: 'from-[#0A6B46]/80 via-[#0A6B46]/40 to-[#0A6B46]/20'
  },
  {
    title: 'Jaarc Branding',
    image: brandImage,
    category: 'Brand and digital identity',
    span: 'md:col-span-3',
    overlayColor: 'from-[#0A6B46]/80 via-[#0A6B46]/40 to-[#0A6B46]/20'
  }
];

const partners = [
  { name: 'Zoe Schools', logo: zoeLogo },
  { name: 'TWC', logo: twcLogo },
  { name: 'JAARC', logo: jaarcLogo },
  { name: 'RNA', logo: rnaLogo }
];
</script>

<template>
  <section id="project" class="py-24 px-6 md:px-12 bg-white">
    <div class="max-w-6xl mx-auto">
      <h2 class="text-[32px] md:text-[40px] font-bold mb-10 tracking-tight text-gray-900">Projects</h2>
      
      <div class="grid grid-cols-1 md:grid-cols-5 gap-4 md:gap-4 mb-20 md:mb-32">
        <div v-for="project in projects" :key="project.title" 
             :class="[project.span, 'relative rounded-[8px] md:rounded-[12px] overflow-hidden group h-[280px] md:h-[350px] shadow-sm']">
          <img :src="project.image" :alt="project.title" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
          
          <!-- Gradient overlay matching design colors -->
          <div :class="['absolute inset-0 bg-gradient-to-t', project.overlayColor]"></div>
          
          <!-- Text content -->
          <div class="absolute bottom-0 left-0 p-6 md:p-8 w-full flex justify-between items-end">
            <h3 class="text-white text-[18px] md:text-[22px] font-bold leading-tight max-w-[180px] md:max-w-[220px]">{{ project.title }}</h3>
            <p class="text-white/60 text-[9px] md:text-[10px] uppercase tracking-wider font-medium mb-1 whitespace-nowrap">{{ project.category }}</p>
          </div>
        </div>
      </div>

      <!-- Partners Section Integrated - Infinite Marquee -->
      <div class="relative overflow-hidden w-full mt-20">
        <div class="flex animate-marquee whitespace-nowrap gap-12 md:gap-24 items-center">
          <!-- First set of logos -->
          <img v-for="partner in partners" :key="partner.name" :src="partner.logo" :alt="partner.name" 
               :class="[
                 partner.name === 'RNA' ? 'h-16 md:h-20 scale-125' : 'h-10 md:h-12',
                 'object-contain grayscale contrast-125 hover:grayscale-0 transition-all duration-300'
               ]" />
          <!-- Second set (duplicate for seamless loop) -->
          <img v-for="partner in partners" :key="partner.name + '-dup'" :src="partner.logo" :alt="partner.name" 
               :class="[
                 partner.name === 'RNA' ? 'h-16 md:h-20 scale-125' : 'h-10 md:h-12',
                 'object-contain grayscale contrast-125 hover:grayscale-0 transition-all duration-300'
               ]" />
          <!-- Third set for safety on larger screens -->
          <img v-for="partner in partners" :key="partner.name + '-dup2'" :src="partner.logo" :alt="partner.name" 
               :class="[
                 partner.name === 'RNA' ? 'h-16 md:h-20 scale-125' : 'h-10 md:h-12',
                 'object-contain grayscale contrast-125 hover:grayscale-0 transition-all duration-300'
               ]" />
        </div>
      </div>
    </div>
  </section>
</template>
