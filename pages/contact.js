import Head from 'next/head'
import styles from '../styles/Contact.module.css'

export default function Contact() {
    return(
        <div className={styles.container}>
            <Head>
                <h1 className={styles.title}>Hello from Contact</h1>
            </Head>

            <div>
                <form>
                    <div>
                        <label for="name" className={styles.label}>Navn:</label><br/>
                        <input  type="text" id="name" placeholder="Dit navn" required className={styles.input} />
                    </div><br/>
                    <div>
                        <label for="email" className={styles.label}>E-mail:</label><br/>
                        <input type="email" id="email" placeholder="Din e-mail" required className={styles.input} />
                    </div><br/>
                    <div>
                        <label for="subject" className={styles.label}>Emne:</label><br/>
                        <input type="text" id="subject" placeholder="Emne" required className={styles.input} />
                    </div><br/>
                    <div>
                        <label for="message" className={styles.label}>Besked:</label> <br/>
                        <textarea type="text" id="message" placeholder="Din besked" required className={styles.textarea} />
                    </div>
                </form>
            </div>
        </div>
        
    )
}