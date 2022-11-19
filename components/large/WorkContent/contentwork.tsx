import { useState } from "react";
import BtnWork from "./btnWork";
import ContentWorkTab from "./contentWorkTab";

export default function ContentWork() {
  const [onTabClick, setOnTabClick] = useState("muslimlife");

  let setActive = "border-l-sky-800 shadow-md text-sky-800";
  const onSetClick = (value: string) => {
    setOnTabClick(value);
  };

  return (
    <div className='flex  w-[60%]  md:w-[100%] md:mx-10 shadow-md shadow-gray-800 px-4 pt-10 pb-28 bg-white'>
      <div className='flex flex-col min-w-[30%]'>
        <ul>
          <BtnWork
            title='Muslim Life'
            onClick={() => onSetClick("muslimlife")}
            active={onTabClick === "muslimlife" ? setActive : ""}
          />
          <BtnWork
            title='PT Perta Arun Gas'
            onClick={() => onSetClick("pag")}
            active={onTabClick === "pag" ? setActive : ""}
          />
        </ul>
      </div>
      <div className='pl-10'>
        {onTabClick === "muslimlife" ? (
          <ContentWorkTab
            title='Back End Developer'
            date='07 July 2021 - 07 Agust 2021'
            description='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci
          deleniti enim dolores aperiam suscipit ea ad facilis totam saepe doloribus obcaecati repudiandae animi eveniet vitae veniam culpa
          dicta, numquam magni.'
          />
        ) : (
          ""
        )}
        {onTabClick === "pag" ? (
          <ContentWorkTab
            title='Full Stack Developer'
            date='01 Mai 2022 - Now'
            description='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci
          deleniti enim dolores aperiam suscipit ea ad facilis totam saepe doloribus obcaecati repudiandae animi eveniet vitae veniam culpa
          dicta, numquam magni.'
          />
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
