import Head from 'next/head'
import styles from '../styles/About.module.css'
import Navbar from './components/navbar.js'

export default function Contact() {
    return(
        <div className={styles.container}>
            <Head>
                <title>Om mig</title>
            </Head>

            <Navbar />

            <main className={styles.main}>
                <h1 className={styles.title}>Hello from About</h1>
                <div>
                    
                </div>
            </main>
            </div>
        
    )
}