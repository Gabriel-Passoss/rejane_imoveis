import { useState, Fragment } from 'react';
import { Menu, Combobox, Transition } from '@headlessui/react'
import { ArrowsDownUp, CaretDown, Check, MapPin } from "phosphor-react";

const people = [
  { id: 1, name: 'Balneário Camboriú' },
  { id: 2, name: 'Florianópolis' },
]

interface Person {
  id: number,
  name: string
}

export function SearchInput() {
  const [typeOfBusiness, setTypeOfBusiness] = useState('BUY')
  const [selected, setSelected] = useState(people[0])
  const [query, setQuery] = useState('')

  const filteredPeople =
    query === ''
      ? people
      : people.filter((person) =>
          person.name
            .toLowerCase()
            .replace(/\s+/g, '')
            .includes(query.toLowerCase().replace(/\s+/g, ''))
        )

  function handleSubmit() {
    
  }

  function handleSwitchBusinessType() {
    if (typeOfBusiness == 'BUY') {
      setTypeOfBusiness('RENT')
    } else {
      setTypeOfBusiness('BUY')
    }
  }
  
  return (
    <div className="block w-[70%] md:w-full justify-center md:flex items-center z-10">
      <Menu as="div" className="inline-block w-full md:w-auto text-left">
      <Menu.Button className="inline-flex w-full md:w-28 items-center justify-center rounded-l-lg md:rounded-l-lg bg-brand-500 px-3 py-3 text-xs md:text-sm font-medium text-white focus:outline-none focus-visible:ring-white focus-visible:ring-opacity-75">
        {typeOfBusiness == 'BUY' ? "COMPRAR" : "ALUGAR"}
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
                <button onClick={handleSwitchBusinessType} className={`${active ? "bg-brand-700 text-white" : "text-gray-900"} ${typeOfBusiness == 'BUY' ? "bg-brand-500 bg-opacity-40" : ""} group flex w-full items-center rounded-md px-2 py-2 font-medium text-sm`}>
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
                displayValue={(person: Person) => person.name}
                onChange={(event) => setQuery(event.target.value)}
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
                {filteredPeople.length === 0 && query !== '' ? (
                  <div className="relative cursor-default select-none py-2 px-4 text-gray-700">
                    Nothing found.
                  </div>
                ) : (
                  filteredPeople.map((person) => (
                    <Combobox.Option
                      key={person.id}
                      className={({ active }) =>
                        `relative cursor-default select-none py-2 pl-10 pr-4 ${
                          active ? 'bg-brand-500 text-white' : 'text-gray-900'
                        }`
                      }
                      value={person}
                    >
                      {({ selected, active }) => (
                        <>
                          <span
                            className={`block truncate ${
                              selected ? 'font-medium' : 'font-normal'
                            }`}
                          >
                            {person.name}
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

      <button className="inline-flex w-full md:w-28 items-center justify-center rounded-r-lg md:rounded-r-lg bg-brand-500 px-3 py-3 text-xs md:text-sm font-medium text-white focus:outline-none focus-visible:ring-white focus-visible:ring-opacity-75">
        ENVIAR
      </button>
    </div>
  )
}