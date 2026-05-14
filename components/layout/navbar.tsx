// components/layout/Navbar.tsx

export default function Navbar() {
  return (
    <header className="w-full py-6">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <h1 className="text-xl font-bold">PURE</h1>

        <nav className="hidden md:flex gap-8 text-lg font-semibold">
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Services</a>
          <a href="#">Contact</a>
        </nav>

        <button className="bg-[#2f2f2f] text-white px-5 py-2 rounded-full">
          Contact Us
        </button>
      </div>
    </header>
  );
}