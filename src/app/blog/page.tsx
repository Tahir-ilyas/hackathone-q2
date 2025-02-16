
import React from 'react'
import { RightOutlined, SearchOutlined, TrophyOutlined, FileProtectOutlined, DeliveredProcedureOutlined, CustomerServiceOutlined, UserOutlined, CalendarFilled, TagsFilled } from '@ant-design/icons'
import Image from 'next/image'

const page = () => {
  return (
    <>
      {/* Header Section */}
      <div className='w-full h-[316px] relative wrapper'>
        <img src="image/shop1.png" alt="shop" className="w-full h-full object-cover" />
        <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center'>
          <h1 className='text-[32px] md:text-[48px] font-medium'>Blog</h1>
          <div className='flex justify-center items-center gap-2 mt-2'>
            <h3 className='text-black text-lg'>Home</h3>
            <RightOutlined />
            <h3 className='text-black text-lg'>Blog</h3>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className='flex flex-col lg:flex-row container mx-auto px-4 lg:px-16 py-10'>
        {/* Blog Posts */}
        <div className='w-full lg:w-2/3'>
          {[
            { img: "image/laptop1.png", title: "Going all-in with millennial design", category: "Wood" },
            { img: "image/pen.png", title: "Exploring new ways of decorating", category: "Handmade" },
            { img: "image/diary.png", title: "Handmade pieces that took time to make", category: "Wood" }
          ].map((post, index) => (
            <div key={index} className="mb-10">
              <img src={post.img} alt="blog" className='w-full max-w-[817px] mx-auto h-auto' />
              <div className='flex justify-between text-gray-500 text-sm mt-3 px-4'>
                <div className='flex items-center'><UserOutlined className='mr-2' /> Admin</div>
                <div className='flex items-center'><CalendarFilled className='mr-2' /> 14 Oct 2022</div>
                <div className='flex items-center'><TagsFilled className='mr-2 rotate-90' /> {post.category}</div>
              </div>
              <h1 className='text-[24px] md:text-[30px] font-medium px-4 mt-4'>{post.title}</h1>
              <p className='text-justify text-[15px] px-4 mt-2 leading-relaxed'>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
              <h3 className='underline text-blue-600 px-4 mt-3'>Read more</h3>
            </div>
          ))}

          {/* Pagination */}
          <div className='flex justify-center space-x-4 mt-10'>
            {[1, 2, 3, "Next"].map((item, index) => (
              <button key={index} className={`w-[60px] h-[60px] rounded-lg ${item === 1 ? 'bg-[#B88E2F] text-white' : 'bg-[#F9F1E7]'}`}>
                <p className='text-[20px]'>{item}</p>
              </button>
            ))}
          </div>
        </div>

        {/* Sidebar */}
        <div className='w-full lg:w-1/3 mt-10 lg:mt-0 lg:ml-10'>
          {/* Search Bar */}
          <div className="relative">
            <input type="text" className='w-full h-10 pl-4 border border-gray-400 rounded' placeholder="Search..." />
            <SearchOutlined className='absolute top-3 right-4 text-gray-500' />
          </div>

          {/* Categories */}
          <div className='mt-8'>
            <h3 className='text-[18px] font-medium mb-4'>Categories</h3>
            <div className="grid grid-cols-2 gap-x-4 gap-y-2">
              {["Crafts", "Design", "Handmade", "Interior", "Wood"].map((cat, index) => (
                <React.Fragment key={index}>
                  <p className='text-gray-500'>{cat}</p>
                  <p className='text-gray-500 text-right'>{[2, 8, 7, 1, 6][index]}</p>
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* Recent Posts */}
          <div className='mt-10'>
            <h3 className='text-[18px] font-medium mb-4'>Recent Posts</h3>
            <div className="space-y-6">
              {[
                { img: "image/pen1.png", title: "Going all-in with millennial design" },
                { img: "image/read.png", title: "Exploring new ways of decorating" },
                { img: "image/cup.png", title: "Handmade pieces that took time to make" },
                { img: "image/mobile.png", title: "Modern home in Milan" },
                { img: "image/office.png", title: "Colorful office redesign" }
              ].map((post, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <img src={post.img} alt="post" className="w-16 h-16 object-cover" />
                  <div>
                    <p className='text-sm font-medium'>{post.title}</p>
                    <p className='text-xs text-gray-500'>03 Aug 2022</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className='w-full bg-[#FAF3EA] py-12 wrapper'>
        <div className='container mx-auto flex flex-wrap justify-center gap-6'>
          {[
            { icon: <TrophyOutlined />, title: "High Quality", desc: "Crafted from top materials" },
            { icon: <FileProtectOutlined />, title: "Warranty Protection", desc: "Over 2 years" },
            { icon: <DeliveredProcedureOutlined />, title: "Free Shipping", desc: "Order over $150" },
            { icon: <CustomerServiceOutlined />, title: "24/7 Support", desc: "Dedicated support" }
          ].map((service, index) => (
            <div key={index} className="flex items-center space-x-4 w-full md:w-1/2 lg:w-auto">
              <div className="text-3xl">{service.icon}</div>
              <div>
                <p className='text-lg font-semibold'>{service.title}</p>
                <p className='text-gray-500 text-sm'>{service.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default page
