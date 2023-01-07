import { FunctionComponent, PropsWithChildren } from "react"
import Hero from "../smallComponents/Hero";
import Information from "../smallComponents/Information";
import Footer from "./Footer";
import styles from 'styles/ui/bigComponents/Accueil.module.css'

interface HeaderProps {
}

const Accueil: FunctionComponent<PropsWithChildren<HeaderProps>> = ({ }) => {
  return (
    <div className={styles.page}>
      <Hero />
      <Information />
      <Footer/>
    </div>
  )
}



export default Accueil;