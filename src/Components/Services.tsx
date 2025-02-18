import React from 'react'
import Chef from '../assets/Group.svg'
import Laundry from '../assets/Group 107.svg'
import cleaning from '../assets/52057-removebg-preview 1.svg'
import Maintanance from '../assets/Objects.svg'
const Services = () => {
  return (
    <>

    <section className='w-full mt-[5rem] mb-[2.5rem] '>
      <h1 className='font-kanit text-[2rem] text-center text-headColor w-[56%] font-medium mx-auto'>
      “Our Team have Awesome handpicked Services these for your next big group celebration, a romantic getaway or peaceful sneak away”
      </h1>
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
            <h1 className='mb-[2rem] font-kanit text-[2rem] text-headColor text-left'>Facility Cleaning Services</h1>
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
    </>
  )
}

export default Services
