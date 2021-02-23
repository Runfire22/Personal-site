import Head from 'next/head'
import styles from '../styles/Contact.module.css'
import Navbar from './components/navbar.js'
import Footer from './components/footer.js'
import ContactForm from './components/concatctform.js'

export default function Contact() {
    return(
        <div className={styles.container}>
            <Head>
                <title>Kontakt mig</title>
            </Head>

            <Navbar />

            <main className={styles.main}>
                <h1 className={styles.title}>Hello from Contact</h1>
                <div>
                    <ContactForm />
                </div>
            </main>

            <Footer />
            </div>
        
    )
}