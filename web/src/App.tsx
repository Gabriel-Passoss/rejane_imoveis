import { Header } from "./components/Header/Header"
import { SearchArea } from "./components/SearchArea/SearchArea"
import { WhatsappButton } from "./components/whatsappButton"
import { Featured } from "./components/Featured/Featured"
import { ToSell } from "./components/ToSell/ToSell"
import { ToRent } from "./components/ToRent/ToRent"
import { Footer } from "./components/Footer/Footer"

export function App() {
  return (
    <div>
      <Header />
      <WhatsappButton />
      <SearchArea />
      <Featured />
      <ToSell />
      <ToRent />
      <Footer />
    </div>
  )
}
