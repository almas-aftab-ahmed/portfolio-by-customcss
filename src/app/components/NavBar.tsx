import Link from 'next/link';
import styles from './navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <h1>Portfolio Web</h1>
      </div>
      <input type="checkbox" id="menu-toggle" className={styles.menuToggle} />
      <label htmlFor="menu-toggle" className={styles.menuIcon}>☰</label>
      <ul className={styles.navList}>
        <li>
          <Link href="#home">Home</Link>
        </li>
        <li>
          <Link href="#about">About</Link>
        </li>
        <li>
          <Link href="#skills">Skills</Link>
        </li>
        <li>
          <Link href="#contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
