export function ListProperties() {
  return (
    <div className="bg-gray-300 w-[100vw] h-[100vh] p-3">
      <h1 className="font-bold text-xl text-gray-800">
        Listagem de imóveis
      </h1>
      <div className="mt-20 flex flex-col items-center">
        <div className="flex w-[40vw] h-[15vh] bg-white rounded-md">
          <img src="/slide1.jpg" alt="Foto 1 do imóvel" className="h-[15vh] rounded-l-md" />
          <div className="w-full flex justify-between p-2">
            <div className="flex flex-col">
              <h2 className="font-medium text-lg">Nome do imóvel</h2>
              <span className="text-sm mt-3">
                Valor: R$ 350.000,00
              </span>
              <span className="text-sm">
                Negócio: VENDA
              </span>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}