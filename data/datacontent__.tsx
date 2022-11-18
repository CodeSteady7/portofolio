import React from "react";

export default function DataContent() {
  interface DataTypeContent {
    title: string;
    description: string;
    unix: string;
  }

  let listdata: DataTypeContent[] = [
    {
      title: "WebsiteGame",
      description: "WebsiteGame",
      unix: "WebsiteGame",
    },
    {
      title: "WebsiteGame",
      description: "WebsiteGame",
      unix: "WebsiteGame",
    },
    {
      title: "WebsiteGame",
      description: "WebsiteGame",
      unix: "WebsiteGame",
    },
    {
      title: "WebsiteGame",
      description: "WebsiteGame",
      unix: "WebsiteGame",
    },
  ];

  // const Datadummyjson: DataTypeContent[] = listdata;
  return (
    <>
      {console.log("dummy", listdata)}
      <div></div>
    </>
  );
}

// export const Listdata = [
//   {
//     title: "WebsiteGame",
//     description: "WebsiteGame",
//     unix: "WebsiteGame",
//   },
//   {
//     title: "WebsiteGame",
//     description: "WebsiteGame",
//     unix: "WebsiteGame",
//   },
//   {
//     title: "WebsiteGame",
//     description: "WebsiteGame",
//     unix: "WebsiteGame",
//   },
//   {
//     title: "WebsiteGame",
//     description: "WebsiteGame",
//     unix: "WebsiteGame",
//   },
// ];
