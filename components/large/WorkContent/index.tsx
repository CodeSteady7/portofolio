import ContentWork from "./contentwork";
export default function WorkContent() {
  return (
    <div className='pt-5  min-h-screen flex flex-col justify-center bg-gradient-to-r from-[#4eacf9] to-[#0A8AF3] '>
      <div className='pb-[20px] flex justify-center'>
        <h2 className='text-2xl '>
          <span className='text-[#FFD807] font-bold'>02.</span>
          {"  "}
          <span className='text-3xl font-bold text-white '>
            Where I’ve Worked
          </span>
        </h2>
      </div>
      <div className='flex justify-center '>
        <ContentWork />
      </div>
    </div>
  );
}
