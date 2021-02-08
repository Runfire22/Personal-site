import Link from 'next/Link';
import styles from '../../styles/Navbar.module.css';

export default function Navbar() {
    return (
        <navbar className={styles.navbar}>
            <ul>
                <li>
                    <Link href="/">
                        <a>Forside</a>
                    </Link>
                </li>

                <li>
                    <Link href="/about">
                        <a>Om mig</a>
                    </Link>
                </li>

                <li>
                    <Link href="/portfolio">
                        <a>Portfolio</a>
                    </Link>
                </li>

                <li>
                    <Link href="/contact">
                        <a>Kontakt mig</a>
                    </Link>
                </li>

                <toggler></toggler>
            </ul>
        </navbar>
    )
} 