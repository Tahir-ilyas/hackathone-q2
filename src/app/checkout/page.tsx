
import React from 'react'
import { RightOutlined, TrophyOutlined, FileProtectOutlined, DeliveredProcedureOutlined, CustomerServiceOutlined } from '@ant-design/icons'
import { Radio } from "antd";
import Image from 'next/image'

const Page = () => {
  return (
    <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
      {/* Header Section */}
      <div className='relative w-full h-48 sm:h-64 md:h-80 lg:h-96'>
        <Image 
          src="/image/shop1.png" 
          alt="shop" 
          fill
          className='object-cover'
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center'>
          <div className='flex justify-center mb-4'>
            <Image 
              src="/image/logo.png" 
              alt="logo" 
              width={40} 
              height={40} 
              className='mx-auto'
            />
          </div>
          <h1 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium font-poppins'>Checkout</h1>
          <div className='flex items-center justify-center gap-2 mt-2'>
            <h3 className='text-sm sm:text-base font-poppins'>Home</h3>
            <RightOutlined className='w-4' />
            <h3 className='text-sm sm:text-base font-poppins'>Checkout</h3>
          </div>
        </div>
      </div>

      {/* Checkout Content */}
      <div className='flex flex-col lg:flex-row gap-8 mt-8 md:mt-16'>
        {/* Billing Form */}
        <div className='lg:w-2/3 xl:w-3/4'>
          <form className='space-y-6 max-w-2xl mx-auto'>
            <h1 className='text-xl sm:text-2xl font-bold mb-6'>Billing details</h1>
            
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
              <div>
                <label className='block text-sm sm:text-base font-medium mb-2'>First Name</label>
                <input 
                  type="text" 
                  placeholder='Abc' 
                  className='w-full p-3 border border-gray-300 rounded-lg' 
                />
              </div>
              <div>
                <label className='block text-sm sm:text-base font-medium mb-2'>Last Name</label>
                <input 
                  type="text" 
                  placeholder='Abc' 
                  className='w-full p-3 border border-gray-300 rounded-lg' 
                />
              </div>
            </div>

            {[
              'Company Name (Optional)',
              'Country / Region',
              'Street address',
              'Town / City',
              'Province',
              'ZIP code',
              'Phone',
              'Email address'
            ].map((label) => (
              <div key={label}>
                <label className='block text-sm sm:text-base font-medium mb-2'>{label}</label>
                <input 
                  type="text" 
                  className='w-full p-3 border border-gray-300 rounded-lg' 
                />
              </div>
            ))}

            <div>
              <label className='block text-sm sm:text-base font-medium mb-2'>Additional information</label>
              <textarea 
                className='w-full p-3 border border-gray-300 rounded-lg h-32'
              />
            </div>

            <button className='w-full sm:w-48 bg-[#B88E2F] text-white py-3 px-6 rounded-md hover:bg-[#A57D2C] transition'>
              Submit
            </button>
          </form>
        </div>

        {/* Order Summary */}
        <div className='lg:w-1/3 xl:w-1/4 bg-gray-50 p-6 rounded-lg'>
          <div className='space-y-6'>
            <div>
              <h2 className='text-lg font-medium mb-4'>Product</h2>
              <div className='flex justify-between'>
                <span className='text-gray-600'>Asgaard sofa</span>
                <span>X 1</span>
              </div>
            </div>

            <div className='space-y-4'>
              <div className='flex justify-between'>
                <span>Subtotal</span>
                <span>Rs. 250,000.00</span>
              </div>
              <div className='flex justify-between'>
                <span>Total</span>
                <span className='text-[#B88E2F] font-bold'>Rs. 250,000.00</span>
              </div>
            </div>

            <hr className='my-6 border-gray-200' />

            <div className='space-y-4'>
              <label className='flex items-center gap-2'>
                <Radio />
                Direct Bank Transfer
              </label>
              <p className='text-sm text-gray-500'>
                Make your payment directly into our bank account. Please use your Order ID as payment reference.
              </p>

              <label className='flex items-center gap-2 mt-4'>
                <Radio />
                Cash On Delivery
              </label>
            </div>

            <p className='text-sm text-gray-500 mt-6'>
              Your personal data will be used to support your experience throughout this website...
            </p>

            <button className='w-full bg-[#B88E2F] text-white py-3 px-6 rounded-md hover:bg-[#A57D2C] transition'>
              Place order
            </button>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className='bg-[#FAF3EA] mt-16 py-16'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto px-4'>
          {[
            { icon: <TrophyOutlined />, title: 'High Quality', text: 'crafted from top materials' },
            { icon: <FileProtectOutlined />, title: 'Warranty Protection', text: 'Over 2 years' },
            { icon: <DeliveredProcedureOutlined />, title: 'Free Shipping', text: 'Order over 150 $' },
            { icon: <CustomerServiceOutlined />, title: '24 / 7 Support', text: 'Dedicated support' }
          ].map((feature, index) => (
            <div key={index} className='flex items-center gap-4'>
              <div className='text-2xl text-[#B88E2F]'>{feature.icon}</div>
              <div>
                <h3 className='font-semibold text-lg'>{feature.title}</h3>
                <p className='text-gray-600 text-sm'>{feature.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Page