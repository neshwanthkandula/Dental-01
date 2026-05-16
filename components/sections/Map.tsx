"use client"

const MapSection = () => {
  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-14">
          <p className="text-sm tracking-[0.3em] uppercase text-gray-400">
            Visit Our Clinic
          </p>

          <h2 className="text-4xl md:text-5xl font-semibold mt-4 leading-tight">
            Modern Dentistry.
            <br />
            Comfortable Experience.
          </h2>

          <p className="text-gray-500 text-sm max-w-2xl mx-auto mt-5 leading-relaxed">
            Located in the heart of Vijayawada, our clinic combines
            advanced dental technology with personalized patient care
            in a calm, welcoming environment.
          </p>
        </div>

        {/* Map */}
        <div className="rounded-[36px] overflow-hidden shadow-sm border-2 border-gray-200">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15300.347081739943!2d80.65005958329543!3d16.52171649520367!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a35e52e36860385%3A0x11db097bdf772cb2!2sDr.%20Naresh&#39;s%20Capital%20Dental!5e0!3m2!1sen!2sin!4v1778753344456!5m2!1sen!2sin"
            width="100%"
            height="550"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

       
      </div>
    </section>
  )
}

export default MapSection