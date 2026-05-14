"use client"

import React from 'react'
import TestimonialCard from '../TestimonialCard'
import Twemoji from "react-twemoji";

const Testimonials = () => {
  return (
    <div className='p-4 max-w-7xl mx-auto'>
        <div className='pt-20'>
            <Twemoji
              options={{
                folder: "svg",
                ext: ".svg",
              }}
            >
              <div className='flex items-center justify-center gap-3 text-4xl text-center [&_img]:w-8 [&_img]:h-8'>
                <span>Don't just take our word for it!</span>

                <span className='flex items-center gap-1'>
                  👀 🗣️
                </span>
              </div>
            </Twemoji>
            <div className='text-gray-500 text-sm text-center py-6 max-w-md mx-auto' >scroll through real experiience from patients who finally a dental studio they love.</div>
            <div className='py-10'>
                <TestimonialCard/>
            </div>
        </div>
    </div>
  )
}

export default Testimonials