import Head from 'next/head'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import Header from "../src/ui/bigComponents/Header"
import Accueil from '../src/ui/bigComponents/Accueil'
import Footer from '../src/ui/bigComponents/Footer'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Canoë de Béton Ulaval</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Header current={"home"} />
        <Accueil />
        <Footer/>
      </main>
    </>
  )
}
