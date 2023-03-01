import { WhatsappLogo } from 'phosphor-react'

export function WhatsappButton() {
  return (
    <div className="absolute bottom-4 right-4 flex items-center justify-center h-16 w-16 rounded-full bg-green-500 cursor-pointer">
      <a href="https://api.whatsapp.com/send?phone=5547997913799&text=Ol%C3%A1%2C%20gostaria%20de%20falar%20com%20algum%20corretor.">
        <WhatsappLogo  color='white' size={30} weight='duotone'/>
      </a>
    </div>
  )
}