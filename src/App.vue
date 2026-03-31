<template>
  <div id="app" class="relative overflow-x-hidden">
    <!-- Animated Background Grid -->
    <div class="fixed inset-0 z-[-1] opacity-[0.03] pointer-events-none">
      <div class="absolute inset-0 bg-[linear-gradient(to_right,#4ade80_1px,transparent_1px),linear-gradient(to_bottom,#4ade80_1px,transparent_1px)] bg-[size:40px_40px] animate-[marquee_60s_linear_infinite]"></div>
    </div>
    
    <Navbar />
    <Hero />
    <Services />
    <Projects />
    <Testimonials />
    <Footer />
  </div>
</template>

<script setup>
import Navbar from './components/Navbar.vue'
import Hero from './components/Hero.vue'
import Services from './components/Services.vue'
import Projects from './components/Projects.vue'
import Testimonials from './components/Testimonials.vue'
import Footer from './components/Footer.vue'
</script>

<style scoped>
/* Global styles can go here if needed */
</style>
