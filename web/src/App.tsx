import { Header } from "./layout/Header"
import { SearchArea } from "./layout/SearchArea"
import { WhatsappButton } from "./components/whatsappButton"
import { Featured } from "./layout/Featured"
import { ToSell } from "./layout/ToSell"
import { ToRent } from "./layout/ToRent"

export function App() {
  return (
    <div>
      <Header />
      <WhatsappButton />
      <SearchArea />
      <Featured />
      <ToSell />
      <ToRent />
    </div>
  )
}
