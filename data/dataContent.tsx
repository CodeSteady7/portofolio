let listdata = [
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

interface DataTypeContent {
  title: string;
  description: string;
  unix: string;
}

export const DataDummy = () => {
  const Datadummyjson: DataTypeContent[] = listdata as DataTypeContent[];
};
