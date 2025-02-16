import React from 'react'
import Image from 'next/image'

const Banner = () => {
  return (
    <>
     <div className='flex wrapper'>
     <div >
     <Image src="/image/banner.jpg" alt="banner" width={1440} height={716} />
      </div>
     </div>
 
    </>
  )
}

export default Banner