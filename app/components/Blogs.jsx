import React from "react";

const Blogs = () => {
  const agricultureBlogs = [
    {
      id: 1,
      title: "10 Sustainable Farming Practices Every Farmer Should Know",
      description:
        "Learn about sustainable farming techniques that can improve yields while preserving the environment.",
    },
    {
      id: 2,
      title: "The Role of Technology in Modern Agriculture",
      description:
        "Explore how advancements in technology are revolutionizing the agricultural industry, from precision farming to drones.",
    },
    {
      id: 3,
      title: "Organic Farming: Benefits and Challenges",
      description:
        "Discover the advantages of organic farming for both consumers and the environment, as well as the challenges faced by organic farmers.",
    },
    {
      id: 4,
      title: "How to Start Your Own Vegetable Garden",
      description:
        "Get practical tips and advice for starting a successful vegetable garden, whether you have a large plot of land or just a small backyard.",
    },
    {
      id: 5,
      title: "Managing Pest and Disease in Crops",
      description:
        "Learn about effective strategies for pest and disease management in agricultural crops, including integrated pest management (IPM) techniques.",
    },
    {
      id: 5,
      title: "Managing Pest and Disease in Crops",
      description:
        "Learn about effective strategies for pest and disease management in agricultural crops, including integrated pest management (IPM) techniques.",
    },
  ];

  return (
    <div className="py-10 px-[10px] md:px-[50px] lg:px-[100px] flex flex-col gap-[20px] items-center">
      <div className='flex flex-col gap-[2px] items-center'>
    <h1 className='text-[32px] font-[600]'>Our Insights</h1>
    <div className='h-[3px] w-[100px] bg-green-500'></div>

    </div>
      <span className="text-center max-w-[600px] leading-6">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum nihil
        harum tempore neque debitis delectus consectetur modi beatae sunt
        incidunt fugiat maiores placeat, quaerat repudiandae quas recusandae rem
        maxime quam?
      </span>
      <div className="grid grid-cols-3 gap-[20px] w-full">
        {agricultureBlogs.slice(0,3).map((item, index) => {
          return (
            <div className="flex flex-col w-full ">
              <div className="h-[30vh] bg-gray-200"></div>
              <div className="flex flex-col p-4 overflow-hidden">
                <div className="flex flex-col  h-[18vh]">

                <h1 className="text-[16px] font-[700] line-clamp-2">{item.title}</h1>
                <span className="text-[14px] line-clamp-2">{item.description}</span>
                </div>
                <div className="flex flex-row gap-[2px] justify-between">
                    <span>16th May</span>
                    <a href="#" className="text-green-600">Read more</a>
              
                    </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Blogs;
