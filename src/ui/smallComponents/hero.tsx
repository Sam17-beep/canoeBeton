import Image from 'next/image'
import { CSSProperties, FunctionComponent, PropsWithChildren } from "react"

interface HeaderProps {
}

const Hero: FunctionComponent<PropsWithChildren<HeaderProps>> = ({ }) => {
  return (
      <div style={parent}>
        <Image src="/../public/Accueil/hero.webp" alt="Hero image" width={3000} height={3000}
            style={{ maxWidth: '100%', height: 'auto', }} object-fit={"cover"} />
        <p style={title}>Canoë de Béton</p>
        <p style={subtitle}>DE L&apos;UNIVERSITÉ LAVAL</p>
      </div>
  )
}

const parent : CSSProperties | undefined  = {
  flexDirection: "column",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
}

const title : CSSProperties | undefined  = {
  position: "absolute",
  fontSize: "6em",
  fontWeight: "bold",
  color: "white",
  top: "1em",
}

const subtitle : CSSProperties | undefined = {
  position: "absolute",
  top: "4em",
  fontSize: "3em",
  color: "white",
}


export default Hero;