<script setup>
import webDevIcon from '../assets/webdevelopmwnticon.png'
import businessIcon from '../assets/businesicon.png'
import uiIcon from '../assets/userinterfaceicon.png'
import brandIcon from '../assets/brandicon.png'
import maintenanceIcon from '../assets/webmaintenaceicon.png'
import visibilityIcon from '../assets/brandvisibiltyicon.png'
import contentIcon from '../assets/contenticon.png'

const services = [
  { 
    title: 'Website Development', 
    color: 'bg-white', 
    text: 'text-green-600', 
    themeColor: '#4AE17A',
    icon: webDevIcon,
    labelBg: 'bg-[#4AE17A]',
    labelTextColor: 'text-white'
  },
  { 
    title: 'Business & School Portal', 
    color: 'bg-[#4AE17A]', 
    text: 'text-white', 
    themeColor: '#4AE17A',
    icon: businessIcon,
    labelBg: 'bg-white',
    labelTextColor: 'text-gray-900'
  },
  { 
    title: 'Users Interface Design', 
    color: 'bg-[#0A6B46]', 
    text: 'text-white', 
    themeColor: '#0A6B46',
    icon: uiIcon,
    labelBg: 'bg-white',
    labelTextColor: 'text-gray-900'
  },
  { 
    title: 'Brand and Digital Identity', 
    color: 'bg-[#f0fdf4]', 
    text: 'text-[#064e3b]', 
    themeColor: '#4ade80',
    icon: brandIcon,
    labelBg: 'bg-[#4AE17A]',
    labelTextColor: 'text-white'
  },
  { 
    title: 'Web Maintenance And Support', 
    color: 'bg-[#4AE17A]', 
    text: 'text-white', 
    themeColor: '#4AE17A',
    icon: maintenanceIcon,
    labelBg: 'bg-white',
    labelTextColor: 'text-gray-900'
  },
  { 
    title: 'Digital Consulting', 
    color: 'bg-white', 
    text: 'text-green-600', 
    themeColor: '#4AE17A',
    icon: businessIcon, // Using business/chat-like icon
    labelBg: 'bg-[#4AE17A]',
    labelTextColor: 'text-white'
  },
  { 
    title: 'Content Creation', 
    color: 'bg-white', 
    text: 'text-green-600', 
    themeColor: '#4AE17A',
    icon: contentIcon,
    labelBg: 'bg-[#4AE17A]',
    labelTextColor: 'text-white'
  },
  { 
    title: 'Brand Visibility', 
    color: 'bg-[#4AE17A]', 
    text: 'text-white', 
    themeColor: '#4AE17A',
    icon: visibilityIcon,
    labelBg: 'bg-white',
    labelTextColor: 'text-gray-900'
  }
];
</script>

<template>
  <section id="services" class="py-16 md:py-24 px-6 md:px-12 bg-white">
    <div class="max-w-6xl mx-auto">
      <h2 class="text-[40px] md:text-[54px] font-bold mb-10 md:mb-16 tracking-tight text-gray-900 flex items-center gap-2">
        Servic<span class="bg-[#4AE17A] text-gray-900 rounded-[10px] md:rounded-[14px] px-2 py-0.5 md:py-1 -ml-1">es</span>
      </h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 md:gap-x-8 md:gap-y-10">
        <div v-for="(service, index) in services" :key="service.title" 
             :class="[service.color, 'p-8 md:p-12 rounded-[30px] md:rounded-[45px] flex flex-col justify-between h-[300px] md:h-[360px] relative overflow-hidden group transition-all duration-300 hover:-translate-y-1 animate-fade-in-up shadow-sm']"
             :style="{ 
               border: `0.9px solid ${service.themeColor}`, 
               boxShadow: `0px 4.49px 0px 0px ${service.themeColor}`,
               animationDelay: `${index * 0.1}s`
             }">
          <div class="relative z-10">
            <div class="flex flex-col gap-0 items-start">
              <h3 :class="[
                    service.labelBg, service.labelTextColor,
                    'font-[\'Poppins\'] font-medium text-[20px] md:text-[26.96px] leading-[100%] px-2 py-1 rounded-[6px] md:rounded-[8px] transition-all tracking-normal'
                  ]">
                {{ service.title.split(' ').slice(0, service.title.split(' ').length > 2 ? 2 : 1).join(' ') }}
              </h3>
              <h3 v-if="service.title.split(' ').length > 1"
                  :class="[
                    service.labelBg, service.labelTextColor,
                    'font-[\'Poppins\'] font-medium text-[20px] md:text-[26.96px] leading-[100%] px-2 py-1 rounded-[6px] md:rounded-[8px] transition-all tracking-normal'
                  ]">
                {{ service.title.split(' ').slice(service.title.split(' ').length > 2 ? 2 : 1).join(' ') }}
              </h3>
            </div>
          </div>
          
          <div class="flex items-center gap-3 relative z-10">
            <div :class="[service.color === 'bg-[#0A6B46]' || service.color === 'bg-[#4AE17A]' ? 'bg-white text-gray-900' : 'bg-[#0A6B46] text-white', 'w-7 h-7 md:w-8 md:h-8 rounded-full flex items-center justify-center transition-all']">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-3 h-3 md:w-4 md:h-4 -rotate-45" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </div>
            <span :class="[service.color === 'bg-white' || service.color === 'bg-[#f0fdf4]' ? 'text-gray-900' : 'text-white', 'text-xs md:text-sm font-semibold']">Learn more</span>
          </div>
          
          <!-- Large PNG icon -->
          <div class="absolute right-[-10px] md:right-[-20px] bottom-[-10px] md:bottom-[-20px] transition-transform duration-500 group-hover:scale-105">
              <img :src="service.icon" class="w-40 h-40 md:w-72 md:h-72 object-contain pointer-events-none" :alt="service.title" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>