import { useState } from "react";
import MenuNavbar from "../../medium/menu_navbar";
import BtnNavbar from "../../small/btn_navbar";
import Logo from "../../small/logo";

export default function Navbar() {
  const [iconClick, setIconClick] = useState(false);
  return (
    <>
      <div className='flex justify-between items-center px-32 py-8  flex-wrap shadow-md  w-full  bg-white lg:px-10  '>
        <Logo />
        <div className='flex  ml-10  space-x-10 pr-4 md:hidden  items-center'>
          <MenuNavbar />
          <BtnNavbar />
        </div>
        <div className='mdmin:hidden'>
          <div className='w-10 relative'>
            {iconClick ? (
              <img
                src='/close.png'
                alt=''
                onClick={() => setIconClick(false)}
                className='w-[26px]'
              />
            ) : (
              <img
                src='/menu.png'
                alt=''
                onClick={() => setIconClick(true)}
                className='w-[26px]'
              />
            )}
          </div>
        </div>
      </div>
      {iconClick && (
        <div className='flex justify-end'>
          <div className='flex flex-col w-4/5 h-4/5 absolute bg-[#1F2937]  items-center pt-24'>
            <MenuNavbar className='font-semibold text-xl  text-white hover:text-gray-500 my-8' />
            <BtnNavbar className='mt-4 font-semibold text-xl text-white hover:bg-blue-500 py-2 px-8 outline  outline-white  rounded-md' />
          </div>
        </div>
      )}
    </>
  );
}
