import { Outlet } from "react-router-dom";
import { Header } from "../components/Header/Header";
import { SearchArea } from "../components/SearchArea/SearchArea";
import { Footer } from "../components/Footer/Footer";
import { WhatsappButton } from "../components/whatsappButton";

export function DefaultLayout() {
  return (
    <>
    <Header />
    <SearchArea />
    <WhatsappButton />
    <Outlet />
    <Footer />
    </>
  )
}