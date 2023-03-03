import { Header } from "./layout/Header"
import { SearchArea } from "./layout/SearchArea"
import { WhatsappButton } from "./components/whatsappButton"

export function App() {
  return (
    <div>
      <Header />
      <WhatsappButton />
      <SearchArea />
    </div>
  )
}
