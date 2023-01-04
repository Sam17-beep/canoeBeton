import { CSSProperties, FunctionComponent, PropsWithChildren } from "react"
import Hero from "../smallComponents/hero"
import Information from "../smallComponents/information"

interface HeaderProps {
}

const Sponsor: FunctionComponent<PropsWithChildren<HeaderProps>> = ({ }) => {
  return (
    <div style={parent}>
    </div>
  )
}

const parent : CSSProperties | undefined  = {
  marginTop: "50px",
  flexDirection: "column",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  height: "40px",
}



export default Sponsor;