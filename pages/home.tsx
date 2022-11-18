import "swiper/css/pagination";
import ContactUs from "../components/large/ContactUs";
import MenuContent from "../components/large/MenuContent";
import Navbar from "../components/large/navbar";
import ProfileContent from "../components/large/ProfileContent";
import ProjectContent from "../components/large/ProjectContent";
import WorkContent from "../components/large/WorkContent";
import MediaSocial from "../components/medium/mediasocial";
import Email from "../components/medium/mediasocial/email";

export default function Home() {
  return (
    <>
      <div className='App  bg-[#F5FCFF] h-screen w-full  font-opensans '>
        <MediaSocial />
        <Email />

        <div className='bg-gradient-to-r from-[#4eacf9] to-[#0A8AF3]'>
          {/* navbar */}
          <Navbar />
          {/* content Menu */}
          <MenuContent />
        </div>

        {/* profile */}
        <ProfileContent />

        {/* worked */}

        <WorkContent />

        {/* project  */}
        {/* <ProjectContent /> */}
        <div className='mt-20 px-32 min-h-screen '>
          <div className='pb-8 flex flex-row justify-center'>
            <h2 className='text-2xl '>
              <span className='text-blue-700 font-semibold'>03.</span>
              {"  "}
              <span className='text-3xl font-bold'>My Project</span>
            </h2>
          </div>
          <div className='px-10 flex pt-3 flex-row justify-center flex-wrap'>
            {/* <div> */}
            <div className=' flex flex-col justify-center w-[350px] h-[350px] shadow-md p-8 relative rounded-lg mx-6'>
              <h2 className='text-[25px] font-semibold text-gray-700 pb-2'>
                Website Top Up Game
              </h2>
              <p className='text-[18px] font-medium '>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Expedita minima hic consequatur.
              </p>
              <span className='text-[17px] font-medium mt-4'>
                NextJs, ReactJs, NodeJs
              </span>
              <div className='absolute bottom-8 right-8 bg-blue-500 py-1 px-6 rounded-md '>
                <a
                  type='button'
                  className='text-white font-medium text-[15px] '
                >
                  View
                </a>
              </div>
            </div>
            <div className=' flex flex-col justify-center w-[350px] h-[350px] shadow-md p-8 relative rounded-lg mx-6'>
              <h2 className='text-[25px] font-semibold text-gray-700 pb-2'>
                Website Top Up Game
              </h2>
              <p className='text-[18px] font-medium '>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Expedita minima hic consequatur.
              </p>
              <span className='text-[17px] font-medium mt-4'>
                NextJs, ReactJs, NodeJs
              </span>
              <div className='absolute bottom-8 right-8 bg-blue-500 py-1 px-6 rounded-md '>
                <a
                  type='button'
                  className='text-white font-medium text-[15px] '
                >
                  View
                </a>
              </div>
            </div>
            <div className=' flex flex-col justify-center w-[350px] h-[350px] shadow-md p-8 relative rounded-lg mx-6'>
              <h2 className='text-[25px] font-semibold text-gray-700 pb-2'>
                Website Top Up Game
              </h2>
              <p className='text-[18px] font-medium '>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Expedita minima hic consequatur.
              </p>
              <span className='text-[17px] font-medium mt-4'>
                NextJs, ReactJs, NodeJs
              </span>
              <div className='absolute bottom-8 right-8 bg-blue-500 py-1 px-6 rounded-md '>
                <a
                  type='button'
                  className='text-white font-medium text-[15px] '
                >
                  View
                </a>
              </div>
            </div>
            <div className=' flex flex-col justify-center w-[350px] h-[350px] shadow-md p-8 relative rounded-lg m-6'>
              <h2 className='text-[25px] font-semibold text-gray-700 pb-2'>
                Website Top Up Game
              </h2>
              <p className='text-[18px] font-medium '>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Expedita minima hic consequatur.
              </p>
              <span className='text-[17px] font-medium mt-4'>
                NextJs, ReactJs, NodeJs
              </span>
              <div className='absolute bottom-8 right-8 bg-blue-500 py-1 px-6 rounded-md '>
                <a
                  type='button'
                  className='text-white font-medium text-[15px] '
                >
                  View
                </a>
              </div>
            </div>
            <div className=' flex flex-col justify-center w-[350px] h-[350px] shadow-md p-8 relative rounded-lg mx-6'>
              <h2 className='text-[25px] font-semibold text-gray-700 pb-2'>
                Website Top Up Game
              </h2>
              <p className='text-[18px] font-medium '>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Expedita minima hic consequatur.
              </p>
              <span className='text-[17px] font-medium mt-4'>
                NextJs, ReactJs, NodeJs
              </span>
              <div className='absolute bottom-8 right-8 bg-blue-500 py-1 px-6 rounded-md '>
                <a
                  type='button'
                  className='text-white font-medium text-[15px] '
                >
                  View
                </a>
              </div>
            </div>
            <div className=' flex flex-col justify-center w-[350px] h-[350px] shadow-md p-8 relative rounded-lg mx-6'>
              <h2 className='text-[25px] font-semibold text-gray-700 pb-2'>
                Website Top Up Game
              </h2>
              <p className='text-[18px] font-medium '>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Expedita minima hic consequatur.
              </p>
              <span className='text-[17px] font-medium mt-4'>
                NextJs, ReactJs, NodeJs
              </span>
              <div className='absolute bottom-8 right-8 bg-blue-500 py-1 px-6 rounded-md '>
                <a
                  type='button'
                  className='text-white font-medium text-[15px] '
                >
                  View
                </a>
              </div>
            </div>
          </div>
          {/* </div> */}
        </div>

        {/* contact us*/}
        <ContactUs />
      </div>
    </>
  );
}
