import { Header } from "./layout/Header"
import { SearchArea } from "./layout/SearchArea"
import { WhatsappButton } from "./components/whatsappButton"
import { Featured } from "./layout/Featured"

export function App() {
  return (
    <div>
      <Header />
      <WhatsappButton />
      <SearchArea />
      <Featured />
    </div>
  )
}
