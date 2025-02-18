import React from 'react'
import Carousel from './Crousel'

const HeroSection = () => {
  return (
    <section className="w-full bg-bgcolor">
      <article className='lg:w-[80%] mx-auto pt-[3.81rem]'>
        <div className='px-[8.125rem]'>
          <h1 className="font-kanit text-center text-forlg text-headColor leading-[4.06rem] tracking-[1px]">
            Take your <span className='font-semibold'>real estate</span> experience to new heights in the <span className='font-semibold'>Himalayas</span>
          </h1>
          <p className="text-mulish text-center tracking-[0.3px] leading-[30px] text-subheading text-[1.25rem] mt-[0.95rem] mx-[1.81rem]">
            Et has minim elitr intellegat. Mea aeterno eleifend antiopam ad, nam no suscipit quaerendum. At nam minimum ponderum. Est audiam animal molestiae te.
          </p>
        </div>

        {/* Carousel Section */}
      </article>
      <div className="mt-8 pb-[2.58rem]">
        <Carousel />
      </div>
    </section>
  )
}

export default HeroSection
