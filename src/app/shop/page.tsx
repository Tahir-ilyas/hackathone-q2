
import {FilterOutlined,  RightOutlined,AppstoreOutlined,PicCenterOutlined} from '@ant-design/icons'
import Image from 'next/image'

const products = [
    {
        
        image:"/image/pro1.png",
        text:"Syltherine",
        text2:"Stylish cafe chair",
        price:"Rp 2.500.000 ",
        oldPrice:"Rp 3.500.000",
        discount:"-30%"
    },
    {
        
        image:"/image/pro2.png",
        text:"Leviosa",
        text2:"Stylish cafe chair",
        price:"Rp 2.500.000 ",
        oldPrice:"Rp 3.500.000"
    },
    {
        
        image:"/image/pro3.png",
        text:"Lolito",
        text2:"Luxury big sofa",
        price:"Rp 7.000.000 ",
        oldPrice:"Rp 14.000.000",
        discount:"-50%"
    },
    {
        
        image:"/image/pro4.png",
        text:"Respira",
        text2:"Outdoor bar table and stool",
        price:"Rp 500.000",
        collection:"New"
    },
    {
        image:"/image/pro1.png",
        text:"Syltherine",
        text2:"Stylish cafe chair",
        price:"Rp 2.500.000 ",
        oldPrice:"Rp 3.500.000",
        discount:"-30%"
        
    },
    {
        
        image:"/image/pro2.png",
        text:"Leviosa",
        text2:"Stylish cafe chair",
        price:"Rp 2.500.000 ",
        oldPrice:"Rp 3.500.000"
    },
    {
        
        image:"/image/pro3.png",
        text:"Lolito",
        text2:"Luxury big sofa",
        price:"Rp 7.000.000 ",
        oldPrice:"Rp 14.000.000",
        discount:"-50%"
    },
    {
        
        image:"/image/pro4.png",
        text:"Respira",
        text2:"Outdoor bar table and stool",
        price:"Rp 500.000",
        collection:"New"
    },
    {
        
        image:"/image/pro1.png",
        text:"Syltherine",
        text2:"Stylish cafe chair",
        price:"Rp 2.500.000 ",
        oldPrice:"Rp 3.500.000",
        discount:"-30%"
    },
    {
        
        image:"/image/pro2.png",
        text:"Leviosa",
        text2:"Stylish cafe chair",
        price:"Rp 2.500.000 ",
        oldPrice:"Rp 3.500.000"
    },
    {
        
        image:"/image/pro3.png",
        text:"Lolito",
        text2:"Luxury big sofa",
        price:"Rp 7.000.000 ",
        oldPrice:"Rp 14.000.000",
        discount:"-50%"
    },
    {
        
        image:"/image/pro4.png",
        text:"Respira",
        text2:"Outdoor bar table and stool",
        price:"Rp 500.000",
        collection:"New"
    },
    {
        image:"/image/pro1.png",
        text:"Syltherine",
        text2:"Stylish cafe chair",
        price:"Rp 2.500.000 ",
        oldPrice:"Rp 3.500.000",
        discount:"-30%"
        
    },
    {
        
        image:"/image/pro2.png",
        text:"Leviosa",
        text2:"Stylish cafe chair",
        price:"Rp 2.500.000 ",
        oldPrice:"Rp 3.500.000"
    },
    {
        
        image:"/image/pro3.png",
        text:"Lolito",
        text2:"Luxury big sofa",
        price:"Rp 7.000.000 ",
        oldPrice:"Rp 14.000.000",
        discount:"-50%"
    },
    {
        
        image:"/image/pro4.png",
        text:"Respira",
        text2:"Outdoor bar table and stool",
        price:"Rp 500.000",
        collection:"New"
    },
   

]

const Shop = () => {
   
    return (
      <>
<div className="w-full h-auto md:h-[316px] wrapper">
  <img src="image/shop1.png" alt="" className="w-full h-[200px] object-cover md:h-auto" />
  <div className="mt-[-120px] md:mt-[-190px]">
    <h1 className="text-center font-poppins font-medium text-[28px] md:text-[48px]">Shop</h1>
    <div className="w-auto md:w-[48px] h-auto flex flex-wrap justify-center gap-2">
      <h3 className="font-poppins text-[#000000] text-lg md:text-base ">Home</h3>
      <RightOutlined className="text-xs md:w-20" />
      <h3 className="font-poppins text-[#000000] text-sm md:text-base">Shop</h3>
    </div>
    <div className="h-auto mt-[40px] md:mt-[80px] bg-[#F9F1E7] wrapper">
      <div className="flex flex-wrap justify-between px-4 md:px-10">
        <div className="flex items-center">
          <FilterOutlined className="text-sm md:text-lg" />
          <h3 className="ml-2 font-poppins text-sm md:text-[20px] text-[#000000]">Filter</h3>
        </div>
        <div className="flex gap-4">
          <AppstoreOutlined className="text-sm md:text-lg" />
          <PicCenterOutlined className="text-sm md:text-lg" />
        </div>
      </div>
    </div>
  </div>
</div>
<div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-4 md:px-10 items-start wrapper mt-10">
  {products.map((Product, index) => (
    <div key={index} className="relative">
      {Product.discount && (
        <div className="absolute top-2 right-2 w-[30px] h-[30px] flex items-center justify-center bg-red-500 text-white text-xs rounded-full md:w-[38px] md:h-[38px] md:text-sm">
          {Product.discount}
        </div>
      )}
      {Product.collection && (
        <div className="absolute top-2 right-2 w-[30px] h-[30px] flex items-center justify-center bg-green-500 text-white text-xs rounded-full md:w-[38px] md:h-[38px] md:text-sm">
          {Product.collection}
        </div>
      )}
      <Image
        src={Product.image}
        alt=""
        width={285}
        height={301}
        className="w-full h-[200px] md:w-[285px] md:h-[301px] object-cover mb-4"
      />
      <div className="text-left">
        <h3 className="font-poppins font-semibold text-base md:text-lg text-[#3A3A3A]">{Product.text}</h3>
        <p className="font-poppins font-medium text-sm md:text-base text-[#898989]">{Product.text2}</p>
        <div className="flex items-center">
          <p className="font-poppins font-semibold text-sm md:text-lg text-[#3A3A3A]">{Product.price}</p>
          {Product.oldPrice && (
            <p className="ml-2 text-sm md:text-base text-[#B0B0B0] line-through">{Product.oldPrice}</p>
          )}
        </div>
        
      </div>
    </div>
  ))}
</div>
</>
  )
}

export default Shop