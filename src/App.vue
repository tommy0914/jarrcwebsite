<template>
  <div id="app">
    <Navbar />
    <Hero />
    <Services />
    <Projects />
    <Partners />
    <Testimonials />
    <Footer />
  </div>
</template>

<script setup>
import Navbar from './components/Navbar.vue'
import Hero from './components/Hero.vue'
import Partners from './components/Partners.vue'
import Services from './components/Services.vue'
import Projects from './components/Projects.vue'
import Testimonials from './components/Testimonials.vue'
import Footer from './components/Footer.vue'
</script>

<style scoped>
/* Global styles can go here if needed */
</style>
