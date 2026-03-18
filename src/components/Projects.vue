<script setup>
const projects = [
  {
    title: 'True Worshippers Church Website',
    category: 'Web Development',
    image: '/church-laptop.jpg',
    span: 'md:col-span-1 md:row-span-1',
    bgColor: 'bg-[#064e3b]/80'
  },
  {
    title: 'Techsphere Branding',
    category: 'Branding',
    image: '/techsphere-abstract.jpg',
    span: 'md:col-span-1 md:row-span-1',
    bgColor: 'bg-black/90'
  },
  {
    title: 'Jaarc Website',
    category: 'Web Development',
    image: '/jaarc-web.jpg',
    span: 'md:col-span-1 md:row-span-1',
    bgColor: 'bg-[#10b981]/60'
  },
  {
    title: 'Jaarc Branding',
    category: 'Brand and Digital Identity',
    image: '/jaarc-brand.jpg',
    span: 'md:col-span-1 md:row-span-1',
    bgColor: 'bg-[#064e3b]/90'
  }
];
</script>

<template>
  <section class="py-20 px-12 bg-white">
    <div class="mb-12">
      <h2 class="text-5xl font-extrabold text-black uppercase tracking-tight">Projects</h2>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div 
        v-for="(project, index) in projects" 
        :key="index"
        :class="[project.span, 'group relative overflow-hidden rounded-sm cursor-pointer h-[450px]']"
      >
        <img 
          :src="project.image" 
          :alt="project.title"
          class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />

        <div 
          :class="[project.bgColor, 'absolute inset-0 opacity-80 group-hover:opacity-95 transition-opacity duration-500']"
        ></div>

        <div class="absolute inset-0 p-10 flex flex-col justify-end text-white">
          <h3 class="text-3xl font-extrabold leading-tight max-w-[250px] mb-2 transform transition-transform duration-500 group-hover:-translate-y-2">
            {{ project.title }}
          </h3>
          <p class="text-sm font-medium opacity-60 group-hover:opacity-100 transition-all duration-500">
            {{ project.category }}
          </p>
        </div>
      </div>
    </div>

    <div class="mt-32 flex flex-wrap justify-between items-center opacity-80 grayscale gap-10">
       <div class="flex flex-col items-center font-bold text-xl"><span class="text-red-600">ZOE</span> SCHOOLS</div>
       <div class="w-12 h-12 border-2 border-black rounded-full flex items-center justify-center font-bold italic">ttw</div>
       <div class="flex items-center gap-1 font-black text-3xl text-green-700 tracking-tighter uppercase">
         <div class="w-6 h-6 bg-green-600"></div>
         JAARC
       </div>
       <div class="font-serif italic text-3xl font-bold">RNA</div>
    </div>
  </section>
</template>
