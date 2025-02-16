
"use client"
import React from 'react'
import { RightOutlined, EnvironmentFilled, PhoneFilled, ClockCircleFilled, TrophyOutlined, FileProtectOutlined, DeliveredProcedureOutlined, CustomerServiceOutlined } from '@ant-design/icons'

const Contact = () => {
  return (
    <>
      {/* Hero Section */}
      <div className='flex flex-col text-center wrapper'>
        <img 
          src="image/shop1.png" 
          alt="shop" 
          className='w-full h-auto object-cover'
        />
        
        <div className='mt-[-100px] md:mt-[-190px] px-4'>
          <img 
            src="image/logo.png" 
            alt="logo" 
            className='w-6 h-6 mx-auto md:w-[30px] md:h-[30px]'
          />
          <h1 className='text-center font-poppins font-medium text-2xl md:text-[40px]'>Contact</h1>
          <div className='flex justify-center items-center gap-2 mt-2'>
            <h3 className='font-poppins text-black'>Home</h3>
            <RightOutlined className='text-sm' />
            <h3 className='font-poppins text-black'>Contact</h3>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-[100px]'>
        <h1 className='font-poppins text-black text-2xl md:text-[30px] font-bold text-center mb-6'>
          Get In Touch With Us
        </h1>
        <p className='font-poppins text-[#9F9F9F] text-center mb-12 md:mb-20'>
          For More Information About Our Product & Services. Please Feel Free To Drop Us<br className='hidden md:block'/> 
          An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!
        </p>

        <div className='grid md:grid-cols-2 gap-12'>
          {/* Contact Info */}
          <div className='space-y-8'>
            <div className='flex items-start gap-4'>
              <EnvironmentFilled className='text-2xl mt-1' />
              <div>
                <h2 className='font-medium font-poppins text-black text-xl md:text-2xl'>Address</h2>
                <p className='text-[#9F9F9F]'>236 5th SE Avenue, New York NY10000, United States</p>
              </div>
            </div>

            <div className='flex items-start gap-4'>
              <PhoneFilled className='text-2xl mt-1 rotate-90' />
              <div>
                <h2 className='font-medium font-poppins text-black text-xl md:text-2xl'>Phone</h2>
                <p className='text-[#9F9F9F]'>
                  Mobile: +(84) 546-6789<br />
                  Hotline: +(84) 456-6789
                </p>
              </div>
            </div>

            <div className='flex items-start gap-4'>
              <ClockCircleFilled className='text-2xl mt-1' />
              <div>
                <h2 className='font-medium font-poppins text-black text-xl md:text-2xl'>Working Time</h2>
                <p className='text-[#9F9F9F]'>
                  Monday-Friday: 9:00 - 22:00<br />
                  Saturday-Sunday: 9:00 - 21:00
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form className='space-y-6'>
            <div>
              <label className='block font-poppins font-medium text-black mb-2'>Your name</label>
              <input 
                type="text" 
                placeholder='Abc' 
                className='w-full border border-[#9F9F9F] rounded-lg p-4'
              />
            </div>

            <div>
              <label className='block font-poppins font-medium text-black mb-2'>Email address</label>
              <input 
                type="email" 
                placeholder='Abc@def.com' 
                className='w-full border border-[#9F9F9F] rounded-lg p-4'
              />
            </div>

            <div>
              <label className='block font-poppins font-medium text-black mb-2'>Subject</label>
              <input 
                type="text" 
                placeholder='This is an optional' 
                className='w-full border border-[#9F9F9F] rounded-lg p-4'
              />
            </div>

            <div>
              <label className='block font-poppins font-medium text-black mb-2'>Message</label>
              <textarea 
                placeholder='Hi! I’d like to ask about' 
                className='w-full border border-[#9F9F9F] rounded-lg p-4 h-32'
              />
            </div>

            <button className='w-full md:w-[180px] bg-[#B88E2F] text-white py-2 px-6 rounded-md'>
              Submit
            </button>
          </form>
        </div>

        {/* Features Section */}
        <div className='bg-[#FAF3EA] mt-12 md:mt-20 py-16 px-4'>
          <div className='max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8'>
            <div className='flex items-center gap-4'>
              <TrophyOutlined className='text-2xl' />
              <div>
                <p className='font-semibold font-poppins text-black'>High Quality</p>
                <p className='text-[#898989] text-sm'>Crafted from top materials</p>
              </div>
            </div>

            <div className='flex items-center gap-4'>
              <FileProtectOutlined className='text-2xl' />
              <div>
                <p className='font-semibold font-poppins text-black'>Warranty Protection</p>
                <p className='text-[#898989] text-sm'>Over 2 years</p>
              </div>
            </div>

            <div className='flex items-center gap-4'>
              <DeliveredProcedureOutlined className='text-2xl' />
              <div>
                <p className='font-semibold font-poppins text-black'>Free Shipping</p>
                <p className='text-[#898989] text-sm'>Order over 150 $</p>
              </div>
            </div>

            <div className='flex items-center gap-4'>
              <CustomerServiceOutlined className='text-2xl' />
              <div>
                <p className='font-semibold font-poppins text-black'>24/7 Support</p>
                <p className='text-[#898989] text-sm'>Dedicated support</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact
