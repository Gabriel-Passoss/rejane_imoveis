import { House, Phone, WhatsappLogo, Star } from 'phosphor-react'

export function Header() {
  return (
    <header className="drop-shadow-xl">
      <section className="w-full bg-brand-700 flex items-center justify-between py-2 px-60">
        <div className="flex">
          <span className="flex items-center text-sm text-white font-medium mr-10">
            <House size={20} className="mr-1"/>
            CRECI: 31.134
          </span>
          <span className="flex items-center text-sm text-white font-medium mr-5">
            <Phone size={20} className="mr-1"/>
            (47) 2122-8362
          </span>
          <span className="flex items-center text-sm text-white font-medium">
            <WhatsappLogo size={20} className="mr-1" weight="light"/>
            (47) 2122-8362
          </span>
        </div>
        <div className="flex items-center gap-2">
          <Star color="yellow" weight="fill"/>
          <span className="text-white font-medium">
            Ver favoritos
          </span>
        </div>
      </section>
      <div className="w-full h-28 flex items-center justify-between bg-background-header px-60">
        <img src="./src/assets/logo.png" alt="" />
        <nav className="flex gap-6">
          <a href="/" className="font-medium text-white">Inicial</a>
          <a href="/about" className="font-medium text-white">Quem somos</a>
          <a href="/contact" className="font-medium text-white">Imóveis</a>
          <a href="/blog" className="font-medium text-white">Blog</a>
          <a href="/contact" className="font-medium text-white">Fale conosco</a>
        </nav>
      </div>
    </header>
  )
}