import React from 'react'
import About from "../assets/about.png"
import HeroSection from './HeroSection'
import Section5 from "../assets/section-3-img.png"
import Chef from '../assets/Group.svg'
import Laundry from '../assets/Group 107.svg'
import cleaning from '../assets/52057-removebg-preview 1.svg'
import Maintanance from '../assets/Objects.svg'
import Section6 from "../assets/section-5-img.png"
import image1 from "../assets/gallery-1.png"
import image2 from "../assets/gallery-2.png"
import image3 from "../assets/gallery-3.png"
import image4 from "../assets/gallery-4.png"
import image5 from "../assets/gallery-5.png"
import image6 from "../assets/gallery-6.png"
const Home = () => {
  return (
    <div>
      <HeroSection />

      {/* about us section */}
      <section className='w-full'>
        <div className='flex  flex-col-reverse sm:flex-row justify-between lg:w-[80%] mx-auto mt-[5rem]'>
          <div className='w:1/2'>
            <img src={About} alt="" className='md:w-full h-[22.31rem] mr-[2.68rem] my-[7.65rem]' />
          </div>
          <div className='w-[33.75rem] h-[21.75rem] my-[7.87rem]'>
            <h1 className=' font-kanit text-[2rem] mb-[1.25rem] text-headColor'>About Us</h1>
            <p className='font-mulish text-[1.12rem] text-subheading'>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
          </div>
        </div>
      </section>


      {/* feature regarding purchase */}

      <section className='w-full bg-bgcolor'>
        <article className='w-[58%] mx-auto py-[5rem]' >
          <div className="">
            <h1 className="font-kanit text-center text-[2rem]">
              Feature regarding purchase of villa & also rent out feature with villacrest
            </h1>
            <p className="font-mulish text-center text-[1.25rem] text-subheading mx-[3.5rem] mb-[3.5rem] mt-[1.25rem]">
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
            </p>
          </div>
          <div className="mt-8 ">
            <img src={Section5} alt="section5 Image" />
          </div>

        </article>
      </section>

      {/* Services Section */}
      <section className='w-full mt-[5rem]'>
        {/* section 1 */}
        <article className='my-[6.125rem] flex '>

          <div className='flex flex-col my-[4.37rem] mr-[8.43rem] ml-[10.31rem] w-1/2 '>
            <h1 className='mb-[2rem] font-kanit text-[2rem] text-headColor text-left'>On Call Cook</h1>
            <p className='font-mulish text-left text-[1.25rem] text-subheading'>
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
              when an unknown printer took a galley of type and scrambled it to make a type specimen book.
              It has survived not only five centuries, but also the leap into electronic typesetting,
              remaining essentially unchanged.
            </p>
          </div>

          <img src={Chef} alt="" className='w-1/2 mr-[15.81rem] w-[21.68rem] h-[25.25rem]' />
        </article>



        {/* section 2 */}
        <article className='my-[6.125rem] flex '>
          <img src={Laundry} alt="" className='w-1/2 ml-[15.81rem] w-[21.68rem] h-[25.25rem]' />
          <div className='flex flex-col my-[4.37rem] ml-[8.43rem] mr-[10.31rem] w-1/2 '>
            <h1 className='mb-[2rem] font-kanit text-[2rem] text-center text-headColor text-left'>Laundry Services</h1>
            <p className='font-mulish text-left text-[1.25rem] text-subheading'>
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
              when an unknown printer took a galley of type and scrambled it to make a type specimen book.
              It has survived not only five centuries, but also the leap into electronic typesetting,
              remaining essentially unchanged.
            </p>
          </div>


        </article>


        {/* section 3 */}
        <article className='my-[6.125rem] flex '>

          <div className='flex flex-col my-[4.37rem] mr-[8.43rem] ml-[10.31rem] w-1/2 '>
            <h1 className='mb-[2rem] font-kanit text-[2rem] text-center text-headColor text-left'>Facility Cleaning Services</h1>
            <p className='font-mulish text-left text-[1.25rem] text-subheading'>
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
              when an unknown printer took a galley of type and scrambled it to make a type specimen book.
              It has survived not only five centuries, but also the leap into electronic typesetting,
              remaining essentially unchanged.
            </p>
          </div>

          <img src={cleaning} alt="" className='w-1/2 mr-[15.81rem] w-[21.68rem] h-[25.25rem]' />
        </article>



        {/* section 4 */}
        <article className='my-[6.125rem] flex '>
          <img src={Maintanance} alt="" className='w-1/2 ml-[15.81rem] w-[21.68rem] h-[25.25rem]' />
          <div className='flex flex-col my-[4.37rem] ml-[8.43rem] mr-[10.31rem] w-1/2 '>
            <h1 className='mb-[2rem] font-kanit text-[2rem] text-center text-headColor text-left'>Maintenance & Repairs</h1>
            <p className='font-mulish text-left text-[1.25rem] text-subheading'>
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
              when an unknown printer took a galley of type and scrambled it to make a type specimen book.
              It has survived not only five centuries, but also the leap into electronic typesetting,
              remaining essentially unchanged.
            </p>
          </div>


        </article>

      </section>

      <section className='w-full bg-bgcolor'>
      <article className=' w-[80%] mx-auto flex flex-col sm:flex-row justify-between flex-wrap gap-[4.125rem]'>
        <div className='flex-1 w-1/2 mt-[7.625rem] mb-[8.43rem]'>
          <h1 className="font-kanit text-[2rem] text-left text-headColor mb-[1.8rem]">Title for the key features of the villa goes here</h1>
          <p className="font-mulish text-left pr-[4.5rem] mb-[3.125rem] text-[1.2rem] text-subheading">
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
          </p>
          <div className="grid ml-2 grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
            <ul className="space-y-2 list-disc marker:text-[#6d87cb] font-manrope font-semibold ">
              <li>Tailored services</li>
              <li>Effortless arrivals</li>
              <li>Inspection and vetting</li>
            </ul>
            <ul className="space-y-2 list-disc marker:text-[#6d87cb] font-manrope font-semibold">
              <li>Expertly designed</li>
              <li>Luxury amenities</li>
              <li>Custom itineraries</li>
            </ul>
          </div>
          <button className="text-mulish font-bold text-center text-[0.87rem] text-white bg-btcolor py-[0.93rem] px-[1.125rem] w-[7.3rem] mt-[3.75rem]">
            View Details
          </button>
        </div>


        <figure className='w-1/2 flex justify-end my-[3.125rem]'>
        <img src={Section6} alt="Villa" className="  h-auto object-cover" />
        </figure>
      </article>
      </section>

      {/* villa image gallery */}
      <section className='w-full my-[5rem]'>
        <article className='w-[80%] mx-auto' >
          <h1 className="font-kanit text-[2rem] text-center text-headColor mb-[4.35rem]">
            Villa Image Gallery
          </h1>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-[69px] gap-y-[50px]'>
            <img src={image1} alt="Image 1" className="w-full h-auto object-cover" />
            <img src={image2} alt="Image 2" className="w-full h-auto object-cover" />
            <img src={image3} alt="Image 3" className="w-full h-auto object-cover" />
            <img src={image4} alt="Image 4" className="w-full h-auto object-cover" />
            <img src={image5} alt="Image 5" className="w-full h-auto object-cover" />
            <img src={image6} alt="Image 6" className="w-full h-auto object-cover" />
          </div>


        </article>
      </section>

      {/* why choose villacrest */}

      <section className='w-full bg-bgcolor'>
        <article className='w-[60%] mx-auto py-[4rem]'>
          <h1 className='font-kanit text-[2rem] text-center text-headColor'>Why Choose VillaCrest?</h1>
          <p className='font-mulish text-center text-[1.2rem] text-subheading px-[6.5rem]'>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>


          <div className='flex justify-center mt-[1.75rem]'>
            <button className='text-mulish font-bold text-center text-[0.87rem] text-white bg-btcolor py-[0.93rem] px-[1.125rem] w-[7.3rem]'>Contact</button>
          </div>
        </article>
      </section>

    </div>
  )
}

export default Home;