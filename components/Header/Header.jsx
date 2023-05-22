import Link from 'next/link';
import { useState, useEffect } from 'react';
import styles from './Header.module.css';
import { AiFillHome, AiFillContacts } from 'react-icons/ai';
import { HiInformationCircle } from 'react-icons/hi';
import { MdWork } from 'react-icons/md';
import Image from 'next/image';
import { useRouter } from 'next/router';

export default function Header() {
  const router = useRouter();
  const [showIcons, setShowIcons] = useState(false);

  useEffect(() => {
    function handleResize() {
      setShowIcons(window.innerWidth <= 499);
    }

    handleResize(); // Check initial width
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <header>
      <nav className={styles.nav}>
        <Link href='/'>
          <Image
            src='/YS-logo.png'
            alt='Logo'
            width={100}
            height={80}
            className={styles.logo}
          />
        </Link>
        <ul className={styles.navList}>
          <li className={router.pathname === '/' ? styles.activeLink : styles.navListItem}>
            <Link href='/'>{showIcons ? <AiFillHome className={styles.icon}/> : 'Home'}</Link>
          </li>
          <li className={router.pathname === '/about' ? styles.activeLink : styles.navListItem}>
            <Link href='/about'>{showIcons ? <HiInformationCircle className={styles.icon} /> : 'About'}</Link>
          </li>
          <li className={router.pathname === '/projects' ? styles.activeLink : styles.navListItem}>
            <Link href='/projects'>{showIcons ? <MdWork className={styles.icon} /> : 'Projects'}</Link>
          </li>
          <li className={router.pathname === '/contact' ? styles.activeLink : styles.navListItem}>
            <Link href='/contact'>
              {showIcons ? <AiFillContacts className={styles.icon} /> : 'Contact'}
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
