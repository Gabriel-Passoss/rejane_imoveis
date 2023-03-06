import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide} from "swiper/react";

import { SearchInput } from "../components/SearchInput";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export function SearchArea() {
  return (
    <div className="mt-[14vh] md:mt-[20vh] bg-background-body bg-cover flex justify-center items-end">
      <Swiper 
        modules={[Navigation, Pagination]}
        slidesPerView={1}
        loop={true}
        pagination={{ dynamicBullets: true}}
        navigation={true}
        className=""
        >
          <SwiperSlide className="flex justify-center">
            <img src="/slide1.webp" alt="Slide1" className="h-[50vh] md:h-[70vh] w-full md:w-[80vw]" />
          </SwiperSlide>

          <SwiperSlide className="flex justify-center">
            <img src="/slide2.webp" alt="Slide2" className="h-[50vh] md:h-[70vh] w-full md:w-[80vw]" />
          </SwiperSlide>

          <SwiperSlide className="flex justify-center">
            <img src="/slide3.jpeg" alt="Slide3" className="h-[50vh] md:h-[70vh] w-full md:w-[80vw]" />
          </SwiperSlide>
      </Swiper>
      <div className="absolute w-full flex justify-center mb-12 md:mb-14 z-10">
        <SearchInput />
      </div>
    </div>
      
  )
}