import styles from '../../styles/Footer.module.css';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <a
                href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                target="_blank"
                rel="noopener noreferrer"
                >
                Powered by{' '}
                <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
            </a>

            <a
                href="https://www.linkedin.com/in/christian-wendelboe-nielsen/"
                target="_blank"
                rel="noopener noreferrer"
                >
                <img src="/LI-Logo.png" alt="LinekdIn Logo" className={styles.logo} />
            </a>

            <a
                href="https://github.com/Runfire22"
                target="_blank"
                rel="noopener noreferrer"
                >
                <img src="/Github_Logo.png" alt="GitHub Mark" className={styles.logo} />
            </a>
        </footer>
    )
}