<script setup>
const services = [
  { 
    title: 'Website Development', 
    color: 'bg-white', 
    text: 'text-green-600', 
    icon: '<polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" />'
  },
  { 
    title: 'Business & School Portal', 
    color: 'bg-[#4ade80]', 
    text: 'text-white', 
    icon: '<line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" /><line x1="6" y1="20" x2="6" y2="14" />'
  },
  { 
    title: 'Users Interface Design', 
    color: 'bg-[#064e3b]', 
    text: 'text-white', 
    icon: '<rect width="14" height="20" x="5" y="2" rx="2" ry="2" /><path d="M12 18h.01" />'
  },
  { 
    title: 'Brand and Digital Identity', 
    color: 'bg-[#f0fdf4]', 
    text: 'text-[#064e3b]', 
    icon: '<path d="m12 19 7-7 3 3-7 7-3-3z" /><path d="m18 13-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" /><path d="m2 2 5 5" /><path d="m8.5 8.5 1 1" />'
  },
  { 
    title: 'Web Maintenance And Support', 
    color: 'bg-[#4ade80]', 
    text: 'text-[#064e3b]', 
    icon: '<rect width="18" height="18" x="3" y="3" rx="2" /><path d="M3 9h18" /><path d="M9 21V9" />'
  },
  { 
    title: 'Digital Consulting', 
    color: 'bg-white', 
    text: 'text-green-600', 
    icon: '<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /><path d="M13 8H7" /><path d="M17 12H7" />'
  },
  { 
    title: 'Content Creation', 
    color: 'bg-white', 
    text: 'text-green-500', 
    icon: '<path d="M4 11v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8H4Z" /><path d="m4 11 16-3V5a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v6Z" /><path d="m9 21 3-10" /><path d="m15 21 3-10" />'
  },
  { 
    title: 'Brand Visibility', 
    color: 'bg-[#4ade80]', 
    text: 'text-[#064e3b]', 
    icon: '<path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" /><circle cx="12" cy="12" r="3" />'
  }
];
</script>

<template>
  <section class="py-16 md:py-24 px-6 md:px-12 bg-white">
    <div class="max-w-6xl mx-auto">
      <h2 class="text-[40px] md:text-[54px] font-bold mb-10 md:mb-16 tracking-tight text-gray-900">
        Servic<span class="bg-[#4ade80] rounded-[10px] md:rounded-[14px] pl-1 pr-2 md:pr-3 py-0.5 md:py-1 -ml-1">es</span>
      </h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 md:gap-x-8 md:gap-y-10">
        <div v-for="service in services" :key="service.title" 
             :class="[service.color, 'p-8 md:p-12 rounded-[30px] md:rounded-[45px] border border-gray-100 flex flex-col justify-between h-[300px] md:h-[360px] relative overflow-hidden group shadow-sm']">
          <div class="relative z-10">
            <div class="flex flex-col gap-1 items-start">
              <h3 v-for="word in service.title.split(' ')" :key="word" 
                  :class="[
                    service.color === 'bg-white' ? 'bg-[#4ade80] text-white' : 'bg-white text-gray-900',
                    'font-[\'Poppins\'] font-medium text-[20px] md:text-[26.96px] leading-[100%] px-2 py-1 rounded-[6px] md:rounded-[8px] transition-all'
                  ]">
                {{ word }}
              </h3>
            </div>
            
            <button :class="[service.text, 'mt-8 md:mt-12 flex items-center gap-2 text-xs md:text-sm font-semibold']">
              <span class="w-7 h-7 md:w-8 md:h-8 rounded-full border border-current flex items-center justify-center group-hover:bg-current group-hover:text-white transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-3 h-3 md:w-4 md:h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </span>
              Learn more
            </button>
          </div>
          
          <!-- Large stroke-based icon -->
          <div :class="[service.text, 'absolute right-[-10px] md:right-[-20px] bottom-[-10px] md:bottom-[-20px] opacity-100 transition-transform duration-500 group-hover:scale-105']">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-48 h-48 md:w-80 md:h-80" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" v-html="service.icon">
              </svg>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
