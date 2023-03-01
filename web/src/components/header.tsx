import { useState } from 'react'
import { House, Phone, WhatsappLogo, Star } from 'phosphor-react'

export function Header() {
  const [ isOpen, setIsOpen ] = useState<Boolean>(false)

  return (
    <header className="w-full drop-shadow-xl">
      <section className="bg-brand-700 flex items-center justify-between py-2 px-4">
        <div className="flex">
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
      <div className="w-full bg-background-header px-6 py-2">
        <div className="w-full flex items-center justify-between">
          <img src="./src/assets/logo.png" alt="Logo Rejane Imóveis" className="max-w-[70%] h-auto" />

          <button name="menu" className="md:hidden">
            <svg className="h-6 w-6 fill-current text-white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <rect y="4" width="24" height="2"></rect>
              <rect y="11" width="24" height="2"></rect>
              <rect y="18" width="24" height="2"></rect>
            </svg>
          </button>

          <nav className="gap-6 hidden md:flex md:items-center md:justify-between">
          <a href="/" className="font-medium whitespace-nowrap text-white">Inicial</a>
          <a href="/about" className="font-medium whitespace-nowrap text-white">Quem somos</a>
          <a href="/contact" className="font-medium whitespace-nowrap text-white">Imóveis</a>
          <a href="/blog" className="font-medium whitespace-nowrap text-white">Blog</a>
          <a href="/contact" className="font-medium whitespace-nowrap text-white">Fale conosco</a>
        </nav>
      </div>

      <div className="md:hidden">
        <hr className="border-t-2 border-gray-500 my-2"/>
        <nav className="block">
          <a href="/" className="font-medium text-white block py-2">Inicial</a>
          <a href="/about" className="font-medium text-white block py-2">Quem somos</a>
          <a href="/contact" className="font-medium text-white block py-2">Imóveis</a>
          <a href="/blog" className="font-medium text-white block py-2">Blog</a>
          <a href="/contact" className="font-medium text-white block py-2">Fale conosco</a>
        </nav>
      </div>
    </div>
    </header>
  )
}