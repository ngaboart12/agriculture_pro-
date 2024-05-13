import Image from "next/image";
import Services from "./components/Services";
import Blogs from "./components/Blogs";
import Contactus from "./components/Contactus";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="">
      <div className="h-[100vh] lg:px-[100px] sm:px-[50px] w-full py-10">
        <Image
          src={`/image/background.jpg`}
          width={900}
          height={900}
          className="w-full absolute top-0 left-0 -z-10 h-full object-cover"
        />
        <div className="w-full absolute left-0 -z-10 h-full bg-black/70 object-cover top-0"></div>
        <div className="flex py-28 backdrop-blur-[px] flex-col gap-[10px] w-full items-center">
          <h1 className="text-[52px] font-[700] text-white max-w-[800px] text-center leading-[60px]">
            Harvest Guardians: Empowering Agriculture Heroes
          </h1>
          <span className="max-w-[800px] text-[16px] text-center text-white font-[400] leading-5">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione
            ut, impedit sed recusandae amet soluta magni, earum quasi
            perspiciatis quisquam ipsa ullam fugit fugiat? Tenetur asperiores
            reprehenderit nesciunt possimus mollitia. Lorem ipsum dolor sit
            amet, consectetur
          </span>
          <a
            href=""
            className="py-4 px-[40px] border text-white font-[600] uppercase hover:bg-[#46973B]"
          >
            Our Insights
          </a>
          <div className="grid grid-cols-3 w-[70%] gap-[4px]">
            <div className="bg-white/50 p-4 w-full flex flex-col gap-[1px] items-center ">
              <span className="text-[22px] font-[900]">20+</span>
              <span className="text-[20px] font-[500]">Exprience</span>
            </div>
            <div className="bg-[#46973B]/50 p-4 w-full flex flex-col gap-[1px] items-center ">
              <span className="text-[22px] text-white font-[900]">500+</span>
              <span className="text-[20px] text-white font-[500]">Workers</span>
            </div>
            <div className="bg-red-900/50  p-4 w-full flex flex-col gap-[1px] items-center ">
              <span className="text-[22px] text-white font-[900]">10</span>
              <span className="text-[20px] text-white font-[500]">
                Partners
              </span>
            </div>
          </div>
        </div>
      </div>
      <Services />

      <div className="px-[10px] sm:px-[50px] md:px-[100px] flex flex-col gap-[40px] w-full  py-10  bg-gradient-to-tr from-blue-50 to-gray-100">
        <div className="flex flex-col gap-[2px] items-center">
          <h1 className="text-[32px] font-[600]">About us</h1>
          <div className="h-[3px] w-[100px] bg-green-500"></div>
          <span className="text-[16px] max-w-[600px] text-center">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti
            aliquam officiis quia accusamus at, corporis ea explicabo excepturi
            corrupti animi ut perspiciatis ad quo, modi maxime provident
            quisquam vero facere.
          </span>
        </div>
        <div className="flex flex-col gap-[10px] items-center">

          <div className="flex flex-row gap-[10px] w-full">
            <div className="w-1/2 h-[60vh] p-4">
              <Image
                src={`/image/service2.jpg`}
                width={900}
                height={900}
                className="w-full h-full object-cover rounded-l-[20px]"
              />
            </div>
            <div className="w-1/2 flex flex-col gap-[10px] p-4">
              <div className="flex flex-col gap-[10px] ">
                <h1 className="text-[32px] font-[600]">Our Company</h1>
                <span className="text-[16px] max-w-[600px]">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti
            aliquam officiis quia accusamus at, corporis ea explicabo excepturi
            corrupti animi ut perspiciatis ad quo, modi maxime provident
            quisquam vero facere.
          </span>

          <span className="text-[16px] max-w-[600px]">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti
            aliquam officiis quia accusamus at, corporis ea explicabo excepturi
            corrupti animi ut perspiciatis ad quo, modi maxime provident
            quisquam vero facere.
          </span>

              </div>
            </div>
          </div>
        </div>
      </div>

      <Blogs/>

      <Contactus/>
      <Footer/>
    </main>
  );
}
