// app/page.tsx

import Image from "next/image";

const doctors = [
  {
    id: 1,
    name: "Dr. John Doe",
    specialization: "Cardiologist",
    image: "/images/doctors/1.png",
  },
  {
    id: 2,
    name: "Dr. Sarah Wilson",
    specialization: "Dental Surgeon",
    image: "/images/doctors/2.png",
  },
  {
    id: 3,
    name: "Dr. Michael Lee",
    specialization: "Orthodontist",
    image: "/images/doctors/3.png",
  },
];

function Card({
  name,
  specialization,
  image,
}: {
  name: string;
  specialization: string;
  image: string;
}) {
  return (
    <div className="relative h-[200px] w-[170px] overflow-hidden rounded-xl bg-gradient-to-b from-[#d2d2d2] via-[#b3b3b3] to-[#8d8d8d]">
      <Image
        src={image}
        alt={name}
        fill
        priority
        className="object-contain"
      />

      {/* Blur Text Overlay */}
      <div className="absolute bottom-0 left-0 right-0">
        <h3 className="text-center text-sm font-semibold text-white backdrop-blur-[0.5px]">
          {name}
        </h3>

        <p className="pb-1.5 text-center text-xs text-white/80 backdrop-blur-[1.5px]">
          {specialization}
        </p>
      </div>
    </div>
  );
}

export default function DoctorCard() {
  return (
    <div className="grid grid-cols-3">
    {doctors.map((doctor) => (
        <Card
        key={doctor.id}
        name={doctor.name}
        specialization={doctor.specialization}
        image={doctor.image}
        />
    ))}
    </div>
  );
}