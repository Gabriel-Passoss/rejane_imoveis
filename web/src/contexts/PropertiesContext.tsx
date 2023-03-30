import { createContext, useState, ReactNode, useEffect } from 'react'

import { api } from '../services/api'

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
  images: Images[],
  characteristics: Characteristics,
  street: String,
  neighborhood: String,
  city: String,
  state: String,
  description: String
}

type Images = {
  id: Number,
  url: String
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

interface FilterPropertiesProps {
  typeOfBusiness: string,
  property_type: string,
  city: string,
  rooms: string,
  minValue: string,
  maxValue: string
}


type PropertiesContextData = {
  filterPropertiesByIDAndCities(typeOfBusiness: string, city: string): Promise<void>
  filterProperties(data: FilterPropertiesProps): Promise<void>,
  filterByIDProperty(data: string): Promise<void>,
  properties: Property[],
  filteredByIDProperty: Property | undefined
}

type PropertiesProviderProps = {
  children: ReactNode
}

export const PropertiesContext = createContext({} as PropertiesContextData)

export function PropertiesProvider({ children }: PropertiesProviderProps) {
  const [properties, setProperties] = useState<Property[]>([])
  const [filteredByIDProperty, setFilteredByIDProperty] = useState<Property>()

  async function filterPropertiesByIDAndCities(typeOfBusiness: string, city: string) {
    try {
      const response = await api.post('/filter/by-city-and-business', {
        typeOfBusiness,
        city
      })
      setProperties(response.data)

    } catch (err) {
      console.log(err)
    }
  }

  async function filterProperties(data: FilterPropertiesProps) {
    try {
      const response = await api.post('/filter/properties', {
        "typeOfBusiness": data.typeOfBusiness,
        "city": data.city,
        "property_type": data.property_type,
        "rooms": data.rooms,
        "minValue": data.minValue,
        "maxValue": data.maxValue
      })
      console.log(response)
      console.log(data)
      setProperties(response.data)
    } catch (err) {
      console.log(err)
    }
  }

  async function filterByIDProperty(data: string) {
    try {
      const response = await api.get(`/filter/property/${data}`)
      console.log(response.data)
      setFilteredByIDProperty(response.data)
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <PropertiesContext.Provider value={{ properties, filterPropertiesByIDAndCities, filterProperties, filterByIDProperty, filteredByIDProperty }}>
      {children}
    </PropertiesContext.Provider>
  )
}