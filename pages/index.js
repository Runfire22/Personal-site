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
          Under constrcution!
        </h1>
        <h1 className={styles.title}>
          Arbejder på sagen!
        </h1>
        <h1 className={styles.title}>
          Skal lige finde ud af hvad der skal være her.
        </h1>

        
      </main>

      <Footer />
    </div>
  )
}
