// import React from 'react'
// import {RightOutlined, DeleteFilled,TrophyOutlined,FileProtectOutlined,DeliveredProcedureOutlined,CustomerServiceOutlined } from '@ant-design/icons'
// import Link from 'next/link'
// const Cart = () => {
//   return (
//     <>
//      <div className='  flex flex-col text-center wrapper '>
//         <img src="image/shop1.png" alt="shop" width={1440} height={316}  />
//         <div className='mt-[-190px] '>
//           <img src="image/logo.png" alt="logo" width={40} height={40} className='ml-[620px]'/>
//           <h1 className='text-center font-poppins font-medium text-[48px]'>Cart</h1>
//           <div className='w-[48px] h-[24px] ml-[580px] flex gap-2 '>
//             <h3 className='font-poppins text-[#000000]'>Home</h3>
//             <RightOutlined className='w-20' />
//             <h3 className='font-poppins text-[#000000]'>Cart</h3>
//           </div>
//         </div>
//         </div>
//         <div className='w-[817px] h-[55px] flex px-40 bg-[#F9F1E7] items-center justify-between mt-32 ml-52'>
//         <h1>Product</h1>
//         <h1 className='pl-16'>Price</h1>
//         <h1 className='pl-32'>Quantity</h1>
//         <h1>Subtotal</h1>
//     </div>
//     <div className='flex ml-52 '>
//       <div>
//           <img src="image/sofa1.png" alt="Chair" width={105} height={105} className='mt-20 ' />
//           </div>
//           <div className='w-[817px] h-[55px] flex px-12  items-center  mt-24'>
//           <h1>Asgaard sofa</h1>
//           <h1 className='pl-16'>Rs. 250,000.00</h1>
//           <p className='pl-3 ml-28 items-center border border-[#9F9F9F] w-[32px] h-[32px] rounded-lg'>1</p>
//           <h1 className='pl-12'>Rs. 250,000.00</h1>
//           <DeleteFilled className='pl-12 text-[#B88E2F]'/>
//           </div>
//           <div className='w-[360px] h-[360px] bg-[#F9F1E7] ml-[-70px]'>
//             <h1 className='text-center pt-6 font-semibold font-poppins text-[32px] text-[#000000]'>Cart Totals</h1>
//             <div className='flex justify-between px-20 pt-14'>
//               <h2 className='font-medium font-poppins text-[#000000] text-[16px]'>Subtotal</h2>
//               <h2 className='font-normal font-poppins text-[#9F9F9F]'>Rs. 250,000.00</h2>
//             </div>
//             <div className='flex justify-between px-20 pt-8'>
//             <h2 className='font-medium font-poppins text-[#000000] text-[16px]'>Total</h2>
//             <h2 className='font-medium font-poppins text-[#B88E2F] text-[20px]'>Rs. 250,000.00</h2>
//             </div>
//             <div className=' flex justify-center pt-10'>
//               <button className='w-[222px] h-[58px] border border-[#000000] rounded-2xl font-normal text-[20px] '><Link href={"/checkout"}>Check Out</Link></button>
//             </div>
//           </div>
//         </div>
//         <div className=' w-[1440px] h-[200px] bg-[#FAF3EA] wrapper flex justify-between items-center mt-12  '>
//             <div className=' w-[1100px] h-[70px] flex justify-between items-center px-16 '>
//               <div className='w-[53px] h-[60px] px-4 flex' >
//                 <div className='flex'>
//                   <TrophyOutlined />
//                 </div>
//                 <div className='w-[157px] h-[38px] ml-4 '>
//                   <p className='font-semibold font-poppins text-[20px] text-[#242424] '>High Quality</p>
//                   <div className='w-[267px] h-[30px]'>
//                     <p className='font poppins font-medium text-[#898989] text-[16px]'>crafted from top materials</p>
//                   </div>
//                 </div>
//               </div>

//               <div className='w-[53px] h-[60px] px-4 flex' >
//                 <div className='flex '>
//                   <FileProtectOutlined />
//                 </div>
//                 <div className='w-[258px] h-[38px] ml-4'>
//                   <p className='font-semibold font-poppins text-[20px] text-[#242424] '>Warranty Protection</p>
//                   <div className='w-[267px] h-[30px]'>
//                     <p className='font poppins font-medium text-[#898989] text-[16px]'>Over 2 years</p>
//                   </div>
//                 </div>
//               </div>

//               <div className='w-[53px] h-[60px] px-4 flex' >
//                 <div className='flex '>
//                   <DeliveredProcedureOutlined />
//                 </div>
//                 <div className='w-[174px] h-[38px] ml-4'>
//                   <p className='font-semibold font-poppins text-[20px] text-[#242424] '>Free Shipping</p>
//                   <div className='w-[163px] h-[30px]'>
//                     <p className='font poppins font-medium text-[#898989] text-[16px]'>Order over 150 $</p>
//                   </div>
//                 </div>
//               </div>
//               <div className='w-[53px] h-[60px] px-4 flex' >
//                 <div className='flex '>
//                   <CustomerServiceOutlined />
//                 </div>
//                 <div className='w-[177px] h-[38px] ml-4'>
//                   <p className='font-semibold font-poppins text-[20px] text-[#242424] '>24 / 7 Support</p>
//                   <div className='w-[189px] h-[30px]'>
//                     <p className='font poppins font-medium text-[#898989] text-[16px]'>Dedicated support</p>
//                   </div>
//                 </div>
//               </div>

//             </div>
//           </div>
        
//     </>
//   )
// }

// export default Cart

import React from 'react'
import { RightOutlined, DeleteFilled, TrophyOutlined, FileProtectOutlined, DeliveredProcedureOutlined, CustomerServiceOutlined } from '@ant-design/icons'
import Link from 'next/link'
import Image from 'next/image'

const Cart = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
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
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-medium mb-2">Cart</h1>
          <div className="flex items-center justify-center gap-2">
            <span className="text-sm md:text-base">Home</span>
            <RightOutlined className="w-4" />
            <span className="text-sm md:text-base">Cart</span>
          </div>
        </div>
      </div>

      {/* Cart Content */}
      <div className="mt-8 md:mt-16">
        {/* Cart Headers */}
        <div className="hidden md:flex bg-[#F9F1E7] py-4 px-4 justify-between items-center">
          <span className="flex-1">Product</span>
          <span className="flex-1 text-center">Price</span>
          <span className="flex-1 text-center">Quantity</span>
          <span className="flex-1 text-right">Subtotal</span>
        </div>

        {/* Cart Items */}
        <div className="flex flex-col md:flex-row gap-8 mt-8">
          {/* Product List */}
          <div className="flex-1">
            <div className="flex items-center gap-4 border-b pb-4">
              <div className="relative w-24 h-24">
                <Image
                  src="/image/sofa1.png"
                  alt="Chair"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="flex-1">
                <h2 className="text-lg font-medium">Asgaard sofa</h2>
                <div className="md:hidden flex flex-col gap-2 mt-2">
                  <span>Rs. 250,000.00</span>
                  <div className="flex items-center gap-4">
                    <span className="border border-[#9F9F9F] px-2 rounded">1</span>
                    <DeleteFilled className="text-[#B88E2F]" />
                  </div>
                  <span>Rs. 250,000.00</span>
                </div>
              </div>
              <div className="hidden md:flex flex-1 items-center justify-between">
                <span className="text-center">Rs. 250,000.00</span>
                <span className="border border-[#9F9F9F] px-2 rounded mx-4">1</span>
                <span>Rs. 250,000.00</span>
                <DeleteFilled className="text-[#B88E2F] ml-4" />
              </div>
            </div>
          </div>

          {/* Cart Totals */}
          <div className="md:w-96 bg-[#F9F1E7] p-6 h-fit">
            <h2 className="text-xl md:text-2xl font-semibold mb-6">Cart Totals</h2>
            <div className="flex justify-between mb-4">
              <span>Subtotal</span>
              <span className="text-[#9F9F9F]">Rs. 250,000.00</span>
            </div>
            <div className="flex justify-between mb-6">
              <span>Total</span>
              <span className="text-[#B88E2F] font-bold">Rs. 250,000.00</span>
            </div>
            <Link href="/checkout" className="block w-full bg-[#B88E2F] text-white text-center py-3 rounded-lg hover:bg-[#A57D2C] transition">
              Check Out
            </Link>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-[#FAF3EA] mt-12 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto px-4">
          {[
            { icon: <TrophyOutlined />, title: 'High Quality', text: 'crafted from top materials' },
            { icon: <FileProtectOutlined />, title: 'Warranty Protection', text: 'Over 2 years' },
            { icon: <DeliveredProcedureOutlined />, title: 'Free Shipping', text: 'Order over 150 $' },
            { icon: <CustomerServiceOutlined />, title: '24 / 7 Support', text: 'Dedicated support' }
          ].map((feature, index) => (
            <div key={index} className="flex items-center gap-4">
              <div className="text-2xl text-[#B88E2F]">{feature.icon}</div>
              <div>
                <h3 className="font-semibold text-lg">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Cart