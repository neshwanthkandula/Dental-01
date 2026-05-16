import Image from "next/image"
import DoctorCard from "../doctorcard"

export default function Hero() {
    return (
        <section className="py-2">
            <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 items-center">

                {/* left */}
                <div>
                    <h1 className="text-7xl lg:text-6xl font-bold leading-tight">
                        Your comfort Zone,
                        now with dentist
                        <span className="relative mx-1 inline-block h-[58px] w-[58px] align-middle">
                            <Image
                                src="/images/teeth/teeth.png"
                                alt="Teeth"
                                fill
                                priority
                                className="object-contain"
                            />
                            <svg
                            viewBox="0 0 24 24"
                            className="absolute -right-2 top-1 h-3.5 w-3.5 fill-[#D4A017]"
                            >
                            <path d="M12 0l2.5 9.5L24 12l-9.5 2.5L12 24l-2.5-9.5L0 12l9.5-2.5z" />
                            </svg>

                            <svg
                                viewBox="0 0 24 24"
                                className="absolute left-0 top-[-10px] h-2.5 w-2.5 fill-[#E6BE5A]"
                            >
                            <path d="M12 0l2.5 9.5L24 12l-9.5 2.5L12 24l-2.5-9.5L0 12l9.5-2.5z" />
                            </svg>
                        </span>
                    </h1>

                    <p className="mt-8 text-gray-500 max-w-md">
                        Experience stress-free modern dentistry designed around comfort.Join hundreds of happy patients who finally 
                        Look forward to thier dental visites.
                    </p>
                    <button className="mt-8 bg-[#b3b3b3] font-semibold px-6 py-4 rounded-full">
                        Book your Appointment Now
                    </button>
                    <div className="mt-8">
                        <DoctorCard/>
                    </div>
                </div>

                {/* right */}
                <div className="relative">
                    <div className="rounded-[32px] overflow-hidden">
                        <Image 
                          src="/images/hero/dentist.jpg"
                          alt="Dentist"
                          width={700}
                          height={900}
                        />
                    </div>

                    {/* floating card */}
                    <div className="absolute bottom-6 left-6 bg-white/20 backdrop-blur-md border border-white/30 rounded-2xl p-4 text-white flex flex-col items-start text-left">
    
                    <h3 className="font-semibold mb-3">
                        Advanced Dental Care
                    </h3>

                    <Image
                        src="/images/services/1.webp"
                        alt="Dentist"
                        width={60}
                        height={60}
                        className="
                            object-contain
                            invert
                            brightness-200
                            opacity-90
                        "
                    />

                    <p className="text-xs mt-3 max-w-[260px] leading-relaxed text-white/90">
                        Utilizing cutting-edge technology for comfortable,
                        highly effective results.
                    </p>
                </div>
                </div>
            </div>
        </section>
    )
}