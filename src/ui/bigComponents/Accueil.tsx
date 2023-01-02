import Link from "next/link"
import Image from 'next/image'
import { FunctionComponent, PropsWithChildren } from "react"

interface HeaderProps {
}

const Accueil: FunctionComponent<PropsWithChildren<HeaderProps>> = ({ }) => {
  return (
    <div style={parent}>
      <div >
        <Image src="/../public/Accueil/hero.webp" alt="Hero image" width={3000} height={3000}
        style={{ maxWidth: '100%', height: 'auto', }} object-fit={"cover"} />
      </div>
      
      <p>ALllo</p>
    </div>
  )
}

// css class for the parent div
const parent = {
  marginTop: "50px",
  flexDirection: "column",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "#f5f8fa",
  width: "100%",
  height: "40px",
  gap: "15px",
  padding: "0 30px",
}

export default Accueil;