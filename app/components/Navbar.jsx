"use client"
import React, { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const path = usePathname()
    const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      if (scrollTop > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <div className={`flex lg:px-[100px] sm:px-[50px] p-[20px] fixed flex-row justify-between w-full items-center py-4 ${scrolled ? 'bg-white backdrop-blur-md' : ''}`}>

            <a href="" className='text-[24px] flex flex-row gap-[10px] font-[700] items-center'>
                <div className={`w-8 h-8 rounded-full ${scrolled ? 'bg-[#46973B]' : 'bg-[#46973B]'}`}></div><span className={`text-[20px] font-[900] ${scrolled ? 'text-black' : 'text-white'}`}>FSC</span>
            </a>
            <div className={`flex flex-row gap-[40px] ${scrolled ? "text-black" : (`${path !=='/' ? 'text-balck' : 'text-white'}`)} `}>
                <a href="#" className='text-[18px] font-[400]'>Home</a>
                <a href="#" className='text-[18px] font-[400]'>About us</a>
                <a href="#" className='text-[18px] font-[400]'>Our Service</a>
                <a href="#" className='text-[18px] font-[400]'>Contact us</a>
                <a href="#" className='text-[18px] font-[400]'>Blogs</a>
            </div>
            <div>
                <a href="#" className={`px-[40px] py-3 ${scrolled ? 'bg-[#46973B] text-white' : 'bg-[#46973B] text-white'} `}>Contact us</a>
            </div>
        

      
    </div>
  )
}

export default Navbar
