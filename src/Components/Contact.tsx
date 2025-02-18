import React from 'react'

const Contact = () => {
  return (
    <div>
      <div className="m-2 bg-[#e2eaff] rounded-lg sm:m-20">
        <div className=" flex  justify-evenly px-4 py-10 sm:px-10 lg:px-30 lg:pt-20 pb-10">
          <div className='bg-white'>
            <h1>Contact Details</h1>
            <p>1187 Lake Forest City,</p>
            <p>Uttrakhand, - 110006, India</p>
            <p>support@villacrest.in</p>
            <p>+91- 9910014421, 9891149697</p>
          </div>
          <div className=''>
            <h1>Get in Touch</h1>
            <p>Feel free to drop your message below!</p>
            <form action="" className='flex flex-col gap-2'>
              <input type="text" className='h-10 w-auto bg-white ' placeholder='Your Name' />
              <input type="text" className='h-10 w-auto bg-white ' placeholder='Your Mobile Number' />
              <input type="text" className='h-10 w-auto bg-white ' placeholder='Your Email Address' />
              <input type="text" className='h-30 w-auto bg-white ' placeholder='Enter your message here..' />
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
