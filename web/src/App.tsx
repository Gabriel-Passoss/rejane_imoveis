import { BrowserRouter } from "react-router-dom"
import { Router } from "./Router"
import { PropertiesProvider } from "./contexts/PropertiesContext"

export function App() {
  return (
    <PropertiesProvider>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </PropertiesProvider>
  )
}
