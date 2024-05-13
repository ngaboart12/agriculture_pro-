import React from "react";

const Contactus = () => {
  return (
    <div className="py-10 px-[10px] md:px-[50px] lg:px-[100px] flex flex-col lg:flex-row gap-[10px] bg-gradient-to-tr from-blue-50 to-gray-100">
      <div className="w-full lg:w-1/2 flex flex-col gap-[20px]">
        <div className="flex flex-col gap-[2px]">
          <h1 className="text-[32px] font-[600]">Contact Us</h1>
          <div className="h-[3px] w-[100px] bg-green-500"></div>
        </div>
        <span className="max-w-[400px]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed repellat
          veritatis tenetur magnam odio blanditiis voluptate adipisci aliquid
        </span>
        <div className="flex flex-col">
          <a href="#">Info@gmail.com</a>
          <a href="#">0785566</a>
        </div>
        <div className="grid grid-cols-2 gap-[20px]">
          <div className="flex flex-col gap-[4px] w-full">
            <h1 className="font-[600]">Customer support</h1>
            <span className="text-[16px] leading-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed unde
              ipsam dolorum velit.
      
            </span>
          </div>
          <div className="flex flex-col gap-[4px] w-full">
            <h1 className="font-[600]">Feedback and suggestion</h1>
            <span className="text-[16px] leading-5 text-gray-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed unde
              ipsam dolorum velit.
          
            </span>
          </div>
        </div>
      </div>
      <div className="w-full lg:w-1/2 flex flex-col gap-[20px] px-14">
        <form action="" method="post" className="w-full p-5 bg-white rounded-[10px] flex flex-col gap-[20px]">
            <div className="flex flex-col gap-[2px]">
                <h1 className="text-[24px] font-[900]">Get In Touch</h1>
                <span>Lorem ipsum dolor sit amet</span>
            </div>
            <div className="flex flex-col gap-[10px] w-full">
                <div className="grid grid-cols-2 gap-[10px] w-full">
                    <input type="text" className="outline-none bg-none  border p-3 rounded-[12px]" placeholder="First Name" />
                    <input type="text" className="outline-none bg-none  border p-3 rounded-[12px]" placeholder="Last Name" />
                </div>
                <input type="text" className="outline-none bg-none  border p-2 rounded-[12px]" placeholder="Your Email" />
                <input type="text" className="outline-none bg-none  border p-2 rounded-[12px]" placeholder="Your Phone number" />
                <textarea type="text" className="outline-none bg-none  border p-3 rounded-[12px]" placeholder="How can we help?"></textarea>
                <button className="p-3 bg-green-500 text-white rounded-[12px]">Submit</button>
            </div>

        </form>
      </div>
    </div>
  );
};

export default Contactus;
