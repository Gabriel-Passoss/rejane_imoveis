import { zodResolver } from "@hookform/resolvers/zod"
import { CurrencyDollar, MapPin, PlusCircle, Trash } from "phosphor-react"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { z } from "zod"

interface CreatePropertyForm {
  title: string,
  createdBy: string
  propertyType: string,
  typeOfBusiness: 'SELL' | 'RENT' | 'SEASON' | 'SELL AND RENT',
  category: string,
  description: string,
  price_sell: number,
  bathrooms: number,
  rooms: number,
  suites: number,
  kitchens: number,
  cars: number,
  total_area: number,
  private_area: number,
  street: String,
  neighborhood: String,
  city: String,
  state: String,
}

const createPropertySchema = z.object({})

export function CreateProperty() {
  const [characteristics, setCharacteristics] = useState<string[]>([])
  const [characteristicInputText, setCharacteristicInputText] = useState<string>('')
  const [photos, setPhotos] = useState<any>([])
  const [photosPreview, setPhotosPreview] = useState<string[]>([])
  const { register, handleSubmit, formState: { errors } } = useForm<CreatePropertyForm>({
    resolver: zodResolver(createPropertySchema)
  })

  function handleAddCharacteristic(event: any) {
    event?.preventDefault()
    setCharacteristics((values) => [...values, characteristicInputText])
  }

  function handleAddFile(event: any) {
    const files = Array.from(event.target.files)
    files.map((file: any) => {
      const photoPreview = URL.createObjectURL(file)
      setPhotosPreview((photos) => [...photos, photoPreview])
      setPhotos((photos: any) => [...photos, file])
    })
  }

  function handleRemoveFile(index: number) {
    setPhotosPreview((previewPhotos) => {
      const newPreviewPhotos = [...previewPhotos]
      newPreviewPhotos.splice(index, 1)
      return newPreviewPhotos
    })

    setPhotos((photos: any) => {
      const newPhotos = [...photos]
      newPhotos.splice(index, 1)
      return newPhotos
    })
  }


  return (
    <div className="bg-gray-900 w-[100vw] p-3 flex md:flex-row flex-col items-center md:items-stretch">
      <h1 className="font-medium text-xl text-white m-10 md:m-0">
        Cadastrar imóvel
      </h1>
      <div className="flex flex-col items-center justify-center">
        <div className="bg-gray-800 w-[90vw] md:w-[70vw] md:h-[80vh] flex">
          <div className="md:w-[20vw] hidden md:flex flex-col items-center py-10 px-5 border-r-[0.5px] border-gray-700 gap-y-5">
            <div className="h-[25vh] w-[12vw] bg-gray-600 rounded-full">
              {/* <img src="/slide1.jpg" alt="" className="h-[25vh] w-[12vw] rounded-full"/> */}
            </div>

            <div className="flex flex-col items-center">
              <h2 className="text-white text-lg">Nome do imóvel</h2>
              <span className="text-gray-500">Tipo do imóvel</span>
            </div>

            <div className="border-t-[0.5px] border-gray-700 w-full">
              <span className="flex items-center mt-5 text-white">
                <MapPin size={20} className="mr-1"/>
                Endereço completo
              </span>

              <span className="flex items-center mt-5 text-white">
                <CurrencyDollar size={20} className="mr-1"/>
                Valor do imóvel:
              </span>

              <span className="flex items-center mt-5 text-white">
                <CurrencyDollar size={20} className="mr-1"/>
                Valor do IPTU:
              </span>

              <span className="flex items-center mt-5 text-white">
                <CurrencyDollar size={20} className="mr-1"/>
                Valor do condomínio:
              </span>
            </div>
          </div>

          <form className="overflow-scroll">
            <div className="px-10 py-3 flex flex-col gap-10">
              <h2 className="text-3xl text-gray-200 font-medium w-full border-b-[0.5px] border-gray-700 py-3">Geral</h2>
              <div className="flex flex-col md:flex-row gap-4">
                <input type="text" {...register("title")} placeholder="Nome do imóvel" required className="bg-gray-700 p-2 rounded-lg w-[70vw] md:w-[30vw] text-gray-300 focus:transition-opacity duration-200"/>
                <select {...register("propertyType")} required className="bg-gray-700 p-2 rounded-lg w-[70vw] md:w-[15vw] text-gray-300 focus:transition-opacity duration-200">
                  <option value="Tipo do imóvel" disabled selected>Tipo do imóvel</option>
                  <option value="Apartamento">Apartamento</option>
                  <option value="Casa">Casa</option>
                  <option value="Galpão">Galpão</option>
                  <option value="Sala Comercial">Sala Comercial</option>
                  <option value="Chácara">Chácara</option>
                  <option value="Terreno">Terreno</option>
                  <option value="Cobertura">Cobertura</option>
                </select>
              </div>

              <div className="flex md:flex-row flex-col md:gap-0 gap-y-5 justify-between">
                <div className="flex flex-col">
                  <h3 className="text-lg text-gray-200 font-medium">Tipo do negócio</h3>
                  <div className="flex flex-col gap-y-3 px-6 mt-2">
                    <div className="flex items-center">
                      <input type="checkbox" {...register("typeOfBusiness")} value="SELL" className="relative float-left mt-[0.15rem] mr-[6px] -ml-[1.5rem] h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-neutral-300 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] checked:border-primary checked:bg-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:ml-[0.25rem] checked:after:-mt-px checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-t-0 checked:after:border-l-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:ml-[0.25rem] checked:focus:after:-mt-px checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-t-0 checked:focus:after:border-l-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent dark:border-neutral-600 dark:checked:border-primary dark:checked:bg-brand-700"/>
                      <span className="text-gray-300">Venda</span>
                    </div>

                    <div className="flex items-center">
                      <input type="checkbox" {...register("typeOfBusiness")} value="RENT" className="relative float-left mt-[0.15rem] mr-[6px] -ml-[1.5rem] h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-neutral-300 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] checked:border-primary checked:bg-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:ml-[0.25rem] checked:after:-mt-px checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-t-0 checked:after:border-l-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:ml-[0.25rem] checked:focus:after:-mt-px checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-t-0 checked:focus:after:border-l-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent dark:border-neutral-600 dark:checked:border-primary dark:checked:bg-brand-700"/>
                      <span className="text-gray-300">Aluguel</span>
                    </div>

                    <div className="flex items-center">
                      <input type="checkbox" {...register("typeOfBusiness")} value="SEASON" className="relative float-left mt-[0.15rem] mr-[6px] -ml-[1.5rem] h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-neutral-300 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] checked:border-primary checked:bg-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:ml-[0.25rem] checked:after:-mt-px checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-t-0 checked:after:border-l-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:ml-[0.25rem] checked:focus:after:-mt-px checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-t-0 checked:focus:after:border-l-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent dark:border-neutral-600 dark:checked:border-primary dark:checked:bg-brand-700"/>
                      <span className="text-gray-300">Temporada</span>
                    </div>
                  </div>              
                </div>

                <div className="flex flex-col md:flex-row md:items-center gap-y-5 md:gap-x-5">
                  <input type="text" {...register("createdBy")} placeholder="Quem está cadastrando?" required className="bg-gray-700 p-2 rounded-lg w-[70vw] md:w-[15vw] text-gray-300 focus:transition-opacity duration-200"/>             
                  <select {...register("category")} required className="bg-gray-700 p-2 rounded-lg w-[70vw] md:w-[15vw] text-gray-300 focus:transition-opacity duration-200">
                    <option value="Tipo do imóvel" disabled selected>Categoria do imóvel</option>
                    <option value="Residencial">Residencial</option>
                    <option value="Comercial">Comercial</option>
                    <option value="Rural">Rural</option>
                    <option value="Cobertura">Cobertura</option>
                    <option value="Frente ao mar">Frente ao mar</option>
                    <option value="Alto padrão">Alto padrão</option>
                    <option value="Industrial">Industrial</option>
                  </select>
                </div>
              </div>

              <div>
                <textarea {...register("description")} placeholder="Descrição do imóvel" className="text-gray-300 bg-gray-700 w-full h-[20vh] p-3 resize-none rounded-lg focus:transition-opacity duration-200 whitespace-pre-wrap"/>
              </div>
            </div>
            
            {/* <div className="px-10 py-3 flex flex-col gap-10">
              <h2 className="text-3xl text-gray-200 font-medium w-full border-b-[0.5px] border-gray-700 py-3">Venda</h2>
              <div>
                <input type="number" {...register("price_sell")} placeholder="Valor do imóvel" required className="bg-gray-700 p-2 rounded-lg w-[20vw] text-gray-300 focus:transition-opacity duration-200"/>
              </div>
            </div>

            <div className="px-10 py-3 flex flex-col gap-10">
              <h2 className="text-3xl text-gray-200 font-medium w-full border-b-[0.5px] border-gray-700 py-3">Aluguel</h2>
              <div>
                <input type="number" {...register("price_sell")} placeholder="Valor da mensalidade" required className="bg-gray-700 p-2 rounded-lg w-[20vw] text-gray-300 focus:transition-opacity duration-200"/>
              </div>
            </div> */}

            <div className="px-10 py-3 flex flex-col gap-10">
              <h2 className="text-2xl md:text-3xl text-gray-200 font-medium w-full border-b-[0.5px] border-gray-700 py-3">Características</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 items-center md:gap-x-5 gap-y-5 overflow">
                <input type="number" {...register("bathrooms")} placeholder="Banheiros" required className="bg-gray-700 p-2 rounded-lg w-[33vw] md:w-[7vw] text-gray-300 focus:transition-opacity duration-200"/>
                <input type="number" {...register("rooms")} placeholder="Quartos" required className="bg-gray-700 p-2 rounded-lg w-[33vw] md:w-[7vw] text-gray-300 focus:transition-opacity duration-200"/>
                <input type="number" {...register("suites")} placeholder="Suites" required className="bg-gray-700 p-2 rounded-lg w-[33vw] md:w-[7vw] text-gray-300 focus:transition-opacity duration-200"/>
                <input type="number" {...register("cars")} placeholder="Garagens" required className="bg-gray-700 p-2 rounded-lg w-[33vw] md:w-[7vw] text-gray-300 focus:transition-opacity duration-200"/>
                <input type="number" {...register("cars")} placeholder="Garagens" required className="bg-gray-700 p-2 rounded-lg w-[33vw] md:w-[7vw] text-gray-300 focus:transition-opacity duration-200"/>
                <input type="number" {...register("private_area")} placeholder="Área Privativa" required className="bg-gray-700 p-2 rounded-lg w-[33vw] md:w-[7vw] text-gray-300 focus:transition-opacity duration-200"/>
                <input type="number" {...register("total_area")} placeholder="Área Total" required className="bg-gray-700 p-2 rounded-lg w-[33vw] md:w-[7vw] text-gray-300 focus:transition-opacity duration-200"/>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
                {characteristics.map((characteristic) => {
                  return (
                    <span className="bg-brand-700 w-[25vw] h-[5vh] md:w-[8vw] md:h-[5vh] md:p-3 rounded-md text-white text-xs font-medium flex justify-center items-center">{characteristic}</span>
                  )
                })}
              </div>
              
              <div className="flex md:flex-row flex-col gap-y-3 md:gap-0">
                <input type="text" onChange={(event) => setCharacteristicInputText(event.target.value)} placeholder="Características do imóvel/condomínio" required className="bg-gray-700 p-2 rounded-lg w-[70vw] md:w-[35vw] text-gray-300 focus:transition-opacity duration-200"/>
                <button onClick={handleAddCharacteristic} className="md:ml-3 p-2 bg-brand-500 rounded-md text-white text-sm font-medium">Adicionar</button>
              </div>    
            </div>

             <div className="px-10 py-3 flex flex-col gap-10">
              <h2 className="text-2xl md:text-3xl text-gray-200 font-medium w-full border-b-[0.5px] border-gray-700 py-3">Localização</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-5 gap-y-5">
                <input type="text" {...register("street")} placeholder="Nome da rua e número" required className="bg-gray-700 p-2 rounded-lg w-[70vw] md:w-[20vw] text-gray-300 focus:transition-opacity duration-200"/>
                <input type="text" {...register("neighborhood")} placeholder="Nome do bairro" required className="bg-gray-700 p-2 rounded-lg w-[70vw] md:w-[20vw] text-gray-300 focus:transition-opacity duration-200"/>
                
                <select {...register("city")} required className="bg-gray-700 p-2 rounded-lg w-[70vw] md:w-[20vw] text-gray-300 focus:transition-opacity duration-200">
                  <option value="Tipo do imóvel" disabled selected>Cidade</option>
                  <option value="Balneário Camboriú">Balneário Camboriú</option>
                </select>

                <select {...register("state")} required className="bg-gray-700 p-2 rounded-lg w-[70vw] md:w-[10vw] text-gray-300 focus:transition-opacity duration-200">
                  <option value="Tipo do imóvel" disabled selected>Estado</option>
                  <option value="SC">SC</option>
                </select>
              </div>
            </div>
            
            <div className="px-10 py-3 mb-10">
              <h2 className="text-3xl text-gray-200 font-medium w-full border-b-[0.5px] border-gray-700 py-3">Mídia</h2>
              <div className="grid grid-cols-2 md:grid-cols-6 mt-5 gap-3">
                  {photosPreview.map((photo: any, index: number) => {
                    return (
                      <div className="relative" key={index}>
                        <span onClick={() => handleRemoveFile(index)} className="absolute top-1 right-3 cursor-pointer">
                          <Trash color="red"/>
                        </span>
                        <img src={photo} className="w-[30vw] h-[15vh] md:w-[8vw] md:h-[13vh] object-cover"/>
                      </div>
                    )
                  })}

                <div>
                  <label htmlFor="file" className="border-[2px] border-dashed rounded-lg border-brand-500 flex justify-center items-center w-[30vw] h-[15vh] md:w-[8vw] md:h-[13vh] cursor-pointer">
                    <PlusCircle size={25} className="text-brand-500"/>
                  </label>
                  <input type="file" name="file" id="file" onChange={(event) => handleAddFile(event)} className="hidden" multiple accept="image/*"/>
                </div>
              </div>
            </div>

          </form>
        </div>
      </div>
    </div>
  )
}