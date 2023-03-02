import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide} from "swiper/react";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export function SearchArea() {

  return (
      <Swiper 
        modules={[Navigation, Pagination]}
        slidesPerView={1}
        loop={true}
        pagination={{ dynamicBullets: true}}
        navigation={true}
        >
        <SwiperSlide className="flex justify-center">
          <img src="/slide1.webp" alt="Slide1" className="h-[50vh] md:h-[70vh] w-full" />
        </SwiperSlide>

        <SwiperSlide>
          <img src="/slide2.webp" alt="Slide2" className="h-[50vh] md:h-[70vh] w-full" />
        </SwiperSlide>

        <SwiperSlide>
          <img src="/slide3.jpeg" alt="Slide3" className="h-[50vh] md:h-[70vh] w-full" />
        </SwiperSlide>
      </Swiper>  
  )
}