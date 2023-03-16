import { ToRent } from "./ToRent";
import { ToSell } from "./ToSell";

export function Home() {
  return (
    <>
      <ToSell />
      <ToRent />
    </>
  )
}