import { useState, Fragment, useEffect, useContext } from 'react';
import { Menu, Combobox, Transition } from '@headlessui/react'
import { ArrowsDownUp, CaretDown, Check, MapPin } from "phosphor-react";

import { PropertiesContext } from '../../contexts/PropertiesContext';
import { api } from '../../services/api'
import { useNavigate } from 'react-router-dom';

interface City {
  city: string
}

export function SearchInput() {
  const [typeOfBusiness, setTypeOfBusiness] = useState('SELL')
  const [cities, setCities] = useState<City[]>([])
  const { filterPropertiesByIDAndCities } = useContext(PropertiesContext)
  const navigate = useNavigate()

  useEffect(() => {
    console.log('chegou aqui')
   api.get('/cities').then(response => {
    let cities: City[] = []
    response.data.map((city: City) => {
      cities.push(city)
    })
    setCities(cities)
   })
  }, [])

  const [selected, setSelected] = useState(cities[0])
  const [query, setQuery] = useState('')

  const filteredCities =
    query === ''
      ? cities
      : cities.filter((city) =>
          city.city
            .toLowerCase()
            .replace(/\s+/g, '')
            .includes(query.toLowerCase().replace(/\s+/g, ''))
        )

  async function handleSubmit() {
    event?.preventDefault()
    await filterPropertiesByIDAndCities(typeOfBusiness, selected.city)
    navigate('/imoveis-filtrados')
  }

  function handleSwitchBusinessType() {
    if (typeOfBusiness == 'SELL') {
      setTypeOfBusiness('RENT')
    } else {
      setTypeOfBusiness('SELL')
    }
  }
  
  return (
    <form onSubmit={handleSubmit} className="block w-[70%] md:w-full justify-center md:flex items-center z-10">
      <Menu as="div" className="inline-block w-full md:w-auto text-left">
      <Menu.Button className="inline-flex w-full md:w-28 items-center justify-center rounded-l-lg md:rounded-l-lg bg-brand-500 px-3 py-3 text-xs md:text-sm font-medium text-white focus:outline-none focus-visible:ring-white focus-visible:ring-opacity-75">
        {typeOfBusiness == 'SELL' ? "COMPRAR" : "ALUGAR"}
        <CaretDown className="ml-2" weight="bold" aria-hidden={true}/>
      </Menu.Button>
      <Transition 
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute mt-2 w-28 origin-top-left md:translate-y-0 translate-y-full divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="px-1 py-1">
            <Menu.Item>
              {({active}) => (
                <button onClick={handleSwitchBusinessType} className={`${active ? "bg-brand-700 text-white" : "text-gray-900"} ${typeOfBusiness == 'SELL' ? "bg-brand-500 bg-opacity-40" : ""} group flex w-full items-center rounded-md px-2 py-2 font-medium text-sm`}>
                  COMPRAR
                </button>
              )}
            </Menu.Item>
            <Menu.Item>
              {({active}) => (
                <button onClick={handleSwitchBusinessType} className={`${active ? "bg-brand-700 text-white" : "text-gray-900"} ${typeOfBusiness == 'RENT' ? "bg-brand-500 bg-opacity-40" : ""} group flex w-full items-center rounded-md px-2 py-2 font-medium text-sm`}>
                  ALUGAR
                </button>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
      </Menu>

      <div className="w-full md:w-[30vw]">
        <Combobox value={selected} onChange={setSelected}>
          <div className="relative">
            <div className="relative w-full cursor-default overflow-hidden bg-white text-left shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm">
              <Combobox.Input
                className="w-full border-none py-3 pl-3 pr-10 text-sm leading-5 text-gray-900 focus:ring-0"
                displayValue={(city: City) => city.city}
                onChange={(event) => setQuery(event.target.value)}
                placeholder='Selecione uma cidade'
              />
              <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
                <ArrowsDownUp size={20} />
              </Combobox.Button>
            </div>
            <Transition
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
              afterLeave={() => setQuery('')}
            >
              <Combobox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                {filteredCities.length === 0 && query !== '' ? (
                  <div className="relative cursor-default select-none py-2 px-4 text-gray-700">
                    Nothing found.
                  </div>
                ) : (
                  filteredCities.map((city, index) => (
                    <Combobox.Option
                      key={index}
                      className={({ active }) =>
                        `relative cursor-default select-none py-2 pl-10 pr-4 ${
                          active ? 'bg-brand-500 text-white' : 'text-gray-900'
                        }`
                      }
                      value={city}
                    >
                      {({ selected, active }) => (
                        <>
                          <span
                            className={`block truncate ${
                              selected ? 'font-medium' : 'font-normal'
                            }`}
                          >
                            {city.city}
                          </span>
                          {selected ? (
                            <span
                              className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                                active ? 'text-white' : 'text-brand-500'
                              }`}
                            >
                              <Check />
                            </span>
                          ) : 
                          <span
                          className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                            active ? 'text-white' : 'text-brand-500'
                          }`}
                        >
                          <MapPin />
                        </span>}
                        </>
                      )}
                    </Combobox.Option>
                  ))
                )}
              </Combobox.Options>
            </Transition>
          </div>
        </Combobox>
      </div>

      <button type='submit' className="inline-flex w-full md:w-28 items-center justify-center rounded-r-lg md:rounded-r-lg bg-brand-500 px-3 py-3 text-xs md:text-sm font-medium text-white focus:outline-none focus-visible:ring-white focus-visible:ring-opacity-75">
        ENVIAR
      </button>
    </form>
  )
}