import { CSSProperties, FunctionComponent, PropsWithChildren } from "react"
import Hero from "../smallComponents/Hero";
import Information from "../smallComponents/Information";
import Footer from "./Footer";

interface HeaderProps {
}

const Accueil: FunctionComponent<PropsWithChildren<HeaderProps>> = ({ }) => {
  return (
    <div style={parent}>
      <Hero />
      <Information />
      <Footer/>
    </div>
  )
}

const parent : CSSProperties | undefined  = {
  paddingTop: "200px",
  flexDirection: "column",
  display: "flex",
  gap: "50px",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  height: "40px",
}

export default Accueil;