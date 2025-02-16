import React from 'react'
import Image from 'next/image'
const Furniture = () => {
  return (
    <>
    <div className='w-full h-[780px]  wrapper'>
    <div className='w-[356px] h-[86px] '>
        <div className='w-[222px] h-[30px] ml-[600px] mt-10 '>
            <h2 className='font-semibold text-[16px] text-[#616161]'>Share your setup with</h2>
        </div>
        <div>
        <h2 className=' font-bold text-[32px] text-[#3A3A3A] ml-[550px] leading-6'>#FuniroFurniture</h2>
        </div>
        <div className='w-[100px] h-[382px]'>
            <img src="/image/corner.png" alt="corner" />
        </div>
       </div>
       <div className='ml-[84px] w-[400px] h-[312px] mt-10'>  
            <img src="/image/laptop.png" alt="laptop" />
        </div>
        <div className='w-[190px] h-[323px] mt-2'>
            <img  src="/image/chair1.png" alt="chair"  />
        </div>
        <div className='w-[290px] h-[242px] ml-48 mt-[-320px]'>
         <img src="/image/surae.png" alt="surae"  />
         </div>
         <div className='w-[250px] h-[392px] ml-[495px] mt-[-480px]'>
            <img src="/image/dining1.png" alt="dining" />
         </div> 
         <div className='w-[290px] h-[348px] ml-[755px] mt-[-470px]'>
            <img src="/image/bed.png" alt="bed" />
         </div>
         <div className='w-[220px] h-[433px] ml-[1060px] mt-[-420px] '>
            <img src="/image/dining2.png" alt="dining2"/>
         </div>
         <div className='w-[178px] h-[242px] ml-[755px]'>
          <img src="/image/showpiece.png" alt="showpiece" />
         </div>
         <div className='w-[258px] h-[196px] ml-[945px] mt-[-240px]'>
          <img src="/image/kitchen.png" alt="kitchen" />
         </div>
    </div>
    </>
  )
}

export default Furniture

