import React from "react";

interface DataTypeContentWorkTab {
  title: string;
  date?: string;
  description?: string;
}

export default function ContentWorkTab(props: DataTypeContentWorkTab) {
  const { title, date, description } = props;
  return (
    <>
      <div className=' flex justify-start flex-col'>
        <div className='pb-6'>
          <h3 className='font-semibold text-[30px] text-zinc-800 xm:text-[20px]'>
            {title}
          </h3>
          <span className='font-medium text-zinc-800 xm:text-[14px]'>
            {date}
          </span>
        </div>
        <div className='xm:text-[15px]'>{description}</div>
      </div>
    </>
  );
}
