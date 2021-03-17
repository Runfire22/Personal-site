import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Navbar from './components/navbar.js'
import Footer from './components/footer.js'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Forside</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main className={styles.main}>
        <h1 className={styles.title}>
          Velkommen til hjemmesiden tilhørende
        </h1><br />
        <h1 className={styles.title}>
          Christian Wendelboe-Nielsen
        </h1>

        
      </main>

      <Footer />
    </div>
  )
}
