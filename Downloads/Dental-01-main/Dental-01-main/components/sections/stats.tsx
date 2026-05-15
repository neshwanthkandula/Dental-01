import React from 'react'
import Image from 'next/image';

const Stats = () => {
  return (
    <div className='max-w-7xl mx-auto px-4 md:px-0'>

        {/* status */}
        <div className='py-10 md:py-12 px-4 md:px-10 text-center'>

            <div className='text-2xl sm:text-3xl md:text-4xl leading-snug md:leading-normal'>
                We believe exceptional dental care goes beyond just fixing teeth ✨🦷✨
                --it's about changing exactly how you feel the moment you sit in the chair.
            </div>

            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 py-10'>

                <div>
                    <div className='font-semibold text-4xl md:text-6xl'>
                        15+
                    </div>

                    <div className='text-gray-500 text-sm md:text-base mt-2'>
                        Years of Combined Experience
                    </div>
                </div>

                <div>
                    <div className='font-semibold text-4xl md:text-6xl'>
                        5,000+
                    </div>

                    <div className='text-gray-500 text-sm md:text-base mt-2'>
                        Smiles Transformed
                    </div>
                </div>

                <div>
                    <div className='font-semibold text-4xl md:text-6xl'>
                        100%
                    </div>

                    <div className='text-gray-500 text-sm md:text-base mt-2'>
                        Pain-Free Focus
                    </div>
                </div>

            </div>
        </div>

        {/* teamCard */}
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 justify-center items-center pb-10'>

            {/* Image */}
            <div className='flex justify-center'>
                <Image
                    src="/images/doctors/team.avif"
                    alt="Team"
                    className="object-contain rounded-2xl w-full h-auto max-w-[700px]"
                    height={500}
                    width={700}
                />
            </div>

            {/* Text */}
            <div className='text-gray-500 text-center lg:text-left text-base sm:text-lg md:text-xl px-2 md:px-0'>

                <div>
                    Our team is dedicated to providing an anxiety-free experience that prioritizes your comfort above all else. We seamlessly blend advanced technology with a compassionate,
                    human approach to ensure every visit is relaxing and completely pain-free.
                </div>

                <div className='pt-5'>
                    From routine preventive care to complete smile transformations, we guide you through a personalized treatment plan designed around your unique goals.
                    Our mission is to help you achieve lifelong dental health while entirely redefining what it means to visit the dentist.
                </div>

            </div>

        </div>

    </div>
  )
}

export default Stats