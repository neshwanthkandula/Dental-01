import Image from "next/image"
import DoctorCard from "../doctorcard"

export default function Hero() {
    return (
        <section className="py-6 px-4 md:px-6">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

                {/* left */}
                <div className="text-center lg:text-left">
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
                        Your comfort Zone,
                        now with dentist
                        <span className="relative mx-1 inline-block h-[40px] w-[40px] sm:h-[48px] sm:w-[48px] lg:h-[58px] lg:w-[58px] align-middle">
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

                    <p className="mt-6 text-gray-500 max-w-md mx-auto lg:mx-0 text-sm sm:text-base">
                        Experience stress-free modern dentistry designed around comfort.
                        Join hundreds of happy patients who finally
                        look forward to their dental visits.
                    </p>

                    <button className="mt-6 bg-[#b3b3b3] font-semibold px-5 py-3 sm:px-6 sm:py-4 rounded-full text-sm sm:text-base">
                        Book your Appointment Now
                    </button>

                    <div className="mt-8 flex justify-center lg:justify-start">
                        <DoctorCard />
                    </div>
                </div>

                {/* right */}
                <div className="relative w-full">
                    <div className="rounded-[32px] overflow-hidden">
                        <Image
                            src="/images/hero/dentist.jpg"
                            alt="Dentist"
                            width={700}
                            height={900}
                            className="w-full h-auto object-cover"
                        />
                    </div>

                    {/* floating card */}
                    <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 bg-white/20 backdrop-blur-md border border-white/30 rounded-2xl p-3 sm:p-4 text-white flex flex-col items-start text-left max-w-[220px] sm:max-w-[260px]">

                        <h3 className="font-semibold mb-2 sm:mb-3 text-sm sm:text-base">
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

                        <p className="text-xs mt-2 sm:mt-3 leading-relaxed text-white/90">
                            Utilizing cutting-edge technology for comfortable,
                            highly effective results.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}