import React from 'react'
import Image from 'next/image';

const Stats = () => {
  return (
    <div className='max-w-7xl mx-auto'>

        {/* status */}
        <div className='py-12 px-10 text-center '>
            <div className='text-4xl'>We believe exceptional dental care goes beyond just fixing teeth ✨🦷✨
                --it's about changing exactly how you feel the moment you sit in the chair.
            </div>
            <div className='grid lg:grid-cols-3 py-10'>
                <div>
                    <div className='font-semibold text-6xl'>15+</div>
                    <div className='text-gray-500'>Years of Combined Experience</div>
                </div>

                <div>
                    <div className='font-semibold text-6xl'>5,000+</div>
                    <div className='text-gray-500'>Smiles Transformed</div>
                </div>

                <div>
                    <div className='font-semibold text-6xl'>100%</div>
                    <div className='text-gray-500'>Pain-Free Focus</div>
                </div>
            </div>
        </div>

        {/* teamCard */}
        <div className='grid grid-cols-2 gap-2 justify-center items-center pb-6'>
            <div >
                <Image
                    src="/images/doctors/team.avif"
                    alt="Team"
                    className="object-contain rounded-lg"
                    height={500}
                    width={700}
                />
            </div>
            
            <div className='text-gray-500 text-center text-xl'>
                <div>
                    Our team is dedeicated to providing an anxiety-free experience that prioritizes your comfort above all else.We seamlessly blend advanced technology with a compassionate,
                    human approach to ensure every visit is relaxing and completely pain-free.
                </div>

                <div className='pt-3'>
                    From routine preventive care to complete smile transformations,we guide you through a personalized treatment plan designed around your unique goals.
                    Our mission is to help you achieve lifelong dental health while entirely redefining what it means to visit the dentist.
                </div>
            </div>

        </div>

    </div>
  )
}

export default Stats