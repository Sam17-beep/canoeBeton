import Image from 'next/image'
import { CSSProperties, FunctionComponent, PropsWithChildren } from "react"

interface HeaderProps {
}

const Hero: FunctionComponent<PropsWithChildren<HeaderProps>> = ({ }) => {
  return (
      <div style={parent}>
        <Image src="/../public/Accueil/hero.webp" alt="Hero image" width={1920} height={1080}
        style={{ maxWidth: '100%', height: 'auto', minHeight: "10em", objectPosition: "0 100"}} object-fit={"cover"} />
        <div style={text}>
          <p style={title}>Canoë de Béton</p>
          <p style={subtitle}>DE L&apos;UNIVERSITÉ LAVAL</p>
        </div>
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

const text: CSSProperties | undefined = {
  position: "absolute",
  top: "10em",
}

const title : CSSProperties | undefined  = {
  fontSize: "6em",
  fontWeight: "bold",
  color: "white",
}

const subtitle : CSSProperties | undefined = {
  fontSize: "3em",
  color: "white",
}


export default Hero;