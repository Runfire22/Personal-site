import Head from 'next/head'
import styles from '../styles/Portfolio.module.css'
import Navbar from './components/navbar.js'

export default function Portfolio() {
    return(
        <div className={styles.container}>
            <Head>
                <title>Portfolio</title>
            </Head>

            <Navbar />

            <main className={styles.main}>
                <h1 className={styles.title}>
                    Welcome to Portfolio
                </h1>

                <div className={styles.grid}>
                    <div className={styles.card}>
                        <h3>Eksempel på projekt kort</h3>
                        <p>Eksempel på projekt beskrivelse</p>
                        <button>
                            <a href="https://google.dk" className={styles.button} target="_blank">Eksempel</a>
                        </button>
                        <div className={styles.divider} />
                        <button>
                            <a href="https://github.com" className={styles.button} target="_blank">Github</a>
                        </button>
                    </div>
                    
                    <div className={styles.card}>
                        <h3>Eksempel på projekt kort</h3>
                        <p>Eksempel på projekt beskrivelse</p>
                        <button>
                            <a href="https://google.dk" className={styles.button} target="_blank">Eksempel</a>
                        </button>
                        <div className={styles.divider} />
                        <button>
                            <a href="https://github.com" className={styles.button} target="_blank">Github</a>
                        </button>
                    </div>
                    
                    <div className={styles.card}>
                        <h3>Eksempel på projekt kort</h3>
                        <p>Eksempel på projekt beskrivelse</p>
                        <button>
                            <a href="https://google.dk" className={styles.button} target="_blank">Eksempel</a>
                        </button>
                        <div className={styles.divider} />
                        <button>
                            <a href="https://github.com" className={styles.button} target="_blank">Github</a>
                        </button>
                    </div>
                    
                    <div className={styles.card}>
                        <h3>Eksempel på projekt kort</h3>
                        <p>Eksempel på projekt beskrivelse</p>
                        <button>
                            <a href="https://google.dk" className={styles.button} target="_blank">Eksempel</a>
                        </button>
                        <div className={styles.divider} />
                        <button>
                            <a href="https://github.com" className={styles.button} target="_blank">Github</a>
                        </button>
                    </div>

                </div>

            </main>
        </div>
    )
}