import { Bed, Car, MapPin, Ruler, Shower } from "phosphor-react";
import { Pagination } from "swiper";
import { SwiperSlide, Swiper } from "swiper/react";

import 'swiper/css';
import 'swiper/css/pagination';
import { Link } from "react-router-dom";

interface Property {
  id: number
  title: String,
  typeOfBusiness: String,
  location: String,
  images: Images
  price_sell: Number,
  price_rent: Number,
  total_area: Number,
  private_area: Number,
  rooms: Number,
  bathrooms: Number,
  car: Number
}

interface Images {
  id: Number,
  urls: [string]
}

export function PropertyCard(property: Property) {
  const currencyOptions = { style: 'currency', currency: 'BRL' };

  return (
    <Link className="h-full w-[80vw] md:h-full md:w-[22vw] bg-white rounded-md drop-shadow-lg mb-10 md:hover:scale-105 md:duration-150" to={`/imovel/${property.id}`}>
      <span className="bg-brand-700 p-1 text-white absolute z-10 top-2 right-2 rounded-md text-sm font-medium flex items-center justify-center">Código: {Number(property.id)}</span>
      <Swiper modules={[ Pagination ]} slidesPerView={1} loop={true} pagination={{ dynamicBullets: true }}>
      {property.images.urls.map((image: string, index: number) => {
        return (
          <SwiperSlide className="flex justify-center" key={Number(index)}>
            <img src={image.toString()} alt="Foto imóvel" className="md:h-[35vh] h-[25vh] w-full rounded-t-md" />
          </SwiperSlide>
        )
      })}
      </Swiper>
      <div className="px-5">
        <h3 className="mt-3 font-medium text-lg md:text-base min-h-[4rem]">{property.title}</h3>
        <span className="flex justify-start items-center mt-1 mb-3 min-h-[4rem] text-zinc-400 md:text-sm">
          <MapPin size={20} className="mr-2"/>
          {property.location}
        </span>
        <span className="font-medium text-brand-500 md:text-base">
          {property.typeOfBusiness == "SELL" ? `VENDA: ${property.price_sell.toLocaleString('pt-BR', currencyOptions)}` : `ALUGUEL: ${property.price_rent.toLocaleString('pt-BR', currencyOptions)}`}
        </span>
      </div>
      <div className="grid grid-cols-2 gap-2 place-items-center mt-4">
        <span className="flex" title={property.total_area != 0 ? "Área Total" : "Área Privativa"}>
          <Ruler size={24} className="mr-2"/>
          {property.total_area != 0 ? `${property.total_area}m²` : `${property.private_area}m²`}
        </span>
        <span className="flex" title="Quartos">
          <Bed size={24} className="mr-2"/>
          {`${property.rooms}`}
        </span>
        <span className="flex" title="Banheiros">
          <Shower size={24} className="mr-2"/>
          {`${property.bathrooms}`}
        </span>
        <span className="flex" title="Vagas">
          <Car size={24} className="mr-2"/>
          {`${property.car}`}
        </span>
      </div>
    </Link>
  )
}