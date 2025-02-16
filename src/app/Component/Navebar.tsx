
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Form from "next/form";
import { UserOutlined, SearchOutlined, HeartOutlined, ShoppingCartOutlined } from '@ant-design/icons';

const Navebar = () => {
  return (
    <div className="w-full h-auto justify-center mx-auto wrapper  bg-white">
      <div className="w-full max-w-[1286px] px-4 md:px-[54px] py-4 md:py-[29px] flex flex-col md:flex-row items-center justify-between">
        {/* Logo Section */}
        <div className="flex items-center w-auto md:w-[185px] h-auto md:h-[41px]">
          <Image src="/image/logo.png" alt="logo" width={50} height={32} />
          <p className="font-bold text-[24px] md:text-[34px] ml-2">Furniro</p>
        </div>

        {/* Navigation Links */}
        <div className="w-full md:w-auto flex justify-center mt-4 md:mt-0">
          <ul className="flex flex-col md:flex-row gap-4 md:gap-[80px] text-center">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/shop">Shop</Link>
            </li>
            <li>
              <Link href="/blog">Blog</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>

        {/* Icons Section */}
        <div className="flex justify-center items-center gap-4 mt-4 md:mt-0">
          <Link href="/loginForm">
            <UserOutlined className="text-[20px]" />
          </Link>
          <Link href="/productComparision">
            <HeartOutlined className="text-[20px]" />
          </Link>
          <Link href="/SearchBar">
            <SearchOutlined className="text-[20px]" />
          </Link>
          <Link href="/cart">
            <ShoppingCartOutlined className="text-[20px]" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navebar;

