
import React from 'react';
import { ArrowRightOutlined } from '@ant-design/icons';
import Image from 'next/image';

const Inspiration = () => {
  return (
    <div className='w-full bg-[#FCF8F3] py-16 wrapper mt-8'>
      <div className='max-w-[1200px] w-full mx-auto px-4 flex flex-col md:flex-row items-center md:items-start'>

        {/* Left Content */}
        <div className='md:w-1/2 text-center md:text-left'>
          <h1 className='font-bold text-3xl md:text-4xl leading-tight'>
            50+ Beautiful rooms inspiration
          </h1>
          <p className='text-gray-600 mt-4 text-lg'>
            Our designer already made a lot of beautiful prototypes of rooms that inspire you.
          </p>
          <button className='mt-6 bg-[#B88E2F] text-white px-6 py-3 rounded-md font-semibold text-lg hover:bg-[#a37925] transition'>
            Explore More
          </button>
        </div>

        {/* Right Side - Images */}
        <div className='md:w-1/2 flex flex-col md:flex-row gap-4 mt-10 md:mt-0'>

          {/* Image 1 */}
          <div className='relative w-full md:w-[360px]'>
            <Image 
              src="/image/inner.png" 
              alt="Inner Peace Room" 
              width={360} 
              height={500} 
              className="w-full h-auto object-cover rounded-lg"
            />
            {/* Overlay Box */}
            <div className='absolute bottom-4 left-4 bg-white bg-opacity-70 p-4 rounded-lg'>
              <p className='text-gray-700'>01 Bed Room</p>
              <h3 className='font-semibold text-xl text-[#3A3A3A]'>Inner Peace</h3>
              <div className='mt-2 w-12 h-12 bg-[#B88E2F] flex items-center justify-center rounded-full'>
                <ArrowRightOutlined style={{ fontSize: '20px', color: '#fff' }} />
              </div>
            </div>
          </div>

          {/* Image 2 */}
          <div className='w-full md:w-[372px]'>
            <Image 
              src="/image/draz.png" 
              alt="Draz Room" 
              width={372} 
              height={486} 
              className="w-full h-auto object-cover rounded-lg"
            />
          </div>

        </div>
      </div>
    </div>
  );
};

export default Inspiration;
