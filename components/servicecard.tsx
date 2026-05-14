"use client"

import React, { useState } from 'react'
import Image from 'next/image'

const ServiceCard = ({
  image,
  name,
  content
}: {
  image: string
  name: string
  content: string
}) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`border-2 border-gray-200 rounded-xl p-4 h-60 flex flex-col justify-between shadow-sm transition-all duration-300  ${isHovered ? 'bg-gradient-to-b from-white via-[#f3f3f3] to-[#e2e2e2]' : ''}`}
    >
      {/* Top */}
      <div>
        <Image
          src={image}
          alt={name}
          height={40}
          width={40}
          className="object-contain"
        />
      </div>

      {/* Bottom */}
      <div>
        <div className="font-medium text-xl">
          {name}
        </div>

        {!isHovered ? (
          <div className="text-sm flex items-center gap-1">
            <span className="text-gray-500">
              Hover to learn more
            </span>

            <RightArrow />
          </div>
        ) : (
          <div className="text-sm text-gray-700 mt-2 transition-all duration-300">
            {content}
          </div>
        )}
      </div>
    </div>
  )
}

const RightArrow = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className="size-5"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
      />
    </svg>
  )
}

export default ServiceCard