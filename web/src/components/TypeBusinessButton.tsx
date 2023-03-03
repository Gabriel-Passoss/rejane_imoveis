import { useState, Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react'
import { CaretDown } from "phosphor-react";

export function TypeBusinessButton() {
  const [typeOfBusiness, setTypeOfBusiness] = useState('BUY')

  function handleSwitchBusinessType() {
    if (typeOfBusiness == 'BUY') {
      setTypeOfBusiness('RENT')
    } else {
      setTypeOfBusiness('BUY')
    }
  }

  return (
    <div className="fixed mb-16 z-10">
        <Menu as="div" className="relative inline-block text-left">
          <Menu.Button className="inline-flex w-full items-center justify-center rounded-md bg-brand-500 px-4 py-3 text-sm font-medium text-white focus:outline-none focus-visible:ring-white focus-visible:ring-opacity-75">
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
            <Menu.Items className="absolute right-0 mt-2 w-full origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
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
      </div>
  )
}