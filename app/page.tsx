import Navbar from "@/components/layout/navbar";
import Hero from "@/components/sections/Hero";
import Service from "@/components/sections/service";
import Stats from "@/components/sections/stats";
import Testimonials from "@/components/sections/testimonial";
import Footer from "@/components/sections/Footer";

import React from 'react'
import MapSection from "@/components/sections/Map";

const page = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Stats/>
      <Service/>
      <Testimonials/>
      <MapSection/>
      <Footer/>
    </div>
  )
}

export default page