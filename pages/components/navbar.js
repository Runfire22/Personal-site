import Link from 'next/link';
import styles from '../../styles/Navbar.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faUser, faFolderOpen, faEnvelopeOpenText } from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
    return (
        <navbar className={styles.navbar}>
            <ul>
                <li>
                    <Link href="/">
                        <a>
                            <FontAwesomeIcon icon={faHome} className={styles.icons} /> 
                            Forside</a>
                    </Link>
                </li>

                <li>
                    <Link href="/about">
                        <a>
                            <FontAwesomeIcon icon={faUser} className={styles.icons} />
                            Om mig</a>
                    </Link>
                </li>

                <li>
                    <Link href="/portfolio">
                        <a>
                            <FontAwesomeIcon icon={faFolderOpen} className={styles.icons} />
                            Portfolio</a>
                    </Link>
                </li>

                <li>
                    <Link href="/contact">
                        <a>
                            <FontAwesomeIcon icon={faEnvelopeOpenText} className={styles.icons} />
                            Kontakt mig</a>
                    </Link>
                </li>

            </ul>
        </navbar>
    )
} 