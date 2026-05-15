import React from 'react'
import ServiceCard from '../servicecard'

const services = [
  {
    name: 'Teeth Whitening',
    image: '/images/services/1.webp',
    content:
      'Brighten stained or dull teeth with safe professional whitening. Enjoy a cleaner, more confident smile.',
  },
  {
    name: 'Invisalign',
    image: '/images/services/2.webp',
    content:
      'Straighten your teeth comfortably with nearly invisible aligners. A modern alternative to braces.',
  },
  {
    name: 'Root Canal',
    image: '/images/services/3.webp',
    content:
      'Relieve tooth pain and save damaged teeth with gentle root canal treatment. Restore comfort and function.',
  },
  {
    name: 'Dental Veneers',
    image: '/images/services/4.webp',
    content:
      'Enhance the shape, color, and appearance of your smile. Veneers create a natural and polished look.',
  },
  {
    name: 'Deep Cleaning',
    image: '/images/services/5.webp',
    content:
      'Remove plaque and bacteria below the gumline for healthier gums. Ideal for preventing gum disease.',
  },
  {
    name: 'Sedation Dentistry',
    image: '/images/services/6.webp',
    content:
      'Feel relaxed and comfortable during your dental visit. Perfect for patients with dental anxiety.',
  }
]

const Service = () => {
  return (
    <div className='bg-white'>

        <div className='py-14 md:py-20 px-4 md:px-0 max-w-7xl mx-auto'>

            {/* Services Grid */}
            <div className='grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-10'>

                {services.map((service,index)=>(
                    <div key={index}>
                        <ServiceCard
                          image={service.image}
                          name={service.name}
                          content={service.content}
                        />
                    </div>
                ))}

            </div>

            {/* Bottom Content */}
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 mt-12 md:mt-16 items-center'>

                <div className='text-2xl sm:text-3xl md:text-4xl leading-snug text-center lg:text-left'>
                    Complete dental care for you & for your family 👨‍👩‍👧‍👦 🦷
                </div>

                <div className='text-gray-500 text-sm sm:text-base md:text-lg text-center lg:text-left leading-relaxed'>
                    We believe an informed patient is calm patient. Explore what we offer -- no jargon, just plain language.
                </div>

            </div>

        </div>

    </div>
  )
}

export default Service