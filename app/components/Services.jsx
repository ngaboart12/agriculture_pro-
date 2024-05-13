import Image from "next/image";
import React from "react";

function Services() {
  const services = [
    {
      name: "Ubworozi",
      description:
        " Providing expert advice on crop selection, cultivation techniques, and pest management.",
      image: "/image/agricultor.jpg",
    },
    {
      name: "Ubuhinzi",
      description:
        "Offering soil testing services to assess nutrient levels, pH balance, and soil composition.",
      image: "/image/service2.jpg",
    },
    {
      name: "Giri Inka",
      description:
        "Recommending and supplying pesticides, herbicides, and other crop protection products.",
      image: "/image/cow.png",
    },
    {
      name: "Gutsindira isoko",
      description:
        "Recommending and supplying pesticides, herbicides, and other crop protection products.",
      image: "/image/cow.png",
    },
  ];
  return (
    <div className=" flex flex-col gap-[60px] py-10 px-[10px] md:px[50px] lg:px-[100px] rounded-[4px]  items-center bg-gradient-to-tr from-blue-50 to-gray-100">
      <div className="p-10 w-full flex flex-col gap-[20px]  rounded-md">
        <div className="flex flex-col gap-[2px] items-center">
          <h1 className="text-[32px] font-[600] text-black">Our Service</h1>
          <div className="h-[3px] w-[100px] bg-black"></div>
          <span className="text-center max-w-[600px] text-black leading-5">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum magni
            voluptatum delectus soluta impedit laboriosam, deleniti et! Enim
            animi culpa quae rem eos nemo perferendis, laudantium fugiat, dicta,
            quo eum?
          </span>
        </div>
        <div className="grid grid-cols-2 gap-[20px]">
         {services.map((item,index)=>{
          return(
            <div className={`flex fle-row p-4 gap-[10px]`}>
              <div className="w-20 h-20 bg-gray-200 rounded-[12px]">
                <Image src={item.image} width={300} height={0} className="w-full h-full object-cover rounded-[12px]"/>
              </div>
              <div className="flex flex-col gap-[2px] max-w-[300px]">
                <h1 className="text-[20px] font-[500]">{item.name}</h1>
                <h1 className="text-[14px] leading-4">{item.description}</h1>
                <div className="flex flex-row items-center gap-[6px]">
                <a href="" className="text-[13px] text-green-400 font-[600]">Read more</a>
                {`->`}

                </div>
              </div>
            </div>
          )
         })}
           
          
        </div>
      </div>
    </div>
  );
}

export default Services;
