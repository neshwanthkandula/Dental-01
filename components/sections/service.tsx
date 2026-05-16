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
        <div className=' py-20  max-w-7xl mx-auto'>
            <div className=' grid grid-cols-3 gap-10'>
                {services.map((service,index)=>(
                    <div key={index} >
                        <ServiceCard image={service.image} name={service.name} content={service.content}/>
                    </div>
                ))}
            </div>

            <div className='grid grid-cols-2 gap-6 mt-15'>
                <div className=' text-4xl'>Complete dental care for you & for your family 👨‍👩‍👧‍👦 🦷</div>
                <div className='text-gray-500'>We believe an informed patient is calm patient.Explore what we Offer -- no jargon,just plain language.</div>
            </div>
        </div>
    </div>
  )
}

export default Service