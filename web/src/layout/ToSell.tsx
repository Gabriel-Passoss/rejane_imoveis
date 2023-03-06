import { Bed, Car, House, MapPin, Ruler, Shower } from "phosphor-react";

export function ToSell() {
  return (
    <div className="w-full bg-[#C2C2C2] pt-10">
      <div className="flex justify-center items-center">
        <h1 className="flex justify-center items-center bg-brand-700 rounded-md text-white w-[70vw] h-[5vh] font-bold text-base md:text-xl">
          <House size={28} className="mr-3"/>
          IMÓVEIS À VENDA
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 w-full px-[7vw] gap-y-14 mt-16 place-items-center">
        
        <a className="h-full w-[80vw] md:h-full md:w-[22vw] bg-white rounded-md drop-shadow-lg mb-10" href="">
          <img className="md:h-[35vh]" src="https://static.useimobia.com.br/1076/imoveisfotos/site/71761-1675284264-650-1658420495-ff79096a-734b-4c19-9850-2f820ab733c5.jpg"/>
          <div className="px-5">
            <h3 className="mt-3 font-medium text-lg md:text-base">
              Lindo apartamento novo, Ed.Agatha Christie, 3 suítes, Balneário Camboriú, SC
            </h3>
            <span className="flex justify-start items-center mt-2 mb-3 text-zinc-400 md:text-sm">
              <MapPin size={20}/>
              Centro - Balneário Camboriú/SC
            </span>
            <span className="font-medium text-brand-500 md:text-base">
              VENDA: R$1.890.000,00
            </span>
          </div>
          <div className="grid grid-cols-2 gap-2 place-items-center mt-4">
            <span className="flex">
              <Ruler size={24}/>:
              116.00m²
            </span>
            <span className="flex">
              <Bed size={24}/>:
              3
            </span>
            <span className="flex">
              <Shower size={24}/>:
              3
            </span>
            <span className="flex">
              <Car size={24}/>:
              3
            </span>
          </div>
        </a>

        <a className="h-full w-[80vw] md:h-full md:w-[22vw] bg-white rounded-md drop-shadow-lg mb-10" href="">
          <img className="md:h-[35vh]" src="https://static.useimobia.com.br/1076/imoveisfotos/site/71750-1675279104-431-1560967340-00670eb9-4ea3-4aca-bedc-062ac8ba473f.jpg"/>
          <div className="px-5">
            <h3 className="mt-3 font-medium text-lg md:text-base">
              SALA COMERCIAL NOVA PARA VENDA NO PIONEIROS, COM 45,00 M2, EM BALNEÁRIO CAMBORIÚ
            </h3>
            <span className="flex justify-start items-center mt-2 mb-3 text-zinc-400 md:text-sm">
              <MapPin size={20}/>
              Pioneiros - Balneário Camboriú/SC
            </span>
            <span className="font-medium text-brand-500 md:text-base">
              ALUGUEL: R$480.000,00
            </span>
          </div>
          <div className="grid grid-cols-2 gap-2 place-items-center mt-4">
            <span className="flex">
              <Ruler size={24}/>:
              45.00m²
            </span>
            <span className="flex">
              <Bed size={24}/>:
              0
            </span>
            <span className="flex">
              <Shower size={24}/>:
              0
            </span>
            <span className="flex">
              <Car size={24}/>:
              0
            </span>
          </div>
        </a>

        <a className="h-full w-[80vw] md:h-full md:w-[22vw] bg-white rounded-md drop-shadow-lg mb-10" href="">
          <img className="md:h-[35vh] h-[30vh] w-full" src="https://static.useimobia.com.br/1076/imoveis/71657/M/16752519528453.jpg"/>
          <div className="px-5">
            <h3 className="mt-3 font-medium text-lg md:text-base">
              Apartamento à venda no Ed.Portal D'Antares, 3 quartos, 2 garagens. Pioneiros, Balneário Camboriú, SC
            </h3>
            <span className="flex justify-start items-center mt-2 mb-3 text-zinc-400 md:text-sm">
              <MapPin size={20}/>
              Pioneiros - Balneário Camboriú/SC
            </span>
            <span className="font-medium text-brand-500 md:text-base">
              VENDA: R$1.4490.000,00
            </span>
          </div>
          <div className="grid grid-cols-2 gap-2 place-items-center mt-4">
            <span className="flex">
              <Ruler size={24}/>:
              106.00m²
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
              0
            </span>
          </div>
        </a>
      
      </div>
    </div>
  )
}