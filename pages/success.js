import Head from 'next/head'
import styles from '../styles/Success.module.css'
import Navbar from './components/navbar.js'
import Footer from './components/footer.js'

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Besked sendt</title>
            </Head>

            <Navbar />

            <main className={styles.main}>
                <h1 className={styles.title}>
                    Din besked er blevet sendt, jeg vender tilbage til dig hurtigst muligt.
                </h1>
                <h1 className={styles.title}>
                    Hav en god dag.
                </h1>
            </main>

            <Footer />
        </div>
    )
}
