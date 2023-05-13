import Link from 'next/link';
import { useState } from 'react';
import styles from './Header.module.css';
import { FiMenu } from 'react-icons/fi';
import Image from 'next/image'
import { useRouter } from 'next/router';

export default function Header() {
  const router = useRouter();

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <header>
      <nav className={styles.nav}>
        <button className={styles.menuToggle} onClick={toggleMenu}>
          <FiMenu />
        </button>
        <Image
          src='/++YS_LOGO.png'
          alt='Logo'
          width={150}
          height={80}
        />
        <ul className={`${styles.navList} ${isMenuOpen ? styles.open : ''}`}>
          <li className={router.pathname === '/' ? styles.activeLink : styles.navListItem}>
            <Link href='/'>
              Home
            </Link>
          </li>
          <li className={router.pathname === '/about' ? styles.activeLink : styles.navListItem}>
            <Link href='/about'>
              About
            </Link>
          </li>
          <li className={router.pathname === '/contact' ? styles.activeLink : styles.navListItem}>
            <Link href='/contact'>
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

