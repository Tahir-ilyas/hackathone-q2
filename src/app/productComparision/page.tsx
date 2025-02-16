
import React from 'react'
import { RightOutlined, LineOutlined } from '@ant-design/icons'
import { Rate } from "antd"
import Image from 'next/image'

const Page = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 wrapper">
      {/* Header Section */}
      <div className="relative w-full h-40 md:h-60 lg:h-80">
        <Image
          src="/image/shop1.png"
          alt="shop"
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
          <div className="mb-4">
            <Image
              src="/image/logo.png"
              alt="logo"
              width={40}
              height={40}
              className="mx-auto"
            />
          </div>
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-medium font-poppins mb-2">
            Product Comparison
          </h1>
          <div className="flex items-center justify-center gap-2">
            <span className="text-sm md:text-base font-poppins">Home</span>
            <RightOutlined className="w-4" />
            <span className="text-sm md:text-base font-poppins">Comparison</span>
          </div>
        </div>
      </div>

      {/* Products Comparison */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8 md:mt-12">
        <div className="text-center md:text-left">
          <h4 className="font-medium text-lg md:text-xl mb-4">
            Go to Product
            <br /> page for more
            <br /> Products
          </h4>
          <button className="text-sm text-[#727272] underline underline-offset-4">
            View More
          </button>
        </div>

        {[1, 2].map((item) => (
          <div key={item} className="text-center">
            <div className="relative aspect-square w-full max-w-[280px] mx-auto">
              <Image
                src={`/image/sofa${item}.png`}
                alt="Sofa"
                fill
                className="object-contain"
              />
            </div>
            <h3 className="text-lg md:text-xl font-medium mt-4">
              {item === 1 ? 'Asgaard Sofa' : 'Outdoor Sofa Set'}
            </h3>
            <p className="text-base md:text-lg font-medium mt-2">
              Rs. {item === 1 ? '250,000.00' : '224,000.00'}
            </p>
            <div className="flex items-center justify-center gap-2 mt-2">
              <span className="text-sm">4.{item === 1 ? '7' : '2'}</span>
              <Rate defaultValue={5} allowHalf className="text-sm" />
              <LineOutlined className="rotate-90 text-gray-400" />
              <span className="text-xs text-gray-400">
                {item === 1 ? '204' : '145'} Review
              </span>
            </div>
          </div>
        ))}

        <div className="text-center">
          <h2 className="text-xl font-semibold mb-4">Add A Product</h2>
          <button className="bg-[#B88E2F] text-white px-6 py-2 rounded-lg w-full max-w-[242px] mx-auto">
            Choose a Product
          </button>
        </div>
      </div>

      {/* Comparison Tables */}
      {['General', 'Product', 'Dimensions', 'Warranty'].map((section) => (
        <div key={section} className="mt-8 md:mt-12">
          <h2 className="text-xl md:text-2xl font-medium mb-4 px-4">
            {section}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 px-4">
            <div className="space-y-3">
              <p className="font-normal text-base">Sales Package</p>
              <p className="font-normal text-base">Model Number</p>
              {section === 'General' && (
                <>
                  <p className="font-normal text-base">Secondary Material</p>
                  <p className="font-normal text-base">Configuration</p>
                  <p className="font-normal text-base">Upholstery Material</p>
                  <p className="font-normal text-base">Upholstery Color</p>
                </>
              )}
              {/* Add other rows similarly */}
            </div>

            <div className="space-y-3">
              <p className="font-normal text-base">1 sectional sofa</p>
              <p className="font-normal text-base">TFCBLIGRBL6SRHS</p>
              {section === 'General' && (
                <>
                  <p className="font-normal text-base">Solid Wood</p>
                  <p className="font-normal text-base">L-shaped</p>
                  <p className="font-normal text-base">Fabric + Cotton</p>
                  <p className="font-normal text-base">Bright Grey & Lion</p>
                </>
              )}
              {/* Add other rows similarly */}
            </div>

            <div className="space-y-3">
              <p className="font-normal text-base">1 Three Seater, 2 Single Seater</p>
              <p className="font-normal text-base">DTUBLIGRBL568</p>
              {section === 'General' && (
                <>
                  <p className="font-normal text-base">Solid Wood</p>
                  <p className="font-normal text-base">L-shaped</p>
                  <p className="font-normal text-base">Fabric + Cotton</p>
                  <p className="font-normal text-base">Bright Grey & Lion</p>
                </>
              )}
              {/* Add other rows similarly */}
            </div>
          </div>
        </div>
      ))}

      {/* Warranty Section */}
      <div className="mt-8 md:mt-12 px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Warranty content here */}
        </div>
        <div className="flex justify-center mt-6">
          <button className="bg-[#B88E2F] text-white px-8 py-3 rounded-lg">
            Show More
          </button>
        </div>
      </div>
    </div>
  )
}

export default Page