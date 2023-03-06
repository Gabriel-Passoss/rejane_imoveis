import { Bed, Car, House, MapPin, Ruler, Shower } from "phosphor-react";

export function Featured() {
  return (
    <div className="w-full bg-[#C2C2C2] pt-10">
      <div className="flex justify-center items-center">
        <h1 className="flex justify-center items-center bg-brand-700 rounded-md text-white w-[70vw] h-[5vh] font-bold text-base md:text-xl">
          <House size={28} className="mr-3"/>
          IMÓVEIS EM DESTAQUE
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 w-full px-[7vw] gap-y-14 mt-16 place-items-center">
        
        <a className="h-full w-[80vw] md:h-full md:w-[22vw] bg-white rounded-md drop-shadow-lg mb-10" href="">
          <img className="md:h-[35vh]" src="https://static.useimobia.com.br/1076/imoveis/71581/M/638-1638457762-1.jpg"/>
          <div className="px-5">
            <h3 className="mt-3 font-medium text-lg md:text-base">Brava22 |Praia Brava |More com Exclusividade|</h3>
            <span className="flex justify-start items-center mt-2 mb-3 text-zinc-400 md:text-base">
              <MapPin size={20}/>
              Praia Brava de Itajaí - Itajaí/SC
            </span>
            <span className="font-medium text-brand-500 text-xl md:text-base">VENDA: R$1.966.336,00</span>
          </div>
          <div className="grid grid-cols-2 gap-2 place-items-center mt-4">
            <span className="flex">
              <Ruler size={24}/>:
              174.00m²
            </span>
            <span className="flex">
              <Bed size={24}/>:
              2
            </span>
            <span className="flex">
              <Shower size={24}/>:
              2
            </span>
            <span className="flex">
              <Car size={24}/>:
              2
            </span>
          </div>
        </a>

        <a className="h-full w-[80vw] md:h-full md:w-[22vw] bg-white rounded-md drop-shadow-lg mb-10" href="">
          <img className="md:h-[35vh]" src="https://static.useimobia.com.br/1076/imoveis/71616/M/673-1643684274-284-20-whatsapp_image_2017-08-26_at_120108_3refeita.jpg"/>
          <div className="px-5">
            <h3 className="mt-3 font-medium text-lg md:text-base">
              Locação Anual - Apartamento 3 suítes, 3 vagas - Pioneiros - Balneário Cambori
            </h3>
            <span className="flex justify-start items-center mt-2 mb-3 text-zinc-400 md:text-base">
              <MapPin size={20}/>
              Pioneiros - Balneário Camboriú
            </span>
            <span className="font-medium text-brand-500 text-xl md:text-base">
              ALUGUEL: R$7.600,00/mês
            </span>
          </div>
          <div className="grid grid-cols-2 gap-2 place-items-center mt-4">
            <span className="flex">
              <Ruler size={24}/>:
              370.00m²
            </span>
            <span className="flex">
              <Bed size={24}/>:
              7
            </span>
            <span className="flex">
              <Shower size={24}/>:
              4
            </span>
            <span className="flex">
              <Car size={24}/>:
              0
            </span>
          </div>
        </a>

        <a className="h-full w-[80vw] md:h-full md:w-[22vw] bg-white rounded-md drop-shadow-lg mb-10" href="">
          <img className="md:h-[35vh]" src="https://static.useimobia.com.br/1076/imoveis/71596/M/653-1639510804-1637178574098_4e820a89-c0bc-4f43-99e4-d6e77fd139a3-1024.jpeg"/>
          <div className="px-5">
            <h3 className="mt-3 font-medium text-lg md:text-base">
              Apartamento com 03 Suítes, 126,00 m2 privativo, sacada integrada em Balneário Camboriú, SC
            </h3>
            <span className="flex justify-start items-center mt-2 mb-3 text-zinc-400 md:text-base">
              <MapPin size={20}/>
              Centro - Balneário Camboriú
            </span>
            <span className="font-medium text-brand-500 text-xl md:text-base">
              VENDA: R$1990.000,00
            </span>
          </div>
          <div className="grid grid-cols-2 gap-2 place-items-center mt-4">
            <span className="flex">
              <Ruler size={24}/>:
              110.00m²
            </span>
            <span className="flex">
              <Bed size={24}/>:
              3
            </span>
            <span className="flex">
              <Shower size={24}/>:
              2
            </span>
            <span className="flex">
              <Car size={24}/>:
              2
            </span>
          </div>
        </a>
      
      </div>
    </div>
  )
}