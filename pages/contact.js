import Head from 'next/head'
import styles from '../styles/Contact.module.css'
import Navbar from './components/navbar.js'
import Footer from './components/footer.js'

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
                    <form>
                        <div>
                            <label for="name">Navn:</label><br/>
                            <input  type="text" id="name" placeholder="Dit navn" required />
                        </div><br/>
                        <div>
                            <label for="email">E-mail:</label><br/>
                            <input type="email" id="email" placeholder="Din e-mail" required />
                        </div><br/>
                        <div>
                            <label for="subject">Emne:</label><br/>
                            <input type="text" id="subject" placeholder="Emne" required />
                        </div><br/>
                        <div>
                            <label for="message">Besked:</label> <br/>
                            <textarea type="text" id="message" placeholder="Din besked" required />
                        </div>
                    </form>
                </div>
            </main>

            <Footer />
            </div>
        
    )
}