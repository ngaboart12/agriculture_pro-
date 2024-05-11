import Image from 'next/image'
import React from 'react'

function Services() {
    const services = [
        {
            name: 'Crop Consultation',
            description: ' Providing expert advice on crop selection, cultivation techniques, and pest management.',
            image: '/image/agricultor.jpg'
        },
        {
            name: 'Soil Testing and Analysis',
            description: 'Offering soil testing services to assess nutrient levels, pH balance, and soil composition.',
            image: '/image/service2.jpg'
        },
        {
            name: 'Crop Protection Solutions',
            description: 'Recommending and supplying pesticides, herbicides, and other crop protection products.',
            image: '/image/cow.png'
        },
    ]
  return (
<div className='lg:px-[100px] sm:px-[50px] flex flex-col gap-[60px] py-10 items-center bg-gradient-to-tr from-blue-50 to-gray-100'>
    <div className='flex flex-col gap-[2px] items-center'>
    <h1 className='text-[32px] font-[600]'>Our Service</h1>
    <div className='h-[3px] w-[100px] bg-green-500'></div>

    </div>

    <div className="grid grid-cols-3 gap-[40px] w-full">
        {services.map((item,index)=>{
            return(
                <div key={index} className={` w-full flex flex-col ${index === 1 && 'flex-col-reverse'} gap-[10px] p-4`}>
                    <div className='w-full h-[50vh]'>
                        <Image src={item.image} alt={item.name} width={5000} height={0} className={`w-full h-full object-cover ${index == 1 ? 'rounded-b-[12px]' : ' rounded-t-[10px]   '}`}/>
                     
                    </div>
                    <div className='flex flex-col gap-[10px] items-center'>
                        <h1 className='text-[16px] font-[600] uppercase'>{item.name}</h1>
                        <span className='text-center text-[14px]'>
                            {item.description}
                        </span>
                    </div>
                </div>
            )
        })}

    </div>
        </div>
  )
}

export default Services
