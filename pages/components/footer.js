import styles from '../../styles/Footer.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithubSquare, faLinkedin, faFacebookSquare, faTwitterSquare, faYoutubeSquare } from "@fortawesome/free-brands-svg-icons";

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
                href="https://twitter.com/ChrisWenNielsen"
                target="_blank"
                rel="noopener noreferrer"
                >
                <FontAwesomeIcon icon={faTwitterSquare} className={styles.icons} />
            </a>

            <a
                href="https://www.youtube.com/channel/UCyt4DOARUrr7NP9wWghvEKQ"
                target="_blank"
                rel="noopener noreferrer"
                >
                <FontAwesomeIcon icon={faYoutubeSquare} className={styles.icons} />
            </a>

            <a
                href="https://www.linkedin.com/in/christian-wendelboe-nielsen/"
                target="_blank"
                rel="noopener noreferrer"
                >
                <FontAwesomeIcon icon={faLinkedin} className={styles.icons} />
            </a>

            <a
                href="https://www.facebook.com/christian.wendelboenielsen.9/"
                target="_blank"
                rel="noopener noreferrer"
                >
                <FontAwesomeIcon icon={faFacebookSquare} className={styles.icons} />
            </a>

            <a
                href="https://github.com/Runfire22"
                target="_blank"
                rel="noopener noreferrer"
                >
                <FontAwesomeIcon icon={faGithubSquare} className={styles.icons} />
            </a>

            
        </footer>
    )
}