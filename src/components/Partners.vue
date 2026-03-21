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
      <div v-for="partner in partners" :key="partner.name" class="p-4 bg-gray-50 rounded-xl border border-gray-100 flex items-center justify-center hover:bg-white hover:shadow-md transition-all duration-300">
        <img :src="partner.logo" :alt="partner.name" class="h-10 md:h-12 w-auto object-contain" />
      </div>
    </div>
  </section>
</template>
