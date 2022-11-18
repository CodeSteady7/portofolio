import React from "react";

export default function ProfileContent() {
  return (
    <div className='py-12 px-32 min-h-screen bg-white lg:px-10'>
      <div className='pb-10'>
        <h2 className='text-2xl '>
          <span className='text-gray-700 font-semibold'>01.</span>
          {"  "}
          <span className='text-3xl font-bold text-gray-700'>About Me</span>
        </h2>
      </div>
      <div className='flex flex-wrap justify-between '>
        {/* <div className='flex'> */}
        <div className='max-w-[50%] md:max-w-[100%] md:pb-5 flex flex-col justify-center'>
          <p className='text-left text-[25px] text-gray-700 sm:text-[20px]'>
            <span className='font-bold text-[40px] sm:text-[30px]'> Hi ! </span>
            my name is Chairul Ikhsan and i graduated from the Lhokseumawe State
            Polytechnic campus in Indonesia. I love making things live on the
            internet. My interest in web development started in 2019 when I was
            assigned to create an e-commerce website while in college, it taught
            me a lot about HTML, CSS & Javascript.
            <br />
            <br />
            Right now I am focusing on Front End development, using React Js,
            Next Js and Node Js technologies.
            <br />
            <br />
            My focus right now is making a website that looks attractive and
            looks alive.
          </p>
        </div>
        <div className='flex md:justify-center max-w-[40%] md:max-w-[80%]  md:items-center md:ml-[40px] '>
          <div>
            <img src='/chairul.jpg' alt='' className='rounded-lg' />
          </div>
        </div>
      </div>
    </div>
  );
}
