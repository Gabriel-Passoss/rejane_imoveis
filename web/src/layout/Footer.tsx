import { DeviceMobile, EnvelopeSimple, MapPin, Phone, MapTrifold } from "phosphor-react";

export function Footer() {
  return (
    <div className="flex justify-center md:grid md:grid-cols-2 md:m-[0 auto] bg-background-header bg-cover h-[30vh] md:h-[40vh] w-full p-6 md:py-16 md:px-32">
      <div className="flex flex-col items-center">
        <h2 className="text-xl text-gray-400 font-bold mb-3">
          Entre em contato
        </h2>
        <p className="flex text-gray-400 font-medium mb-3">
          <MapPin color="white" size={25} className="mr-1"/>
          Rua Arthur Max Dôose, 153 - Sala 1301
        </p>

        <p className="flex text-gray-400 font-medium mb-3">
          <MapTrifold color="white" size={25} className="mr-1"/>
          Pioneiros - Balneário Camboriú/SC
        </p>

        <p className="flex text-gray-400 font-medium mb-3">
          <Phone color="white" size={25} className="mr-1"/>
          (47) 2122-8362
        </p>

        <p className="flex text-gray-400 font-medium mb-3">
          <DeviceMobile color="white" size={25} className="mr-1"/>
           (47) 99791-3799
        </p>

        <p className="flex text-gray-400 font-medium mb-3">
          <EnvelopeSimple color="white" size={25} className="mr-1"/>
          contato@rejaneimoveisbc.com.br
        </p>
      </div>

      <div className="hidden md:flex flex-col items-center">
        <h2 className="text-xl text-gray-400 font-bold mb-3">
          Indicadores financeiros
        </h2>
        <p className="flex text-gray-400 font-medium mb-3">
          CUB/SC - Março/2023 <br />
          R$ 2.671,09 - 0,32%
        </p>

        <p className="flex text-gray-400 font-medium mb-3">
          IGP-M - Fevereiro/2023 <br />
          Ultimos 12 meses: 1,8645%
        </p>

      </div>
    </div>
  )
}