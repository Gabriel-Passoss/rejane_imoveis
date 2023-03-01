import { useState } from 'react'
import { House, Phone, WhatsappLogo, Star } from 'phosphor-react'

export function Header() {
  const [ isOpen, setIsOpen ] = useState<Boolean>(false)

  function toggleMenu() {
    setIsOpen(!isOpen)
  }

  return (
    <header className="w-full drop-shadow-xl">
      <section className="bg-brand-700 flex items-center justify-between px-12 py-2">
        <div className="flex justify-between">
          <span className="flex items-center text-xs md:text-sm whitespace-nowrap text-white font-medium mr-10">
            <House size={20} className="mr-1"/>
            CRECI: 31.134
          </span>
          <span className="flex items-center text-xs md:text-sm whitespace-nowrap text-white font-medium mr-5">
            <Phone size={20} className="mr-1"/>
            (47) 2122-8362
          </span>
          <span className="hidden md:flex items-center text-xs md:text-sm whitespace-nowrap text-white font-medium">
            <WhatsappLogo size={20} className="mr-1" weight="light"/>
            (47) 2122-8362
          </span>
        </div>
        <div className="hidden md:flex items-center gap-2">
          <Star color="yellow" weight="fill"/>
          <span className="text-white font-medium whitespace-nowrap">
            Ver favoritos
          </span>
        </div>
      </section>
      <div className="w-full bg-background-header py-4">
        <div className="w-full flex items-center justify-around">
          <img src="/logo.png" alt="Logo Rejane Imóveis" className="max-w-[70%] h-auto" />

          <button name="menu" onClick={toggleMenu} className="md:hidden">
            <svg className="h-6 w-6 fill-current text-white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <rect y="4" width="24" height="2"></rect>
              <rect y="11" width="24" height="2"></rect>
              <rect y="18" width="24" height="2"></rect>
            </svg>
          </button>

          <nav className="gap-6 hidden md:flex md:items-center md:justify-between">
          <a href="/" className="font-medium whitespace-nowrap text-white hover:text-[1.05rem] duration-200">Inicial</a>
          <a href="/about" className="font-medium whitespace-nowrap text-white hover:text-[1.05rem] duration-200">Quem somos</a>
          <a href="/contact" className="font-medium whitespace-nowrap text-white hover:text-[1.05rem] duration-200">Imóveis</a>
          <a href="/blog" className="font-medium whitespace-nowrap text-white hover:text-[1.05rem] duration-200">Blog</a>
          <a href="/contact" className="font-medium whitespace-nowrap text-white hover:text-[1.05rem] duration-200">Fale conosco</a>
        </nav>
      </div>

    </div>
      <div className={`${isOpen ? "opacity-100 translate-y-0" : "opacity-0 hidden"} bg-background-header border-t-[0.5px] border-gray-500 shadow-lg p-7 transition-opacity`}>
        <nav className="block">
          <a href="/" className={`${isOpen ? "opacity-100 translate-y-0" : "opacity-0 hidden"} md:hidden font-medium text-white block pb-2 transition-opacity duration-100`}>Inicial</a>
          <a href="/about" className={`${isOpen ? "opacity-100 translate-y-0" : "opacity-0 hidden"} md:hidden font-medium text-white block py-2 transition-opacity duration-150`}>Quem somos</a>
          <a href="/contact" className={`${isOpen ? "opacity-100 translate-y-0" : "opacity-0 hidden"} md:hidden font-medium text-white block py-2 transition-opacity duration-200`}>Imóveis</a>
          <a href="/blog" className={`${isOpen ? "opacity-100 translate-y-0" : "opacity-0 hidden"} md:hidden font-medium text-white block py-2 transition-opacity duration-300`}>Blog</a>
          <a href="/contact" className={`${isOpen ? "opacity-100 translate-y-0" : "opacity-0 hidden"} md:hidden font-medium text-white block pt-2 transition-opacity duration-500`}>Fale conosco</a>
        </nav>
      </div>
    </header>
  )
}