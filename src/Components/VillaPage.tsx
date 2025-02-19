import {useState} from 'react'
import image1 from "../assets/gallery-1.png"
import image2 from "../assets/gallery-2.png"
import image3 from "../assets/gallery-3.png"
import image4 from "../assets/gallery-4.png"
import image5 from "../assets/gallery-5.png"
import image6 from "../assets/gallery-6.png"
import VCrousel from './VCrousel'
import villas from './data'
import loc from '../assets/location.svg'
import bathtub from '../assets/bathtub.svg'
import room from '../assets/double-bed.svg'
import house from '../assets/measured.svg'
import DescriptionSection from './DescriptionSection'
import AboutSection from './AboutSection'
import Amenities from './Amenities'
const villa=villas[1];
const VillaPage = () => {
    const [activeSection, setActiveSection] = useState('description');
  return (
    <>
    <section className='w-full  mb-[8rem] mt-[5rem]'>
      <article className='w-[80%] mx-auto flex gap-4 '>
        <aside className='w-[70%]'>
            <section className='w-full h-[600px]'>
                <VCrousel/>
                {/* <img src={image2} className='object-contain w-f' alt="" /> */}
            </section>
            <section className='w-full h-[217px] shadow-lg'>
            <article className="flex flex-col space-y-2 p-20 mt-20">
                  <header className="flex justify-between font-bold">
                    <h1 className="font-nunitosans font-bold text-[28px] text-[#3e3e3e] leading-[27.2px]">{villa.title}</h1>
                    <h1 className="font-nunitosans font-bold text-[28px] text-[#ffa800] leading-[27.2px]">{villa.price}</h1>
                  </header>

                  <p className="text-left font-nunitosans text-[#aeaeae] text-[22px]"><img src={loc} className="inline" />{villa.address}</p>
                  <footer className="flex justify-between text-sm">
                    <p className="text-left font-semibold font-nunitosans text-[#626262] text-[22px]"><img src={bathtub} className="inline" /> {villa.bath}</p>
                    <p className="text-left font-semibold font-nunitosans text-[#626262] text-[22px]"><img src={room} className="inline" /> {villa.beds}</p>
                    <p className="text-left font-semibold font-nunitosans text-[#626262] text-[22px]"><img src={house} className="inline" /> {villa.size}</p>
                  </footer>
                </article>
            </section>

            <section className='h-15 flex justify-around items-center bg-[#f4f4f4] w-full mt-15'>
            <h1 
                    className={`py-3 cursor-pointer font-mulish text-[18px] font-bold text-[#8a8a8a] ${activeSection === 'description' ? 'text-[#181725] border-b-4 border-[#6d87cb]' : ''}`} 
                    onClick={() => setActiveSection('description')}
                >
                    DESCRIPTION
                </h1>
                <h1 
                    className={` py-3 cursor-pointer font-mulish text-[18px] font-bold text-[#8a8a8a] ${activeSection === 'layout' ? 'text-[#181725] border-b-4 border-[#6d87cb]' : ''}`} 
                    onClick={() => setActiveSection('layout')}
                >
                    PROPERTY LAYOUT
                </h1>

                <h1 
                    className={`py-3 cursor-pointer font-mulish text-[18px] font-bold text-[#8a8a8a] ${activeSection === 'amenities' ? 'text-[#181725] border-b-4 border-[#6d87cb]' : ''}`} 
                    onClick={() => setActiveSection('amenities')}
                >
                    AMENITIES
                </h1>
            </section>
            <section className='w-full'>
                {activeSection === 'layout' && <AboutSection />}
                {activeSection === 'description' && <DescriptionSection />}
                {activeSection === 'amenities' && <Amenities />}
            </section>
        </aside>
        <aside className='w-[30%]'>
            <section className='grid grid-cols-2 gap-6'>
                <img src={image1} alt="" />
                <img src={image2} alt="" />
                <img src={image3} alt="" />
                <img src={image4} alt="" />
                <img src={image5} alt="" />
                <img src={image6} alt="" />
                <img src={image2} alt="" />
                <img src={image3} alt="" />
            </section>
        </aside>
      </article>
    </section>
    </>
  )
}

export default VillaPage
