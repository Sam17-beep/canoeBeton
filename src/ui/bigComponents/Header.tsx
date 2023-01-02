import Link from "next/link"
import { FunctionComponent, PropsWithChildren } from "react"

interface HeaderProps {
  current: string
}
const Header: FunctionComponent<PropsWithChildren<HeaderProps>> = ({ current }) => {
  return (
    <div style={parent}>
      <Link href="/" style={current === "home" ? activeLinkStyle : linkStyle}>Accueil</Link>
      <Link href="/event" style={current === "event" ? activeLinkStyle : linkStyle}>Événement</Link>
      <Link href="/team" style={current === "team" ? activeLinkStyle : linkStyle}>Équipe</Link>
      <Link href="/tournament" style={current === "tournament" ? activeLinkStyle : linkStyle}>Historique</Link>
      <Link href="/sponsor" style={current === "sponsor" ? activeLinkStyle : linkStyle}>Partenaire</Link>
      <Link href="/contact" style={current === "contact" ? activeLinkStyle : linkStyle}>Nous joindre</Link>
    </div>
  )
}

const activeLinkStyle = {
  color: "blue",
  fontWeight: "bold",
  fontSize: "1.2em",
}

const linkStyle = {
  fontSize: "1.1em",
}

// css class for the parent div
const parent = {
  display: "flex",
  justifyContent: "right",
  alignItems: "center",
  backgroundColor: "#f5f8fa",
  width: "100%",
  height: "40px",
  gap: "15px",
  padding: "0 30px",
  position: "fixed",
  zIndex: "100",
}

export default Header;