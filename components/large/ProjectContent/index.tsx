import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

export default function ProjectContent() {
  const swiper = useSwiper();

  return (
    <div className='pt-12 px-32 min-h-screen'>
      <div className='pb-8'>
        <h2 className='text-2xl '>
          <span className='text-blue-700 font-semibold'>03.</span>
          {"  "}
          <span className='text-3xl font-bold'>My Project</span>
        </h2>
      </div>
      <div className='flex justify-center carousal'>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={3}
          navigation
          scrollbar={{ draggable: true }}
          // pagination={{ clickable: true }}
          // onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide>
            <div className='relative w-[320px] h-[420px] shadow-md mx-3  bg-white rounded-lg'>
              <div className='relative '>
                <img
                  src='/chairul.jpg'
                  className='h-[220px] w-[100%] rounded-t-lg'
                />
              </div>
              <div className='p-6 '>
                <span className='text-gray-900 text-xl font-medium mb-2'>
                  Application Website Game
                </span>
                <p className='text-gray-700 text-base mb-4'>
                  Lorem ipsum dolor sit amet consectetur adipisicing
                </p>
                <div className=' absolute bottom-3 right-3 p-2 '>
                  <button
                    type='button'
                    className=' inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg active:shadow-lg transition duration-150 ease-in-out'
                  >
                    View Website
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='relative w-[320px] h-[420px] shadow-md mx-3  bg-white rounded-lg'>
              <div className='relative '>
                <img
                  src='/chairul.jpg'
                  className='h-[220px] w-[100%] rounded-t-lg'
                />
              </div>
              <div className='p-6 '>
                <span className='text-gray-900 text-xl font-medium mb-2'>
                  Application Website Game
                </span>
                <p className='text-gray-700 text-base mb-4'>
                  Lorem ipsum dolor sit amet consectetur adipisicing
                </p>
                <div className=' absolute bottom-3 right-3 p-2 '>
                  <button
                    type='button'
                    className=' inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg active:shadow-lg transition duration-150 ease-in-out'
                  >
                    View Website
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='relative w-[320px] h-[420px] shadow-md mx-3  bg-white rounded-lg'>
              <div className='relative '>
                <img
                  src='/chairul.jpg'
                  className='h-[220px] w-[100%] rounded-t-lg'
                />
              </div>
              <div className='p-6 '>
                <span className='text-gray-900 text-xl font-medium mb-2'>
                  Application Website Game
                </span>
                <p className='text-gray-700 text-base mb-4'>
                  Lorem ipsum dolor sit amet consectetur adipisicing
                </p>
                <div className=' absolute bottom-3 right-3 p-2 '>
                  <button
                    type='button'
                    className=' inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg active:shadow-lg transition duration-150 ease-in-out'
                  >
                    View Website
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='relative w-[320px] h-[420px] shadow-md mx-3  bg-white rounded-lg'>
              <div className='relative '>
                <img
                  src='/chairul.jpg'
                  className='h-[220px] w-[100%] rounded-t-lg'
                />
              </div>
              <div className='p-6 '>
                <span className='text-gray-900 text-xl font-medium mb-2'>
                  Application Website Game
                </span>
                <p className='text-gray-700 text-base mb-4'>
                  Lorem ipsum dolor sit amet consectetur adipisicing
                </p>
                <div className=' absolute bottom-3 right-3 p-2 '>
                  <button
                    type='button'
                    className=' inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg active:shadow-lg transition duration-150 ease-in-out'
                  >
                    View Website
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='relative w-[320px] h-[420px] shadow-md mx-3  bg-white rounded-lg'>
              <div className='relative '>
                <img
                  src='/chairul.jpg'
                  className='h-[220px] w-[100%] rounded-t-lg'
                />
              </div>
              <div className='p-6 '>
                <span className='text-gray-900 text-xl font-medium mb-2'>
                  Application Website Game
                </span>
                <p className='text-gray-700 text-base mb-4'>
                  Lorem ipsum dolor sit amet consectetur adipisicing
                </p>
                <div className=' absolute bottom-3 right-3 p-2 '>
                  <button
                    type='button'
                    className=' inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg active:shadow-lg transition duration-150 ease-in-out'
                  >
                    View Website
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
