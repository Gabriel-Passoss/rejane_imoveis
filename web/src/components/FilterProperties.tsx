import { useContext } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import { zodResolver } from '@hookform/resolvers/zod'
import { MagnifyingGlass } from "phosphor-react";
import { z } from 'zod'

import { PropertiesContext } from "../contexts/PropertiesContext";

interface SearchForm {
  typeOfBusiness: 'SELL' | 'RENT' | 'SEASON',
  property_type: string,
  city: string,
  rooms: string,
  minValue: string,
  maxValue: string
}

interface SearchByID {
  id: string
}

const filterSchema = z.object({
  typeOfBusiness: z.enum(['SELL', 'RENT', 'SEASON']),
  property_type: z.string(),
  city: z.string(),
  rooms: z.string(),
  minValue: z.string(),
  maxValue: z.string()
}).superRefine((val, ctx) => {
    if (val.minValue && val.maxValue) {
      if (Number(val.minValue) > Number(val.maxValue)) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "Valor mínimo maior que o máximo",
          path: ["maxValue"]
        })
      }
    }
})

const searchByIDSchema = z.object({
  id: z.string()
})

export function FilterProperties() {
  const { register: register1, handleSubmit: handleSubmit1, formState: { errors: errors1 } } = useForm<SearchForm>({
    resolver: zodResolver(filterSchema)
  })

  const { register: register2, handleSubmit: handleSubmit2, formState: { errors: errors2 } } = useForm<SearchByID>({
    resolver: zodResolver(searchByIDSchema)
  })

  const { filterProperties, filterByIDProperty } = useContext(PropertiesContext)
  const navigate = useNavigate()

  function handleSearch(data: SearchForm) {
    filterProperties(data)
    navigate('/imoveis-filtrados')
  }

  function handleSearchByID(data: SearchByID) {
    filterByIDProperty(data.id)
    navigate(`/imovel/${data.id}`)
  }

  return (
    <div className="md:w-[22vw]">
        <h1 className="flex justify-center items-center bg-brand-700 rounded-t-md text-white h-[5vh] w-full font-bold text-base md:text-xl">
          <MagnifyingGlass size={25} color="white" className="mr-2"/>
          Buscar imóveis
        </h1>

        <form onSubmit={handleSubmit1(handleSearch)} className="flex flex-col bg-gray-200 p-5 mb-5 md:mb-0">
          <select {...register1("typeOfBusiness")} required className="p-3 focus:outline-0 focus:border-0">
            <option value="SELL">Comprar</option>
            <option value="RENT">Alugar</option>
            <option value="SEASON">Temporada</option>
          </select>

          <select {...register1("property_type")} required className="mt-5 p-3 focus:outline-0 focus:border-0">
            <option value="apartment">Apartamento</option>
            <option value="house">Casa</option>
            <option value="terrain">Terreno</option>
            <option value="commercialRoom">Sala Comercial</option>
            <option value="roof">Cobertura</option>
          </select>

          <select {...register1("city")} className="mt-5 p-3 focus:outline-0 focus:border-0">
            <option value="Florianópolis">Florianópolis</option>
          </select>

          <select {...register1("rooms")} required className="mt-5 p-3 focus:outline-0 focus:border-0">
            <option value="1">1 Quarto</option>
            <option value="2">2 Quartos</option>
            <option value="3">3 Quartos</option>
            <option value="4">4 Quartos</option>
            <option value="5+">5+ Quartos</option>
          </select>

          <input type="number" {...register1("minValue")} required placeholder="Valor mínimo" className="mt-5 p-3 focus:outline-0 focus:border-0"/>
          <input type="number" {...register1("maxValue")} required placeholder="Valor máximo" className="mt-5 p-3 focus:outline-0 focus:border-0"/>
          {errors1.maxValue?.message && <p className="text-xs text-red-500">{errors1.maxValue.message}</p>}

          <button type="submit" className="p-2 mt-5 bg-brand-700 text-white">Pesquisar</button>
        </form>

        <form onSubmit={handleSubmit2(handleSearchByID)} className="flex flex-col bg-gray-200 p-5 mb-5 md:mb-0">
          <input type="text" {...register2("id")} required placeholder="Pesquisar pelo código" className="p-3 focus:outline-0 focus:border-0"/>
          <button type="submit" className="p-2 mt-5 bg-brand-700 text-white">Pesquisar</button>
        </form>
      </div>
  )
}