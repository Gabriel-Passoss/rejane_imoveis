import { House } from "phosphor-react";
import { useContext } from "react";

import { PropertyCard } from "../PropertyCard";
import { PropertiesContext } from "../../contexts/PropertiesContext";

export function Featured() {
  const { properties } = useContext(PropertiesContext)
  return (
    <div className="w-full bg-[#C2C2C2] pt-10">
      <div className="flex justify-center items-center">
        <h1 className="flex justify-center items-center bg-brand-700 rounded-md text-white w-[70vw] h-[5vh] font-bold text-base md:text-xl">
          <House size={28} className="mr-3"/>
          IMÓVEIS EM DESTAQUE
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 w-full px-[7vw] gap-y-14 mt-16 place-items-center">
      {properties.map((property) => {
        return (
          <PropertyCard 
            id={Number(property.id)}
            key={Number(property.id)}
            title={property.title}
            price_sell={property.price_sell}
            price_rent={property.price_rent}
            typeOfBusiness={property.typeOfBusiness}
            location={`${property.street} - ${property.neighborhood} - ${property.city}/${property.state}`}
            bathrooms={property.characteristics.bathrooms}
            car={property.characteristics.car}
            rooms={property.characteristics.rooms}
            private_area={property.characteristics.private_area}
            total_area={property.characteristics.total_area}
            images={property.images}
          />
        )
      })}
      </div>
    </div>
  )
}