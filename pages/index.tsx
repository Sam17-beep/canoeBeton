import Head from 'next/head'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import Header from "../src/ui/bigComponents/Header"

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
        <p>ALLO</p>
      </main>
    </>
  )
}
