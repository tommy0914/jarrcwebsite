import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Projects from './components/Projects'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'

function App() {
  return (
    <div id="app" className="relative overflow-x-hidden">
      {/* Animated Background Grid */}
      <div className="fixed inset-0 z-[-1] opacity-[0.03] pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4ade80_1px,transparent_1px),linear-gradient(to_bottom,#4ade80_1px,transparent_1px)] bg-[size:40px_40px] animate-[marquee_60s_linear_infinite]"></div>
      </div>
      
      <Navbar />
      <Hero />
      <Services />
      <Projects />
      <Testimonials />
      <Footer />
    </div>
  )
}

export default App
