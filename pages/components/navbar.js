import Link from 'next/Link';
import styles from '../../styles/Navbar.module.css';

export default function Navbar() {
    return (
        <header>
            <nav className="navbar navbar-default">
                <ul className={styles.ul}>
                    <li className={styles.li}>
                        <Link href="/">
                            <a className={styles.a}>Forside</a>
                        </Link>
                    </li>

                    <li className={styles.li}>
                        <Link href="/about">
                            <a className={styles.a}>Om mig</a>
                        </Link>
                    </li>

                    <li className={styles.li}>
                        <Link href="/portfolio">
                            <a className={styles.a}>Portfolio</a>
                        </Link>
                    </li>

                    <li className={styles.li} >
                        <Link href="/contact">
                            <a className={styles.a}>Kontakt mig</a>
                        </Link>
                    </li>

                    <toggler></toggler>
                </ul>
            </nav>
        </header>
    )
} 