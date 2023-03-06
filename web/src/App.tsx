import { Header } from "./layout/Header"
import { SearchArea } from "./layout/SearchArea"
import { WhatsappButton } from "./components/whatsappButton"
import { Featured } from "./layout/Featured"
import { ToSell } from "./layout/ToSell"

export function App() {
  return (
    <div>
      <Header />
      <WhatsappButton />
      <SearchArea />
      <Featured />
      <ToSell />
    </div>
  )
}
