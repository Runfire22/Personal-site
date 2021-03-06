import styles from '../../styles/Footer.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithubSquare, faLinkedin, faFacebookSquare, faTwitterSquare, faYoutubeSquare } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <a
                href="https://twitter.com/ChrisWenNielsen"
                target="_blank"
                rel="noopener noreferrer"
                >
                <FontAwesomeIcon icon={faTwitterSquare} className={styles.icons} />
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