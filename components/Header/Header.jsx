import Link from 'next/link';
import { useState } from 'react';
import styles from './Header.module.css';
import { FiMenu } from 'react-icons/fi';
import Image from 'next/image'
import { useRouter } from 'next/router';

export default function Header() {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showLogo, setShowLogo] = useState(true);

  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen);
    setShowLogo(!showLogo);
  }

  return (
    <header>
      <nav className={styles.nav}>
        <Link href='/' className={styles.menuToggle} onClick={toggleMenu}>
        <button className={styles.menuToggle} onClick={toggleMenu}>
          <FiMenu />
        </button>
      </Link>
        <Image
          src='/YS-logo.png'
          alt='Logo'
          width={100}
          height={80}
          className={showLogo ? styles.showLogo : styles.hideLogo}
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
          <li className={router.pathname === '/projects' ? styles.activeLink : styles.navListItem}>
            <Link href='/projects'>
              Projects
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

