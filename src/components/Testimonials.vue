<script setup>
const testimonials = [
  {
    text: 'Techsphere delivered a professional website that greatly improved our organization\'s online visibility. Their team was responsive, reliable, and easy to work with.',
    author: 'Ashley Cooper',
    stars: 5,
    avatar: 'https://i.pravatar.cc/150?u=ashley'
  },
  {
    text: 'Working with Techsphere helped us modernize our digital presence. The process was smooth and the final result exceeded our expectations.',
    author: 'Anton de Swardt',
    stars: 5,
    avatar: 'https://i.pravatar.cc/150?u=anton'
  },
  {
    text: 'Their expertise in web development and branding helped our organization present a more professional image online.',
    author: 'Anton de Swardt',
    stars: 5,
    avatar: 'https://i.pravatar.cc/150?u=anton2'
  }
];
</script>

<template>
  <section class="py-24 px-12 bg-[#f8f9f8]">
    <h2 class="text-3xl font-extrabold mb-16 text-center text-gray-900 uppercase tracking-tight">What our Clients are <br /> saying about us!</h2>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
      <div v-for="(t, i) in testimonials" :key="i" class="bg-white p-10 rounded-[40px] shadow-sm flex flex-col justify-between">
        <p class="text-gray-600 text-[15px] leading-relaxed mb-10 italic">"{{ t.text }}"</p>
        <div class="flex items-center gap-4">
          <img :src="t.avatar" class="w-12 h-12 rounded-full object-cover" alt="avatar" />
          <div>
            <h4 class="font-bold text-sm text-gray-900">{{ t.author }}</h4>
            <div class="flex text-yellow-400 text-xs">
              <span v-for="s in t.stars" :key="s">★</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="flex justify-center mt-12 gap-2">
       <div class="w-2 h-2 rounded-full bg-gray-300"></div>
       <div class="w-6 h-2 rounded-full bg-black"></div>
       <div class="w-2 h-2 rounded-full bg-gray-300"></div>
    </div>
  </section>
</template>
