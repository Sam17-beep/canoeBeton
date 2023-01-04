import { CSSProperties, FunctionComponent, PropsWithChildren } from "react"
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import Link from "next/link";

interface HeaderProps {
}

const Footer: FunctionComponent<PropsWithChildren<HeaderProps>> = () => {
  return (
    <div style={parent}>
      <p>Suivez-nous sur nos réseaux sociaux!</p>
      <div style={iconContainer} >
        <Link href="https://facebook.com/ulcanoe" target="_blank"><FacebookIcon fontSize="large"/></Link>
        <Link href="https://www.instagram.com/ulconcretecanoe" target="_blank"><InstagramIcon fontSize="large"/></Link>
        <Link href="https://www.linkedin.com/company/ulcanoe" target="_blank"><LinkedInIcon fontSize="large"/></Link>
        <Link href="https://twitter.com/lavalcanoe" target="_blank"><TwitterIcon fontSize="large"/></Link>
        <Link href="https://www.youtube.com/channel/UCgIRFEE_HNiFRyxmSYGLtBA" target="_blank"><YouTubeIcon fontSize="large"/></Link>
        <Link href="https://open.spotify.com/playlist/2g8USlk467kuJrvBLXVVlw?si=jn2vzMMvSY6VzNFdsbRXMA&utm_source=native-share-menu&nd=1" target="_blank"><LibraryMusicIcon fontSize="large" /></Link>
      </div>
    </div>
  )
}


// css class for the parent div
const parent : CSSProperties | undefined  = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "#f5f8fa",
  width: "100%",
  gap: "10px",
  paddingTop: "10px",
  fontSize: "1.2em",
}

const iconContainer: CSSProperties | undefined = {
  display: "flex",
  flexDirection: "row",
  gap: "10px",
}

export default Footer;