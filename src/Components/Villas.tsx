import React from "react";
import image1 from "../assets/gallery-1.png"
import image2 from "../assets/gallery-2.png"
import image3 from "../assets/gallery-3.png"
import image4 from "../assets/gallery-4.png"
import image5 from "../assets/gallery-5.png"
import image6 from "../assets/gallery-6.png"
import loc from '../assets/location.svg'
import bathtub from '../assets/bathtub.svg'
import room from '../assets/double-bed.svg'
import house from '../assets/measured.svg'
import { useNavigate } from "react-router-dom";

const villas = [
  { id: 1, image: image1, title: "Hilltruck Valley", price: "₹375,000", address: "1187 Lake Forest City, Uttrakhand", bath: "2 Bath", beds: "4 Beds", size: "2986 sqft" },
  { id: 2, image: image2, title: "Hilltruck Valley", price: "₹375,000", address: "1187 Lake Forest City, Uttrakhand", bath: "2 Bath", beds: "4 Beds", size: "2986 sqft" },
  { id: 3, image: image3, title: "Hilltruck Valley", price: "₹375,000", address: "1187 Lake Forest City, Uttrakhand", bath: "2 Bath", beds: "4 Beds", size: "2986 sqft" },
  { id: 4, image: image4, title: "Hilltruck Valley", price: "₹375,000", address: "1187 Lake Forest City, Uttrakhand", bath: "2 Bath", beds: "4 Beds", size: "2986 sqft" },
  { id: 5, image: image5, title: "Hilltruck Valley", price: "₹375,000", address: "1187 Lake Forest City, Uttrakhand", bath: "2 Bath", beds: "4 Beds", size: "2986 sqft" },
  { id: 6, image: image6, title: "Hilltruck Valley", price: "₹375,000", address: "1187 Lake Forest City, Uttrakhand", bath: "2 Bath", beds: "4 Beds", size: "2986 sqft" },
  { id: 1, image: image1, title: "Hilltruck Valley", price: "₹375,000", address: "1187 Lake Forest City, Uttrakhand", bath: "2 Bath", beds: "4 Beds", size: "2986 sqft" },
  { id: 2, image: image2, title: "Hilltruck Valley", price: "₹375,000", address: "1187 Lake Forest City, Uttrakhand", bath: "2 Bath", beds: "4 Beds", size: "2986 sqft" },
  { id: 3, image: image3, title: "Hilltruck Valley", price: "₹375,000", address: "1187 Lake Forest City, Uttrakhand", bath: "2 Bath", beds: "4 Beds", size: "2986 sqft" }
];

export default function Villas() {

  const navigate = useNavigate();

  const handleClick = (id: number) => {
    navigate(`/details/${id}`);
  };
  return (
    <section className='w-full my-[5rem] '>
      <article className='w-[85%] mx-auto'>
        <article className="mb-[4.35rem] text-center">
          <h1 className="font-kanit text-[2rem] text-headColor">
            Let's explore the villas
          </h1>
          <h1 className="font-kanit text-[2rem] text-headColor">
            of your dreams
          </h1>
        </article>

        <div className='grid grid-cols-1 space-y-20 gap-8 sm:grid-cols-2 lg:grid-cols-3 sm:space-y-35'>
          {villas.map((villa) => (
            <section key={villa.id} className="relative h-[350px] sm:h-[275px] cursor-pointer" onClick={() => handleClick(villa.id)}>
              {/* Image */}
              <figure className="shadow-lg">
                <img src={villa.image} alt={villa.title} className=" w-full object-cover rounded-md" />
              </figure>

              {/* Villa Details Box */}
              <div className="absolute bottom-[8%] sm:bottom-[-10%] md:bottom-[-35%] left-1/2 -translate-x-1/2 bg-white p-4 shadow-md rounded-sm w-[90%]">
                <article className="flex flex-col space-y-2">
                  <header className="flex justify-between font-bold">
                    <h1 className="font-nunitosans font-bold text-4 text-[#3e3e3e] leading-[27.2px]">{villa.title}</h1>
                    <h1 className="font-nunitosans font-bold text-4 text-[#ffa800] leading-[27.2px]">{villa.price}</h1>
                  </header>

                  <p className="text-left font-nunitosans text-[#aeaeae] text-[14px]"><img src={loc} className="inline" />{villa.address}</p>
                  <footer className="flex justify-between text-sm">
                    <p className="text-left font-semibold font-nunitosans text-[#626262] text-[14px]"><img src={bathtub} className="inline" /> {villa.bath}</p>
                    <p className="text-left font-semibold font-nunitosans text-[#626262] text-[14px]"><img src={room} className="inline" /> {villa.beds}</p>
                    <p className="text-left font-semibold font-nunitosans text-[#626262] text-[14px]"><img src={house} className="inline" /> {villa.size}</p>
                  </footer>
                </article>
              </div>
            </section>
          ))}
        </div>
      </article>
    </section>
  );
}