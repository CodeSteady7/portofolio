import React from "react";
import BtnNavbar from "../../small/btn_navbar";

export default function MenuContent() {
  return (
    <div className='flex flex-wrap px-32 min-h-screen lg:px-10 md:flex md:flex-wrap sm:flex-col'>
      <div className='max-w-[60%] flex flex-col justify-center sm:pt-20 sm:max-w-[240px] '>
        <div className='font-bold text-gray-700 '>
          <span className='block text-2xl text-white mdx:text-[20px] xm:text-[15px]'>
            Hi, I am
          </span>
          <span
            className='block text-[70px] text-white 
                py-1 md:text-[60px] xm:text-[25px] mdx:text-[45px] sm:text-[30px] '
          >
            Chairul Ikhsan
          </span>
          <span className='text-5xl text-white md:text-5xl xm:text-[25px] mdx:text-[28px] sm:text-[20px]'>
            I am a{" "}
            <span className='text-[#FFD807] text-[60px] mdx:text-[50px] sm:text-[30px]'>
              {" "}
              Software Engineering{" "}
            </span>
          </span>
        </div>
        <p className=' md:w-[90%] pt-3 text-white text-[20px] font-bold w-8/12 text-justify mdx:text-[15px] xm:text-[10px] '>
          Front end Developer / Web Developer,
        </p>

        <div>
          <BtnNavbar className=' inline-block font-semibold text-xl text-white  py-2 px-8  outline outline-offset-2 outline-white rounded-md mt-6 hover:outline-gray-300' />
        </div>
      </div>
      <div className='flex justify-end w-[400px] mdx:w-[400px] max-w-[40%] items-center sm:pt-20 xm:w-[500px] sm:max-w-[240px]'>
        <img src='/img-laptop.png' alt='' />
      </div>
    </div>
  );
}
