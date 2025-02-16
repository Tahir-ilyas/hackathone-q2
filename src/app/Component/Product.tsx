
import React from 'react'
import Image from 'next/image'

const products = [
    {
        image: "/image/pro1.png",
        text: "Syltherine",
        text2: "Stylish cafe chair",
        price: "Rp 2.500.000",
        oldPrice: "Rp 3.500.000",
        discount: "-30%"
    },
    {
        image: "/image/pro2.png",
        text: "Leviosa",
        text2: "Stylish cafe chair",
        price: "Rp 2.500.000",
        oldPrice: "Rp 3.500.000"
    },
    {
        image: "/image/pro3.png",
        text: "Lolito",
        text2: "Luxury big sofa",
        price: "Rp 7.000.000",
        oldPrice: "Rp 14.000.000",
        discount: "-50%"
    },
    {
        image: "/image/pro4.png",
        text: "Respira",
        text2: "Outdoor bar table and stool",
        price: "Rp 500.000",
        collection: "New"
    },
    {
        image: "/image/pro5.png",
        text: "Grifo",
        text2: "Night lamp",
        price: "Rp 1.500.000",
    },
    {
        image: "/image/pro6.png",
        text: "Muggo",
        text2: "Small mug",
        price: "Rp 150.000",
        collection: "New"
    },
    {
        image: "/image/pro7.png",
        text: "Pingky",
        text2: "Cute bed set",
        price: "Rp 7.000.000",
        oldPrice: "Rp 14.000.000",
        discount: "-50%"
    },
    {
        image: "/image/pro8.png",
        text: "Potty",
        text2: "Minimalist flower pot",
        price: "Rp 500.000",
        collection: "New"
    }
];

const Product = () => {
    return (
        <div className='max-w-[1236px] w-full mx-auto px-4 text-center mt-10 wrapper'>
            <h2 className='font-bold text-3xl md:text-4xl mb-6'>Our Products</h2>
            
            {/* Product Grid */}
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
                {products.map((product, index) => (
                    <div key={index} className="relative bg-white p-4 rounded-lg shadow-sm">
                        
                        {/* Discount / Collection Label */}
                        {product.discount ? (
                            <div className='absolute top-6 right-6 bg-red-500 text-white text-xs px-2 py-1 rounded-full'>
                                {product.discount}
                            </div>
                        ) : product.collection ? (
                            <div className='absolute top-6 right-6 bg-green-500 text-white text-xs px-2 py-1 rounded-full'>
                                {product.collection}
                            </div>
                        ) : null}

                        {/* Product Image */}
                        <Image 
                            src={product.image} 
                            alt={product.text} 
                            width={285} 
                            height={301} 
                            className='w-full object-cover rounded-md'
                        />

                        {/* Product Details */}
                        <div className='text-left mt-4'>
                            <h3 className='font-semibold text-lg'>{product.text}</h3>
                            <p className='text-gray-500 text-sm'>{product.text2}</p>
                            <div className='flex items-center space-x-2 mt-2'>
                                <p className='font-semibold text-lg'>{product.price}</p>
                                {product.oldPrice && (
                                    <p className='text-gray-400 line-through text-sm'>{product.oldPrice}</p>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Show More Button */}
            <div className='flex justify-center mt-6'>
                <button className='border-2 border-[#B88E2F] text-[#B88E2F] px-6 py-2 rounded-md font-medium hover:bg-[#B88E2F] hover:text-white transition'>
                    Show More
                </button>
            </div>
        </div>
    );
}

export default Product;

