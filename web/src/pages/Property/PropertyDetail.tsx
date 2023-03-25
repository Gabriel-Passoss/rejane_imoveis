import { useParams } from 'react-router-dom'
import { Header } from '../../components/Header/Header'

export function PropertyDetail() {
  const { id } = useParams()

  return (
    <div className='flex flex-col items-center bg-gray-200 h-[100vh]'>
      <Header />
      <h1 className='mt-[14vh] md:mt-[18vh] w-full flex justify-center p-3 bg-black opacity-60 text-white md:text-2xl text-lg font-medium'>DETALHES DO IMÓVEL - CÓD. {id}</h1>
      <div>
        <div>
          
        </div>
      </div>
    </div>
  )
}