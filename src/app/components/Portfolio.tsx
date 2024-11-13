// src/components/Home.tsx
import styles from './portfolio.module.css';
import Image from 'next/image';
const Portfolio = () => {
  return (
    <section id="home" className={styles.home}>
      <div className={styles.content}>
        <h1 className={styles.hax}>Welcome to My Portfolio</h1>
        <p className={styles.next}>I'm a passionate developer who loves to build amazing things.</p>
      </div>
    </section>
  );
};

export default Portfolio; 
