import { createContext, useState, ReactNode, useEffect, useReducer } from 'react'

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
  favoriteProperty(id: number): Promise<void>,
  unfavoriteProperty(id: number): Promise<void>
  properties: Property[],
  favoritedProperties: string[]
  filteredByIDProperty: Property | undefined
}

type PropertiesProviderProps = {
  children: ReactNode
}

export const PropertiesContext = createContext({} as PropertiesContextData)

export function PropertiesProvider({ children }: PropertiesProviderProps) {
  const [properties, setProperties] = useState<Property[]>([])
  const [filteredByIDProperty, setFilteredByIDProperty] = useState<Property>()
  
  const [favoritedProperties, dispatch] = useReducer((state: string[], action: any) => {
    switch (action.type) {
      case 'favorite':
        localStorage.setItem('@rejane-imoveis:favorites', JSON.stringify([...state, action.payload.id]))
        return [...state, action.payload.id]

      case 'unfavorite':
        const newFavoritedProperties = state.filter((item) => item !== action.payload.id)
        localStorage.setItem('@rejane-imoveis:favorites', JSON.stringify(newFavoritedProperties))
        state = newFavoritedProperties
        return state

      case 'readLocalStorage':
        return JSON.parse(action.payload.favoritedPropertiesStorage)
    }
    console.log(state)
    return state
  }, [])

  useEffect(() => {
    const favoritedPropertiesStorage = localStorage.getItem('@rejane-imoveis:favorites')
    if (favoritedPropertiesStorage) {
      dispatch({
        type: 'readLocalStorage',
        payload: {
          favoritedPropertiesStorage
        }
      })
    }
    async function getAllProperties() {
      const Allproperties = await api.get('/properties')
      setProperties(Allproperties.data)
    }
    getAllProperties()
  }, [])

  async function filterPropertiesByIDAndCities(typeOfBusiness: string, city: string) {
    try {
      const response = await api.post('/filter/by-city-and-business', {
        typeOfBusiness,
        city
      })
      console.log(response)
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

  async function favoriteProperty(id: number) {
    try {
      const response = await api.patch(`/favorite/property/${id}`)
      if (response.status === 204) {
        dispatch({type: 'favorite', payload: { id }})
      }
    } catch (err) {
      console.log(err)
    }
  }

  async function unfavoriteProperty(id: number) {
    try {
      const response = await api.patch(`/unfavorite/property/${id}`)
      if (response.status === 204) {
        dispatch({type: 'unfavorite', payload: { id }})
      }
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <PropertiesContext.Provider value={{ properties, filterPropertiesByIDAndCities, filterProperties, filterByIDProperty, filteredByIDProperty, favoritedProperties, favoriteProperty, unfavoriteProperty }}>
      {children}
    </PropertiesContext.Provider>
  )
}