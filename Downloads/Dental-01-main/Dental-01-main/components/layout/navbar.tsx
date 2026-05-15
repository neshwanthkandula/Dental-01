"use client"

export default function Navbar() {
  return (
    <header className="w-full py-4 md:py-6 px-4">

      <div className="max-w-7xl mx-auto flex items-center justify-between">

        {/* Logo */}
        <h1 className="text-lg sm:text-xl md:text-2xl font-bold tracking-wide">
          PURE
        </h1>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8 text-lg font-semibold">
          <a
            href="#"
            className="hover:text-gray-500 transition duration-300"
          >
            Home
          </a>

          <a
            href="#"
            className="hover:text-gray-500 transition duration-300"
          >
            About
          </a>

          <a
            href="#"
            className="hover:text-gray-500 transition duration-300"
          >
            Services
          </a>

          <a
            href="#"
            className="hover:text-gray-500 transition duration-300"
          >
            Contact
          </a>
        </nav>

        {/* Right Side */}
        <div className="flex items-center gap-3">

          {/* Mobile Menu Icon */}
          <button className="md:hidden text-3xl font-light">
            ☰
          </button>

          {/* Contact Button */}
          <button className="bg-[#2f2f2f] text-white px-4 md:px-5 py-2 rounded-full text-sm md:text-base hover:scale-105 transition duration-300">
            Contact Us
          </button>

        </div>

      </div>

    </header>
  );
}