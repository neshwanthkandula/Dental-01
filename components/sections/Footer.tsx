"use client"

import React from "react"
import {
  Mail,
  Phone,
  MapPin,
  Clock3,
  ArrowUpRight,
} from "lucide-react"

const Footer = () => {
  return (
    <div className="pt-20  max-w-10xl mx-auto">
        <footer className="bg-[#2f2f2f] text-white px-6 py-16">
        <div className="max-w-7xl mx-auto">
            
            {/* Newsletter */}
            <div className="flex flex-col items-center justify-center text-center">
            <h2 className="text-3xl font-semibold">
                Join the Pure Smile Club.
            </h2>

            <p className="text-gray-300 text-sm mt-2">
                Monthly tips and exclusive offers.
            </p>

            <div className="mt-6 flex items-center bg-white rounded-xl overflow-hidden w-full max-w-md shadow-lg">
                <input
                type="email"
                placeholder="hello@example.com"
                className="flex-1 px-4 py-4 text-black outline-none text-sm"
                />

                <button className="bg-[#ece8e5] text-gray-700 px-6 py-3 rounded-lg mr-2 text-sm hover:bg-[#ded8d4] transition">
                    Subscribe
                </button>
            </div>
            </div>

            {/* Main Footer Card */}
            <div className="bg-[#f4f4f4] text-black rounded-2xl mt-16 p-10">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
                
                {/* Contact */}
                <div>
                <h3 className="font-semibold text-xl mb-6">
                    Contact
                </h3>

                <div className="space-y-5 text-sm text-gray-700">
                    
                    <div className="flex gap-3">
                    <MapPin className="w-4 h-4 mt-1 shrink-0" />

                    <p>
                        Suite 4, The Wellington Building
                        <br />
                        124 Harley Street, Marylebone
                        <br />
                        London, UK
                    </p>
                    </div>

                    <div className="flex items-center gap-3">
                    <Phone className="w-4 h-4" />

                    <p>+44 20 7123 4567</p>
                    </div>

                    <div className="flex items-center gap-3">
                    <Mail className="w-4 h-4" />

                    <p>puredentalcare@gmail.com</p>
                    </div>
                </div>
                </div>

                {/* Socials */}
                <div className="space-y-4 text-sm text-gray-700 md:pt-14">
                {["Facebook", "Instagram", "WhatsApp"].map((item) => (
                    <div
                    key={item}
                    className="flex items-center justify-between hover:text-black cursor-pointer transition"
                    >
                    <span>{item}</span>

                    <ArrowUpRight className="w-4 h-4" />
                    </div>
                ))}
                </div>

                {/* Timings */}
                <div className="md:pt-14">
                <div className="space-y-4 text-sm text-gray-700">
                    
                    <div className="flex gap-3">
                    <Clock3 className="w-4 h-4 mt-1 shrink-0" />

                    <div>
                        <div className="flex gap-6">
                        <span>Mon - Fri</span>
                        <span>9:00 AM - 7:00 PM</span>
                        </div>

                        <div className="flex gap-6 mt-2">
                        <span>Saturday</span>
                        <span>9:00 AM - 5:00 PM</span>
                        </div>

                        <div className="flex gap-6 mt-2">
                        <span>Sunday</span>
                        <span>Closed (Emergency Only)</span>
                        </div>
                    </div>
                    </div>
                </div>
                </div>

                {/* Quick Links */}
                <div>
                <h3 className="font-semibold text-2xl mb-6">
                    Quick Links
                </h3>

                <div className="grid grid-cols-2 gap-y-4 text-sm text-gray-700">
                    <a href="#">Our Studio</a>
                    <a href="#">Meet the Team</a>

                    <a href="#">Treatments</a>
                    <a href="#">Smile Gallery</a>

                    <a href="#">New Patients</a>
                    <a href="#">Contact Us</a>
                </div>
                </div>
            </div>
            </div>

            {/* Bottom Footer */}
            <div className="flex flex-col md:flex-row items-center justify-between mt-8 text-xs text-gray-300 gap-4">
            <p>
                © 2026 Pure Dental Care. All Rights Reserved.
            </p>

            <div className="flex items-center gap-4">
                <a href="#">Privacy Policy</a>
                <span>|</span>

                <a href="#">Terms of Service</a>
                <span>|</span>

                <a href="#">Accessibility</a>
            </div>
            </div>
        </div>
        </footer>
    </div>
  )
}

export default Footer