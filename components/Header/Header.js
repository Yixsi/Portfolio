import Link from 'next/link';
import { useState } from 'react';
import styles from './header.module.css';
import { FiMenu } from 'react-icons/fi';

export default function Header() {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    function toggleMenu() {
        setIsMenuOpen(!isMenuOpen);
    }

    return (
        <header className={styles.nav}>
            <nav className={styles.navList}>
                <button className={styles.menuToggle} onClick={toggleMenu}>
                    <FiMenu />
                </button>
                <ul className={`${styles.navList} ${isMenuOpen ? styles.open : ''}`}>
                    <li className={styles.navListItem}>
                        <Link href='/'>
                            Home
                        </Link>
                    </li>
                    <li className={styles.navListItem}>
                        <Link href='/about'>
                            About
                        </Link>
                    </li>
                    <li className={styles.navListItem}>
                        <Link href='/contact'>
                            Contact
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
