import React from 'react'
import Image from 'next/image'

const patients = [
  {
    name: "John Doe",
    image: "/images/testimonials/john.webp",
    comment:
      "I had a great experience at the dental studio. The staff was friendly and the service was excellent.",
    stars: 5,
    style:
      "bg-gradient-to-b from-[#f5f5f5] via-[#e5e5e5] to-[#d4d4d4]",
  },
  {
    name: "Lara Smith",
    image: "/images/testimonials/lara.webp",
    comment:
      "The dental studio exceeded my expectations. The dentists were knowledgeable and the facilities were top-notch.",
    stars: 4,
    style:
      "bg-gradient-to-b from-[#f0f0f0] via-[#dddddd] to-[#c9c9c9]",
  },
  {
    name: "Sreya Patel",
    image: "/images/testimonials/sreya.webp",
    comment:
      "I had a wonderful experience at the dental studio. The staff was attentive and the treatment was exceptional.",
    stars: 5,
    style:
      "bg-gradient-to-b from-white via-[#f3f3f3] to-[#e2e2e2]",
  },
  {
    name: "Michael Brown",
    image: "/images/testimonials/michael.webp",
    comment:
      "The dental studio provided excellent care and service. The dentists were skilled and the staff was friendly.",
    stars: 4,
    style:
      "bg-gradient-to-b from-[#f5f5f5] via-[#e5e5e5] to-[#d4d4d4]",
  },
]

const TestimonialCard = () => {
  return (
    <div className="flex flex-wrap gap-6 justify-center">
      {patients.map((patient, index) => (
        <div
          key={index}
          className={`w-72 rounded-3xl ${patient.style} border border-gray-200 shadow-sm p-6 flex flex-col items-center text-center transition-all duration-300 hover:scale-105 hover:shadow-2xl`}
        >
          {/* Profile Image */}
          <div className="relative">
            <Image
              src={patient.image}
              alt={patient.name}
              width={90}
              height={90}
              className="rounded-full object-cover border-4 border-white shadow-md"
            />
          </div>

          {/* Review */}
          <p className="text-sm text-gray-700 leading-relaxed mt-4">
            {patient.comment}
          </p>

          {/* Stars */}
          <div className="flex items-center gap-1 mt-4">
            {[...Array(patient.stars)].map((_, starIndex) => (
              <Star key={starIndex} />
            ))}
          </div>

          {/* Name */}
          <h3 className="mt-3 text-lg font-semibold text-gray-900">
            {patient.name}
          </h3>

          {/* Role */}
          <span className="text-sm text-gray-500">
            Happy Client
          </span>
        </div>
      ))}
    </div>
  )
}

const Star = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className="w-5 h-5"
    >
      <defs>
        <linearGradient id="glassGold" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FFF8DC" />
          <stop offset="45%" stopColor="#FFD54F" />
          <stop offset="100%" stopColor="#F57F17" />
        </linearGradient>
      </defs>

      <path
        fill="url(#glassGold)"
        stroke="#E6A700"
        strokeWidth="0.7"
        d="M12 3l2.8 5.8 6.4.9-4.6 4.5 1.1 6.4L12 17.6 6.3 20.6l1.1-6.4-4.6-4.5 6.4-.9L12 3z"
      />
    </svg>
  )
}

export default TestimonialCard