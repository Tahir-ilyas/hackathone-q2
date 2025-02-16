
import React from 'react';

const Footer = () => {
  return (
    <>
      <hr className="w-full mt-8" />
      <div className="w-full h-auto mt-6 flex flex-col md:flex-row justify-center items-center mx-auto wrapper">
        {/* Left Section */}
        <div className="w-full md:w-[400px] h-auto md:h-[419px] px-4 md:px-0">
          <div className="w-auto md:w-[85px] h-auto">
            <p className="font-bold font-poppins text-[24px] text-[#000000]">Funiro.</p>
          </div>
          <div className="w-auto md:w-[285px] h-auto mt-6 md:mt-12">
            <p className="font-poppins text-[#9F9F9F] text-[16px]">
              400 University Drive Suite 200 Coral<br /> Gables,<br />
              FL 33134 USA
            </p>
            <hr className="w-full md:w-[1240px] mt-12 md:mt-[180px]" />
            <h4 className="mt-4 md:mt-6 text-center md:text-left">
              2023 furino. All rights reserved
            </h4>
          </div>
        </div>

        {/* Right Section */}
        <div className="w-full md:w-[710px] h-auto flex flex-col md:flex-row justify-between mt-8 md:mt-0 px-4 md:px-0">
          {/* Links */}
          <div className="w-full md:w-[68px] h-auto flex flex-col">
            <h4 className="font-medium text-[#9F9F9F]">Links</h4>
            <h4 className="font-medium text-[#000000] mt-4 md:mt-12">Home</h4>
            <h4 className="font-medium text-[#000000] mt-4 md:mt-10">Shop</h4>
            <h4 className="font-medium text-[#000000] mt-4 md:mt-10">About</h4>
            <h4 className="font-medium text-[#000000] mt-4 md:mt-10">Contact</h4>
          </div>

          {/* Help */}
          <div className="w-full md:w-[140px] h-auto">
            <h4 className="font-medium text-[#9F9F9F] mt-8 md:mt-0">Help</h4>
            <h4 className="font-medium text-[#000000] mt-4 md:mt-10">Payment Options</h4>
            <h4 className="font-medium text-[#000000] mt-4 md:mt-10">Returns</h4>
            <h4 className="font-medium text-[#000000] mt-4 md:mt-10">Privacy Policies</h4>
          </div>

          {/* Newsletter */}
          <div className="w-full md:w-[140px] h-auto">
            <h4 className="font-medium text-[#9F9F9F] mt-8 md:mt-0">Newsletter</h4>
            <h4 className="font-medium font-poppins text-[#000000] mt-4 md:mt-10 underline">
              Enter Your Email Address
            </h4>
          </div>

          {/* Subscribe */}
          <div className="w-full md:w-[286px] h-auto">
            <h4 className="font-medium text-[#9F9F9F] font-poppins mt-6 md:mt-16 text-center md:text-left underline">
              SUBSCRIBE
            </h4>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;

