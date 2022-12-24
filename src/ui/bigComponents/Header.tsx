import Link from "next/link"
import { FunctionComponent, PropsWithChildren } from "react"

interface HeaderProps {
  current: string
}
const Header: FunctionComponent<PropsWithChildren<HeaderProps>> = ({ current }) => {
  return (
    <div style={parent}>
      <Link href="/" style={current === "home" ? activeLinkStyle : {}}>Accueil</Link>
      <Link href="/event" style={current === "event" ? activeLinkStyle : {}}>Événement</Link>
      <Link href="/team" style={current === "team" ? activeLinkStyle : {}}>Équipe</Link>
      <Link href="/tournament" style={current === "tournament" ? activeLinkStyle : {}}>Historique</Link>
      <Link href="/sponsor" style={current === "sponsor" ? activeLinkStyle : {}}>Partenaire</Link>
      <Link href="/contact" style={current === "contact" ? activeLinkStyle : {}}>Nous joindre</Link>
    </div>
  )
}

const activeLinkStyle = {
  color: "white",
  backgroundColor: "blue",
}

// css class for the parent div
const parent = {
  display: "flex",
  justifyContent: "right",
  alignItems: "center",
  backgroundColor: "#333333",
  width: "100%",
  height: "40px",
}

export default Header;