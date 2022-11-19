import Link from "next/link";
import { useState } from "react";

export default function PortofolioProject() {
  const [noOfElement, setNoOfElement] = useState(3);
  interface DataTypeContent {
    title: string;
    description: string;
    unix: string;
    link?: string;
  }

  let listdata: DataTypeContent[] = [
    {
      title: "WebsiteGame",
      description:
        "The website is integrated with the API from the back end using a web service with Node JS, this website is used to fill in game vouchers",
      unix: "NextJs, ReactJs, Nodejs",
      link: "https://webgame.webdevgroupid.com",
    },
    {
      title: "E-Commerce",
      description:
        "Integrated e-commerce website using React JS on the front end and Node JS on the back end",
      unix: " ReactJs, Nodejs",
      link: "",
    },
    {
      title: "UI GPT-3 OpenAI",
      description:
        "The responsive website UI display is built only on the front end using React JS",
      unix: "ReactJs",
      link: "http://openai-ui.webdevgroupid.com/",
    },
  ];

  const slice = listdata.slice(0, noOfElement);

  const LoadMore = () => {
    setNoOfElement(
      noOfElement <= listdata.length ? noOfElement + noOfElement : noOfElement
    );
  };

  return (
    <div className='mt-20 px-32 min-h-screen xlx:px-10 bg-white'>
      <div className='pb-8 flex flex-row justify-center'>
        <h2 className='text-2xl '>
          <span className=' font-semibold'>03.</span>
          {"  "}
          <span className='text-3xl font-bold'>My Project</span>
        </h2>
      </div>
      <div className='px-10 flex pt-3 flex-row justify-center flex-wrap xlx:px-2'>
        {slice.map((item, key) => {
          return (
            <>
              <div className=' flex flex-col justify-center w-[350px] h-[350px] shadow-md p-8 relative rounded-lg mx-6'>
                <h2 className='text-[25px] font-semibold text-gray-700 pb-2'>
                  {item.title}
                </h2>
                <p className='text-[18px] font-medium '>{item.description}</p>
                <span className='text-[17px] font-medium mt-4'>
                  {item.unix}
                </span>
                <div className='absolute bottom-8 right-8 bg-blue-500 py-1 px-6 rounded-md '>
                  <Link legacyBehavior href={item.link}>
                    <a
                      type='button'
                      className='text-white font-medium text-[15px] '
                    >
                      View
                    </a>
                  </Link>
                </div>
              </div>
            </>
          );
        })}
      </div>
      <div className='flex flex-row justify-center '>
        <div
          className={` flex justify-center mt-10 w-[8rem] bg-[#0A8AF3] py-2 px-3 text-white rounded-md text-lg font-semibold hover:opacity-70 ${
            noOfElement < listdata.length ? "" : "hidden"
          }`}
          onClick={() => LoadMore()}
        >
          <button>Load More</button>
        </div>
      </div>
    </div>
  );
}
