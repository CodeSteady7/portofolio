import React from "react";

export default function ContactUs() {
  // relative
  return (
    <div className='pt-12 px-32 min-h-screen lg:px-28 md:px-20 '>
      <div className='pb-8 flex justify-center '>
        <h2 className='text-2xl '>
          <span className=' font-semibold'>04.</span>
          {"  "}
          <span className='text-3xl font-bold'>Get In Touch</span>
        </h2>
      </div>
      <div className='flex justify-center  '>
        <div
          className='w-[60%] items-center text-center 
        md:w-[80%] xm:w-[100%] '
        >
          <span className='font-medium text-[25px] sm:text-[20px]'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
            esse error labore officia repudiandae magnam laboriosam illum,
            voluptate quos ab soluta facilis! Voluptatibus eos, deleniti
            assumenda repellendus tempore eveniet enim?
          </span>
          <div className='pt-10'>
            <button className='px-5 py-2  bg-[#0A8AF3] font-semibold text-white rounded-lg text-[20px] hover:opacity-90 '>
              Say Hello
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
