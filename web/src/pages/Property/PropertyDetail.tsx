import { useParams } from 'react-router-dom'
import { Pagination, Navigation } from "swiper";
import { SwiperSlide, Swiper } from "swiper/react";

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation'
import { Header } from '../../components/Header/Header'
import { Bed, Car, Check, House, Knife, MapPin, Ruler, Shower, StarFour, Tag } from 'phosphor-react'
import { useEffect, useState } from 'react';
import { api } from '../../services/api';

type Property = {
  id: Number,
  title: String,
  createdBy: string
  price_sell: Number,
  price_rent: Number,
  price_season: Number,
  iptu: Number,
  condominium: Number,
  typeOfBusiness: String,
  date: Date,
  images: Images,
  characteristics: Characteristics,
  street: String,
  neighborhood: String,
  city: String,
  state: String,
  description: String
}

type Images = {
  id: Number,
  urls: [string]
}

type Characteristics = {
  id: Number,
  rooms: Number,
  car: Number,
  bathrooms: Number,
  suites: Number,
  kitchens: Number,
  total_area: Number,
  private_area: Number,
  property_type: string,
  infrastructure: String[] 
}

export function PropertyDetail() {
  const [property, setProperty] = useState<Property>()
  const { id } = useParams()
  
  useEffect(() => {
    api.get(`/properties/${id}`).then((response) => {
      setProperty(response.data)
    })
  }, [])

  return (
    <div className='flex flex-col items-center bg-gray-200'>
      <Header />
      
      <div className='w-full mt-[14vh] md:mt-[18vh]'>
        <Swiper  modules={[Navigation, Pagination]} spaceBetween={5} slidesPerView={5} loop={true} pagination={{ dynamicBullets: true}} navigation={true} className='flex items-center'>
          {property?.images.urls.map((url, index) => {
            return (
              <SwiperSlide key={index}>
                <img src={url} alt="Foto do imóvel" className="h-[30vh] md:h-[40vh]" />
              </SwiperSlide>
            )
          })}
          
        </Swiper>
      </div>
      
      <div className='mt-10 flex flex-col items-center'>
        <div>
          <h1 className='p-2 text-xl md:text-2xl font-medium text-gray-700 border-b-[0.5px] border-gray-400 border-opacity-30'>
            {property?.title}
          </h1>
          <div className='mt-2 p-2'>
            <span className='p-[3px] rounded-md bg-gray-600 text-white font-medium text-sm mr-2'>
              {property?.typeOfBusiness === 'SELL' ? 'VENDA' : property?.typeOfBusiness === 'RENT' ? 'ALUGUEL' : 'VENDA E ALUGUEL'}
            </span>
            <span className='p-[3px] rounded-md bg-gray-600 text-white font-medium text-sm mr-2'>LANÇAMENTO</span>
          </div>
        </div>
        
        <div className='md:flex items-center justify-between mt-10 p-7 bg-gray-600 rounded-md w-[92vw] md:w-[55vw]'>
          <h1 className='font-bold text-base md:text-xl text-white'>
            {
            property?.typeOfBusiness === 'SELL' ? property.price_sell.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'}) : 
            property?.typeOfBusiness === 'RENT' ? property.price_rent.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'}) : 
            property?.typeOfBusiness === 'SEASON' ? property.price_season.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'}) :
            `${property?.price_sell.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})} | ${property?.price_rent.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})}`
            }
          </h1>
          <div className='flex flex-col md:flex-row mt-1 md:mt-0 md:gap-x-5'>
            <span className='font-bold text-white text-sm md:text-base'>
              Condomínio: {property?.condominium.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})}
            </span>
            <span className='font-bold text-white text-sm md:text-base'>
              IPTU: {property?.iptu.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})}
            </span>
          </div>
        </div>

        <div className='mt-10 bg-white rounded-md px-4 md:px-10 py-5 w-[90vw] md:w-[55vw]'>

          <div className='flex flex-col justify-start'>
            <span className='font-medium text-base md:text-lg text-gray-600 flex items-center'>
              <Tag size={20} weight='fill' className='text-brand-700 mr-1'/>
              {property?.id.toString()}
            </span>

            <span className='font-medium text-base md:text-lg text-gray-600 flex items-center'>
              <House size={20} weight='fill' className='text-brand-700 mr-1'/>
              {property?.characteristics.property_type}
            </span>

            <span className='font-medium text-base md:text-lg text-gray-600 flex items-center'>
              <MapPin size={20} weight='fill' className='text-brand-700 mr-1'/>
              {property?.street}, {property?.neighborhood}, {property?.city} / {property?.state}
            </span>
          </div>

          <div className='mt-10 grid grid-cols-2 md:grid-cols-4 gap-y-3 gap-x-10 border-b-[0.5px] py-4'>
            {Number(property?.characteristics.rooms) > 0 ? 
              <span className='flex items-center text-sm md:text-base text-gray-500'>
                <Bed size={15} className='mr-1'/>
                {property?.characteristics.rooms.toString()} dormitório(s)
              </span>
            : null
            }
            
            {Number(property?.characteristics.bathrooms) > 0 ?
              <span className='flex items-center text-sm md:text-base text-gray-500'>
              <Shower size={15} className='mr-1'/>
              {property?.characteristics.bathrooms.toString()} banheiro(s)
              </span>
            : null
            }
            
            {Number(property?.characteristics.car) > 0 ?
              <span className='flex items-center text-sm md:text-base text-gray-500'>
              <Car size={15} className='mr-1'/>
                {property?.characteristics.car.toString()} Vaga(s)
              </span>
            : null
            }

            {Number(property?.characteristics.suites) > 0 ?
              <span className='flex items-center text-sm md:text-base text-gray-500'>
              <StarFour size={15} className='mr-1'/>
                {property?.characteristics.suites.toString()} Suíte(s)
              </span>
            : null
            }

            {Number(property?.characteristics.kitchens) > 0 ?
              <span className='flex items-center text-sm md:text-base text-gray-500'>
              <Knife size={15} className='mr-1'/>
              {property?.characteristics.kitchens.toString()} Cozinha(s)
              </span>
            : null
            }

            {Number(property?.characteristics.total_area) > 0 ?
              <span className='flex items-center text-sm md:text-base text-gray-500'>
              <Ruler size={15} className='mr-1'/>
                {property?.characteristics.total_area.toString()}m² Área total
              </span>
            : null
            }

            {Number(property?.characteristics.private_area) > 0 ?
              <span className='flex items-center text-sm md:text-base text-gray-500'>
              <Ruler size={15} className='mr-1'/>
              {property?.characteristics.private_area.toString()}m² Área privativa
              </span>
            : null
            }

          </div>

          <div className='flex flex-col items-center border-b-[0.5px] py-4'>
            <h3 className='text-xl font-medium'>Características</h3>

            <div className='mt-5'>
              <ul className='grid grid-cols-3 md:grid-cols-5 gap-3 justify-center items-center whitespace-nowrap'>
                {property?.characteristics.infrastructure.map((characteristic, index) => {
                  return (
                    <li className='font-medium flex items-center justify-center' key={index}>
                      <Check size={20} className='text-brand-500 mr-1'/>
                      {characteristic}
                    </li>
                  )
                })}
                
              </ul>
            </div>
          </div>

          <div className='mt-10 flex flex-col items-center'>
            <h2 className='text-xl font-medium'>Descrição do imóvel</h2>

            <div className='mt-10'>
              <span className=''>
               {property?.description}
              </span>
            </div>
          </div>
        </div>
       
      </div>
      
    </div>
  )
}