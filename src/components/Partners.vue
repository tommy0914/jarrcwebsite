<script setup>
import zoeLogo from '../assets/zoeschoollogo.png'
import twcLogo from '../assets/twclogo.png'
import jaarcLogo from '../assets/logowithjarrc.png'
import rnaLogo from '../assets/revniyi logo.png'

const partners = [
  { name: 'Zoe Schools', logo: zoeLogo },
  { name: 'TWC', logo: twcLogo },
  { name: 'JAARC', logo: jaarcLogo },
  { name: 'RNA', logo: rnaLogo }
]
</script>

<template>
  <section class="py-12 md:py-20 px-6 md:px-12 bg-white border-t border-gray-100">
    <div class="max-w-6xl mx-auto flex flex-wrap justify-center md:justify-between items-center gap-12 md:gap-8">
      <img v-for="partner in partners" :key="partner.name" :src="partner.logo" :alt="partner.name" class="h-12 md:h-16 object-contain hover:scale-110 transition-all duration-300" />
    </div>
  </section>
</template>
