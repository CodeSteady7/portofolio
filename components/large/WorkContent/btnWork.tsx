import { useState } from "react";

interface DataTypeBtnWork {
  title: string;
  active?: string;
  onClick?: () => void;
}

export default function BtnWork(props: DataTypeBtnWork) {
  const { title, active = "", onClick } = props;

  return (
    <li className={` my-1 ${active} border-l-4 `} onClick={onClick}>
      <a
        className='p-3 text-[20px] font-semibold rounded block leading-normal xm:text-[15px]'
        data-toggle='tab'
        href='#link2'
        role='tablist'
      >
        {title}
      </a>
    </li>
  );
}
