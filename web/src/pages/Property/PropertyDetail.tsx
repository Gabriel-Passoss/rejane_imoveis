import { useParams } from 'react-router-dom'
import { Pagination, Navigation } from "swiper";
import { SwiperSlide, Swiper } from "swiper/react";

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation'
import { Header } from '../../components/Header/Header'
import { Bed, Car, CurrencyDollar, MapPin, Ruler, Shower, Star, Toilet } from 'phosphor-react'

export function PropertyDetail() {
  const { id } = useParams()

  return (
    <div className='flex flex-col items-center bg-gray-200'>
      <Header />
      <h1 className='mt-[14vh] md:mt-[18vh] w-full flex justify-center p-3 bg-black opacity-60 text-white md:text-2xl text-lg font-medium'>DETALHES DO IMÓVEL - CÓD. {id}</h1>
      <div className='mt-5 w-[70vw]'>
        <div className='bg-white py-5 px-5 md:px-10 flex flex-col'>
            <h1 className='font-medium text-lg md:text-xl max-w-[60vw]'>Diferenciado no ILLUMINATI 3 SUÍTES, 2 VAGAS DE GARAGEM EM BALNEÁRIO CAMBORIÚ</h1>
            <span className='flex items-center mt-4 text-sm md:text-base text-gray-500'>
              <MapPin className='mr-1'/>
              Rua 1520, 111 - Centro - Balneário Camboriú/SC
            </span>
        </div>

        <div className='flex flex-col md:flex-row items-center md:justify-between mt-8'>
          <div className='w-[90vw] md:w-[40vw]'>
            <Swiper 
            modules={[Navigation, Pagination]}
            slidesPerView={1}
            loop={true}
            pagination={{ dynamicBullets: true}}
            navigation={true}
            >
            <SwiperSlide className="flex justify-center">
              <img src="/slide1.jpg" alt="Slide1" className="h-[30vh] w-[90vw] md:h-[50vh] md:w-[40vw]" />
            </SwiperSlide>

            <SwiperSlide className="flex justify-center">
              <img src="/slide2.jpg" alt="Slide2" className="h-[30vh] w-[90vw] md:h-[50vh] md:w-[40vw]" />
            </SwiperSlide>
            </Swiper>
          </div>

          <div className='flex flex-col gap-y-5'>
            <div className='mt-5 md:mt-0 bg-white flex flex-col items-center justify-center p-10 max-h-[40vh]'>
              <h2 className='mb-6 font-medium text-lg'>DETALHES DO IMÓVEL</h2>
              <div className='flex flex-col items-center justify-center gap-2'>
                <span className='font-medium flex items-center'>
                  <CurrencyDollar className='mr-1 text-brand-500' size={20}/>
                  Negócio: VENDA
                </span>
                <span className='flex items-center'>
                  <Bed className='mr-2 text-brand-500' size={20}/>
                  Dormitórios: 3
                </span>
                <span className='flex items-center'>
                  <Shower className='mr-2 text-brand-500' size={20}/>
                  Banheiros: 3
                </span>
                <span className='flex items-center'>
                  <Toilet className='mr-2 text-brand-500' size={20}/>
                  Lavabos: 1
                </span>
                <span className='flex items-center'>
                  <Car className='mr-2 text-brand-500' size={20}/>
                  Garagens: 2
                </span>
                <span className='flex items-center'>
                  <Ruler className='mr-2 text-brand-500' size={20}/>
                  Área Privativa: 353.00m2
                </span>
                <span className='flex items-center'>
                  <Ruler className='mr-2 text-brand-500' size={20}/>
                  Área Total: 400.00m2
                </span>
              </div>
              
            </div>

            <div className='mt-5 md:mt-0 bg-white flex flex-col items-center justify-center p-10 max-h-[40vh]'>
              <h1>Características do imóvel</h1>
              <ul>
                <li className='flex items-center'><Star size={10} className='text-brand-700 mr-1'/>3 pavimentos de lazer</li>
                <li className='flex items-center'><Star size={10} className='text-brand-700 mr-1'/>2 elevadores</li>
                <li className='flex items-center'><Star size={10} className='text-brand-700 mr-1'/>Sky Lounge no topo do edifício</li>
                <li className='flex items-center'><Star size={10} className='text-brand-700 mr-1'/>Sky bar</li>
                <li className='flex items-center'><Star size={10} className='text-brand-700 mr-1'/>Piscina adulto e infantil</li>
                <li className='flex items-center'><Star size={10} className='text-brand-700 mr-1'/>Academia e pilates</li>
                <li className='flex items-center'><Star size={10} className='text-brand-700 mr-1'/>Sala de jogos</li>
                <li className='flex items-center'><Star size={10} className='text-brand-700 mr-1'/>Cinema</li>
                <li className='flex items-center'><Star size={10} className='text-brand-700 mr-1'/>Sauna</li>
                <li className='flex items-center'><Star size={10} className='text-brand-700 mr-1'/>Spa com hidromassagem</li>
                <li className='flex items-center'><Star size={10} className='text-brand-700 mr-1'/>Beauty Estetic</li>
                <li className='flex items-center'><Star size={10} className='text-brand-700 mr-1'/>Sala de massagem</li>
                <li className='flex items-center'><Star size={10} className='text-brand-700 mr-1'/>Salão de festas com churrasqueira</li>
                <li className='flex items-center'><Star size={10} className='text-brand-700 mr-1'/>Quiosque com churrasqueira a carvão</li>
              </ul>
            </div>
          </div>
          
        </div>
        <div>
          <span>
            Venha viver em Balneário Camboriú com todo conforto e sofisticação que sua família merece.
            O edifício

            Consulte condições de pagamento facilitado.
            Entrega prevista para 2020
            **Fotos ilustrativas
          </span>
        </div>
      </div>
      
      
    </div>
  )
}