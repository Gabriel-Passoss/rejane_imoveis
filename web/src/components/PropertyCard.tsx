import { Bed, Car, MapPin, Ruler, Shower } from "phosphor-react";
import { Pagination } from "swiper";
import { SwiperSlide, Swiper } from "swiper/react";

import 'swiper/css';
import 'swiper/css/pagination';

interface Property {
  title: String,
  typeOfBusiness: String,
  location: String,
  images: { id: number; url: string; }[]
  price_sell: Number,
  price_rent: Number,
  total_area: Number,
  private_area: Number,
  rooms: Number,
  bathrooms: Number,
  car: Number
}

export function PropertyCard(property: Property) {
  const currencyOptions = { style: 'currency', currency: 'BRL' };

  return (
    <a className="h-full w-[80vw] md:h-full md:w-[22vw] bg-white rounded-md drop-shadow-lg mb-10 hover:scale-105 duration-150" href="">
      <Swiper modules={[ Pagination ]} slidesPerView={1} loop={true} pagination={{ dynamicBullets: true }}>
      {property.images.map((image) => {
        return (
          <SwiperSlide className="flex justify-center">
            <img src={image.url.toString()} alt="Foto imóvel" className="md:h-[35vh] h-[25vh] w-full" />
          </SwiperSlide>
        )
      })}
      </Swiper>
      <div className="px-5">
        <h3 className="mt-3 font-medium text-lg md:text-base min-h-[4rem]">{property.title}</h3>
        <span className="flex justify-start items-center mt-2 mb-3 text-zinc-400 md:text-sm">
          <MapPin size={20} className="mr-2"/>
          {property.location}
        </span>
        <span className="font-medium text-brand-500 md:text-base">
          {property.typeOfBusiness == "SELL" ? `VENDA: ${property.price_sell.toLocaleString('pt-BR', currencyOptions)}` : `ALUGUEL: ${property.price_rent.toLocaleString('pt-BR', currencyOptions)}`}
        </span>
      </div>
      <div className="grid grid-cols-2 gap-2 place-items-center mt-4">
        <span className="flex" title={property.total_area ? "Área Total" : "Área Privativa"}>
          <Ruler size={24} className="mr-2"/>
          {property.total_area != 0 ? `${property.total_area}` : `${property.private_area}`}
        </span>
        <span className="flex">
          <Bed size={24} className="mr-2"/>
          {`${property.rooms}`}
        </span>
        <span className="flex">
          <Shower size={24} className="mr-2"/>
          {`${property.bathrooms}`}
        </span>
        <span className="flex">
          <Car size={24} className="mr-2"/>
          {`${property.car}`}
        </span>
      </div>
    </a>
  )
}