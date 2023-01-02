import { CSSProperties, FunctionComponent, PropsWithChildren } from "react"
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';

interface HeaderProps {
}

const Footer: FunctionComponent<PropsWithChildren<HeaderProps>> = () => {
  return (
    <div style={parent}>
      <p>Suivez-nous sur nos réseaux sociaux!</p>
      <div>
        <FacebookIcon />
        <InstagramIcon />
        <LinkedInIcon />
        <TwitterIcon />
        <YouTubeIcon />
        <LibraryMusicIcon />
      </div>
    </div>
  )
}


// css class for the parent div
const parent : CSSProperties | undefined  = {
  position: "fixed",
  bottom: "0",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "#f5f8fa",
  width: "100%",
  gap: "15px",
}

export default Footer;