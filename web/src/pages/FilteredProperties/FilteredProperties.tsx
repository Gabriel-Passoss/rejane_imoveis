import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { House } from "phosphor-react";

import { PropertiesContext } from "../../contexts/PropertiesContext";
import { PropertyCard } from "../../components/PropertyCard";
import { FilterProperties } from "../../components/FilterProperties";



export function FilteredProperties() {
  const { properties } = useContext(PropertiesContext)
  const navigate = useNavigate()

  useEffect(() => {
    if (properties.length === 0) {
      navigate('/')
    }
  }, [])
  
  return (
    <div className="pt-10 px-5 md:flex md:justify-center">
      <FilterProperties />

      <div>
        <div className="flex justify-center items-center">
          <h1 className="flex justify-center items-center bg-brand-700 rounded-md text-white w-[70vw] h-[5vh] font-bold text-base md:text-xl">
            <House size={28} className="mr-2"/>
            {properties.length} IMÓVEIS ENCONTRADOS 
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 w-full px-[7vw] gap-y-14 gap-x-32 mt-16 place-items-center">
          {properties.map((property) => {
            return (
              <PropertyCard
              id={property.id}
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
    </div>
  )
}