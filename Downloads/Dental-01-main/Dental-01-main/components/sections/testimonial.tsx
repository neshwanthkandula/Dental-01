"use client"

import React, { useState } from 'react'
import Image from "next/image"
import Twemoji from "react-twemoji";

const testimonials = [
  {
    image: "/images/testimonials/sreya.webp",
    review:
      "I had a great experience at the dental studio. The staff was friendly and the service was excellent.",
    name: "John Doe",
    role: "Happy Client",
  },

  {
    image: "/images/testimonials/lara.webp",
    review:
      "The dental studio exceeded my expectations. The dentists were knowledgeable and the facilities were top-notch.",
    name: "Lara Smith",
    role: "Happy Client",
  },

  {
    image: "/images/testimonials/michael.webp",
    review:
      "Wonderful atmosphere and painless treatment. Highly recommended dental care experience.",
    name: "Michael Brown",
    role: "Happy Client",
  },
];

const Testimonials = () => {

  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const nextSlide = () => {
    setCurrent((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <div className='p-4 md:p-6 max-w-7xl mx-auto'>

      <div className='pt-14 md:pt-20'>

        <Twemoji
          options={{
            folder: "svg",
            ext: ".svg",
          }}
        >
          <div className='flex flex-col sm:flex-row items-center justify-center gap-3 text-2xl sm:text-3xl md:text-4xl text-center [&_img]:w-6 [&_img]:h-6 md:[&_img]:w-8 md:[&_img]:h-8'>

            <span>Don't just take our word for it!</span>

            <span className='flex items-center gap-1'>
              👀 🗣️
            </span>

          </div>
        </Twemoji>

        <div className='text-gray-500 text-sm md:text-base text-center py-4 md:py-6 max-w-md mx-auto'>
          Scroll through real experiences from patients who finally found a dental studio they love.
        </div>

        {/* Mobile View */}
        <div className='md:hidden flex justify-center'>

          <div className='group relative bg-white rounded-[32px] p-8 text-center max-w-sm w-full shadow-[0_10px_40px_rgba(0,0,0,0.08)] border border-white/40 overflow-hidden backdrop-blur-xl'>

            {/* Premium Glow Effects */}
            <div className='absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-cyan-100 to-blue-200 rounded-full blur-3xl opacity-40'></div>

            <div className='absolute bottom-0 left-0 w-40 h-40 bg-gradient-to-tr from-pink-100 to-purple-200 rounded-full blur-3xl opacity-40'></div>

            {/* Quote Icon */}
            <div className='text-6xl text-gray-200 absolute top-6 left-6 font-serif'>
              “
            </div>

           <button
  onClick={prevSlide}
  className='absolute left-2 top-1/2 -translate-y-1/2 z-50
  text-gray-700 text-3xl font-light
  transition-all duration-300
  hover:scale-125 hover:text-black'
>
  ←
</button>  



<button
  onClick={nextSlide}
  className='absolute right-2 top-1/2 -translate-y-1/2 z-50
  text-gray-700 text-3xl font-light
  transition-all duration-300
  hover:scale-125 hover:text-black'
>
  →
</button>

            {/* Profile Image */}
            <div className='relative z-10'>
              <Image
                src={testimonials[current].image}
                alt={testimonials[current].name}
                width={90}
                height={90}
                className='mx-auto rounded-full mb-6 border-4 border-white shadow-2xl ring-4 ring-white/60'
              />
            </div>

            {/* Review */}
            <p className='text-gray-600 leading-relaxed relative z-10 text-[15px]'>
              {testimonials[current].review}
            </p>

            {/* Stars */}
            <div className='text-yellow-400 text-2xl mt-6 relative z-10 tracking-wider drop-shadow-sm'>
              ★★★★★
            </div>

            {/* Badge */}
            <div className='inline-block mt-4 px-4 py-1 rounded-full bg-gradient-to-r from-blue-50 to-purple-50 text-xs font-medium text-gray-600 border border-white shadow-sm relative z-10'>
              Verified Patient
            </div>

            {/* Name */}
            <h3 className='text-2xl font-bold mt-4 relative z-10'>
              {testimonials[current].name}
            </h3>

            {/* Role */}
            <p className='text-gray-500 mt-1 relative z-10'>
              {testimonials[current].role}
            </p>

            {/* Premium Progress Pills */}
<div className='flex items-center justify-center gap-2 mt-6 relative z-10'>

  {testimonials.map((_, index) => (

    <div
      key={index}
      className={`h-2 rounded-full transition-all duration-500 ${
        current === index
          ? "w-10 bg-gradient-to-r from-cyan-400 to-blue-500"
          : "w-2 bg-gray-300"
      }`}
    />

  ))}

</div>

          </div>

        </div>

        {/* Desktop View */}
        <div className='hidden md:grid grid-cols-3 gap-6 py-6'>

          {testimonials.map((item, index) => (
            <div
              key={index}
              className='group relative bg-white rounded-[32px] p-8 text-center shadow-[0_10px_40px_rgba(0,0,0,0.08)] border border-white/40 overflow-hidden transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_20px_60px_rgba(0,0,0,0.15)] backdrop-blur-xl'
            >

              {/* Premium Glow Effects */}
              <div className='absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-cyan-100 to-blue-200 rounded-full blur-3xl opacity-40 group-hover:scale-125 transition duration-700'></div>

              <div className='absolute bottom-0 left-0 w-40 h-40 bg-gradient-to-tr from-pink-100 to-purple-200 rounded-full blur-3xl opacity-40 group-hover:scale-125 transition duration-700'></div>

              {/* Quote Icon */}
              <div className='text-6xl text-gray-200 absolute top-6 left-6 font-serif'>
                “
              </div>

              {/* Profile */}
              <div className='relative z-10'>
                <Image
                  src={item.image}
                  alt={item.name}
                  width={90}
                  height={90}
                  className='mx-auto rounded-full mb-6 border-4 border-white shadow-2xl ring-4 ring-white/60 group-hover:scale-105 transition duration-500'
                />
              </div>

              {/* Review */}
              <p className='text-gray-600 leading-relaxed relative z-10 text-[15px] md:text-base'>
                {item.review}
              </p>

              {/* Stars */}
              <div className='text-yellow-400 text-2xl mt-6 relative z-10 tracking-wider drop-shadow-sm'>
                ★★★★★
              </div>

              {/* Badge */}
              <div className='inline-block mt-4 px-4 py-1 rounded-full bg-gradient-to-r from-blue-50 to-purple-50 text-xs font-medium text-gray-600 border border-white shadow-sm relative z-10'>
                Verified Patient
              </div>

              {/* Name */}
              <h3 className='text-2xl font-bold mt-4 relative z-10'>
                {item.name}
              </h3>

              {/* Role */}
              <p className='text-gray-500 mt-1 relative z-10'>
                {item.role}
              </p>

            </div>
          ))}

        </div>

      </div>

    </div>
  )
}

export default Testimonials