import { FilterProperties } from "../../components/FilterProperties";

export function About() {
  return (
    <div className="bg-gray-300 pb-10">
      <h1 className="w-full flex justify-center p-3 bg-black opacity-60 text-white md:text-2xl text-lg font-medium">QUEM SOMOS</h1>
      <div className="mt-6 md:flex justify-around">
        <FilterProperties />
        <p className="w-full p-5 md:p-0 md:w-[70vw] text-gray-700">
        A "RSG " Rejane Gomes Corretora de Imóveis é dedicada a vendas, locação, administração de imóveis e condomínios.
        Para tanto utilizará sua experiencia de 30 anos em Direito Imobiliário, além de vendas mercantil e representações comerciais, garantindo assim segurança e confiabilidade nos bons negócios imobiliários conduzidos.
        </p>
      </div>
      <div>
       
      </div>
    </div>
  )
}