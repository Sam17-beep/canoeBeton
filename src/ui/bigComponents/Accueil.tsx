import { CSSProperties, FunctionComponent, PropsWithChildren } from "react"
import Hero from "../smallComponents/hero";
import Information from "../smallComponents/information";

interface HeaderProps {
}

const Accueil: FunctionComponent<PropsWithChildren<HeaderProps>> = ({ }) => {
  return (
    <div style={parent}>
      <Hero />
      <Information/>
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