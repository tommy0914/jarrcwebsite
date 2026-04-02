import React from 'react';

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

const Testimonials = () => {
  return (
    <section className="py-24 px-6 md:px-12 bg-[#F5F7F5]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-[32px] md:text-[40px] font-bold mb-16 text-center text-gray-900 leading-tight">
          What our Clients are <br /> saying about us!
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-[#EEF2EF] p-8 rounded-[25px] flex flex-col justify-between shadow-sm">
              <p className="text-gray-700 text-[14px] md:text-[15px] leading-relaxed mb-8 italic">"{t.text}"</p>
              <div className="flex items-center gap-3">
                <img src={t.avatar} className="w-10 h-10 rounded-full object-cover grayscale" alt="avatar" />
                <div>
                  <h4 className="font-bold text-[13px] text-gray-900">{t.author}</h4>
                  <div className="flex text-yellow-500 text-[10px]">
                    {[...Array(t.stars)].map((_, s) => (
                      <span key={s}>★</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* Pagination Dots */}
        <div className="flex justify-center mt-12 gap-1.5 items-center">
           <div className="w-1.5 h-1.5 rounded-full bg-gray-300"></div>
           <div className="w-6 h-6 rounded-full bg-black flex items-center justify-center text-white text-[10px]">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
           </div>
           <div className="w-1.5 h-1.5 rounded-full bg-gray-300"></div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
