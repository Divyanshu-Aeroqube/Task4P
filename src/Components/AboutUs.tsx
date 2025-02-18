import React from 'react'
import about from '../assets/about-img.png'
import Mission from '../assets/mission.svg'
import Vision from '../assets/vision.svg'
import Bulb from '../assets/bulb.svg'
const AboutUs = () => {
  return (
    <>

    <section className='w-full mt-[6.8rem] mb-[2.75rem]'>
      <h1 className='w-[38%] mx-auto font-kanit text-[2rem] text-center text-headColor mb-[1.375rem]'>Welcome To VillaCrest</h1>

      <div className='flex flex-col gap-8'>
      <p className='w-[50.8%] mx-auto font-mulish text-[1.18rem] text-center text-subheading leading-relaxed'>Vacations are crucial for the souls and when that experience doesn’t go as planned,
      you can’t get that time back.</p>

      <p className='w-[50.8%] mx-auto font-mulish text-[1.18rem] text-center text-subheading leading-relaxed'>One of the most significant parts of buying a vacation home is its upkeep and maintenance in the absence of homeowners. Getting a home is an emotional decision but the reality of homeownership is riddled with friction.</p>
      </div>
    </section>

    <figure className='w-full mb-[3.75rem] h-[26.25rem]'>
      <img src={about} alt="" className='w-[80%] mx-auto' />
    </figure>

    <section className='w-full'>
      <article className='w-[80%] mx-auto flex mb-[1.87rem]'>
        <div className='my-[9.5rem] w-1/2'>
          <h1 className='font-kanit text-[2rem] text-headColor text-left mb-[1.375rem]'>Our Mission</h1>
          <div className='flex flex-col gap-8 mr-[4rem]'>
      <p className=' font-mulish text-[1.12rem] text-left text-subheading'>Vacations are crucial for the souls and when that experience doesn’t go as planned,
      you can’t get that time back.</p>

      <p className=' font-mulish text-[1.12rem] text-left text-subheading'>One of the most significant parts of buying a vacation home is its upkeep and maintenance in the absence of homeowners. Getting a home is an emotional decision but the reality of homeownership is riddled with friction.</p>
      </div>
        </div>
        <figure className='w-1/2 mt-[8.75rem] mb-[10.12rem]'>
          <img src={Mission} className='w-full h-[18.67rem]' alt="" />
        </figure>
      </article>
    </section>



      {/* fact section */}
      <div className="m-2 bg-[#3c64b1]/10 rounded-lg sm:m-20">
  <div className="px-4 py-10 sm:px-10 lg:px-30 lg:pt-20 pb-10">
    <img src={Bulb} className='block mx-auto' alt="" />
    <h1 className="font-kanit text-center text-lg sm:text-3xl md:text-4xl lg:text-5xl leading-snug">
    Facts About Shitlakhet
    </h1>
    <p className="text-center text-sm sm:text-md md:text-lg px-2 sm:px-10 lg:px-35 text-gray-500 mt-4">
    The mesmerizing view of the sun-kissed hills, rich flora-fauna and the cool breeze carrying away the scent of the rosy rhododendrons makes Sitlakhet an ideal retreat.
    </p>
    <p className="text-center text-sm sm:text-md md:text-lg px-2 sm:px-10 lg:px-35 text-gray-500 mt-4">
    A very wide range of Himalayas is visible from here. Surrounded by about 1800 hectares of forest area from all sides.
    </p>
    <p className="text-center text-sm sm:text-md md:text-lg px-2 sm:px-10 lg:px-35 text-gray-500 mt-4">
    Shitlakhet is known for its natural beauty. Nestled in the lap of nature, this hill station attracts tourists. Shitlakhet is a small hill station. But it is very calm and pleasant. Here you can see the beautiful peaks of the Himalayas.
    </p>
    {/* <div className="mt-8 ">
      <img src={about} alt=''/>
    </div> */}
  </div>
</div>



</>
  )
}

export default AboutUs
