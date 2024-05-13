import React from 'react'

const Footer = () => {
  return (
    <div className='py-10 px-[10px] md:px-[50px] lg:px-[100px] bg-green-600 flex flex-col gap-[20px] items-center'>
        <div className='grid grid-cols-4 w-full gap-[20px]'>
            <div className='flex flex-col'>
                <span className='text-[24px] font-[900] text-white'>Get In Touch</span>
                <span>Email,phone and others</span>
            </div>
            <div className='flex flex-col'>
                <span className='text-[20px] font-[600] text-white'>Email</span>
                <span className='text-gray-300'>info@gmail.com</span>
            </div>
            <div className='flex flex-col'>
                <span className='text-[20px] font-[600] text-white'>Phone</span>
                <span className='text-gray-300'>0788234623</span>
            </div>
            <div className='flex flex-col'>
                <span className='text-[20px] font-[600] text-white'>Location</span>
                <span className='text-gray-300'>Kanombe kk 270st</span>
            </div>
           

        </div>
    </div>
  )
}

export default Footer