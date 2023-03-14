import { createContext, useState, ReactNode, useEffect } from 'react'

import { api } from '../services/api'

type Properties = {
  id: Number,
  title: String,
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
  infrastructure: String[] 
}

type PropertiesContextData = {
  filterProperties(): Promise<void>
  properties: Properties[]
}

type PropertiesProviderProps = {
  children: ReactNode
}

export const PropertiesContext = createContext({} as PropertiesContextData)

export function PropertiesProvider({ children }: PropertiesProviderProps) {
  const [properties, setProperties] = useState<Properties[]>([])

  async function filterProperties() {
    try {
      const response = await api.post('/properties', {})
      // Router.push('/')

    } catch (err) {
      console.log(err)
    }
  }

  return (
    <PropertiesContext.Provider value={{ properties, filterProperties }}>
      {children}
    </PropertiesContext.Provider>
  )
}