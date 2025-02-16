import React from 'react'



const Product = () => {
  return (
    <>
     <div className='w-[1236px] h-[1084px] px-[102px] flex  '>
        <div className='w-[269px] h-[48px] ml-20 px-[588px]  '>
        <p className='font-bold text-center text-[20px] font-poppins justify-between leading-[120%] '>OurProducts</p>
         </div>
         <div className='w-[285px] h-[301px] '>
         <div className='ml-[-1100px] mt-[50px] flex gap-[20px]  '>
          <div className='w-[381px] h-[480px] flex flex-col'>
        <img src="/image/Products1.png" alt="product1" />
    
        </div>
        <img src="/image/Products01.png" alt="product01" />
        <img src="/image/Products2.png" alt="product2" />
        <img src="/image/Products3.png" alt="product3" />
        </div>
        <div className='ml-[-1100px] mt-[50px] flex gap-[20px]  '>
        <img src="/image/Products4.png" alt="product4" />
        <img src="/image/Products5.png" alt="product5" />
        <img src="/image/Products6.png" alt="product6" />
        <img src="/image/Products7.png" alt="product7" />
        </div >
        <div className='text-[#B88E2F] '>
       <button className='jusstify-center items-center ml-[-550px] mt-[20px] border-[2px] px-[40px] py-[8px] border-[#B88E2F]'>Show More</button> 
        </div>

        {/* <div className='wrapper'>
        <p className="font-semibold px-[16px] mt-[8px]" >Syltherine</p>
        <p className="font-medium px-[16px] text-[#898989]" >Stylish cafe chair</p>
        <p className="font-medium px-[16px] text-[#3A3A3A] " >Rp 2.500.000</p>
        </div> */}
        <div className='h-[145px]'>
        <div className='w-[249px] h-[99px] px-[16px] py-[317px] mt-8'>
        <div className='w-[38px] h-[61px]'>
       
        
        </div>
        </div>
         </div>
         </div>
         
    </div>

    </>
  )
}

export default Product
