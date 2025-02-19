import React from 'react'
import bulb from '../assets/bulb.svg'
import item1 from '../assets/Group 3204.svg'
import item2 from '../assets/Group 3205.svg'
import item3 from '../assets/Group 3206.svg'
import item4 from '../assets/Group 3207.svg'
import item5 from '../assets/Group 3208.svg'
import item6 from '../assets/Group 3209.svg'
import item7 from '../assets/Group 3210.svg'
const Amenities = () => {
  return (
    <section className='w-full grid grid-cols-3 gap-10 mt-4 mt-[60px]'>
        <figure className=''><img src={item1} alt="" className='object-contain w-full'/></figure>
        <figure><img src={item2} alt="" className='object-contain w-full'/></figure>
        <figure><img src={item3} alt="" className='object-contain w-full'/></figure>
        <figure><img src={item4} alt="" className='object-contain w-full'/></figure>
        <figure><img src={item5} alt="" className='object-contain w-full'/></figure>
        <figure><img src={item6} alt="" className='object-contain w-full'/></figure>
        <figure><img src={item7} alt="" className='object-contain w-full'/></figure>
    </section>
  )
}

export default Amenities
