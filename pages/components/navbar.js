import Link from 'next/Link'

export default function Navbar() {
    return (
        <header>
            <nav class="navbar navbar-default">
                <ul>
                    <li>
                        <Link href="/">
                            <a>Forside</a>
                        </Link>
                    </li>
                </ul>

                <ul>
                    <li>
                        <Link href="/about">
                            <a>Om mig</a>
                        </Link>
                    </li>
                </ul>

                <ul>
                    <li>
                        <Link href="/portfolio">
                            <a>Portfolio</a>
                        </Link>
                    </li>
                </ul>

                <ul>
                    <li>
                        <Link href="/contact">
                            <a>Kontakt mig</a>
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
} 