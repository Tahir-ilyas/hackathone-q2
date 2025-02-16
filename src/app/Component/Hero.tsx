
import React from 'react';
import Image from 'next/image';

const Hero = () => {
  return (
    <>
      <div className="w-full flex flex-col md:flex-row wrapper relative">
        {/* Banner Image */}
        <Image
          src="/image/banner1.png"
          alt="banner"
          width={1440}
          height={500}
          className="w-full h-auto object-cover"
        />
        
        {/* Text Content */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 md:left-12 lg:left-20 bg-[#FFF3E3] p-6 md:p-10 lg:p-12 w-[90%] md:w-[500px] h-auto rounded-lg ">
          <h3 className="font-poppins font-semibold text-[#333333] text-[16px] tracking-wide mb-4">
            New Arrival
          </h3>
          <h1 className="font-poppins text-[#B88E2F] font-bold text-[32px] md:text-[40px] leading-tight">
            Discover Our
          </h1>
          <h1 className="font-poppins text-[#B88E2F] font-bold text-[32px] md:text-[40px] leading-tight">
            New Collection
          </h1>
          <p className="font-poppins font-medium text-[14px] md:text-[16px] text-[#333333] mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.
          </p>
          <div className="mt-8">
            <button className="w-[140px] md:w-[170px] h-[50px] md:h-[60px] bg-[#B88E2F] text-white font-bold text-[14px] md:text-[16px] rounded-md">
              BUY Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;


