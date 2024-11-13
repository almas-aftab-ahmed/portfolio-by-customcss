import styles from './skills.module.css';

const Skills = () => {
  return (
    <section id="skills" className={styles.skills}>
      <h2 className={styles.skill}>Skills</h2>
      <div className={styles.skillList}>
        <div className={styles.skillItem}>JavaScript</div>
        <div className={styles.skillItem}>HTML</div>
        <div className={styles.skillItem}>Next.js</div>
        <div className={styles.skillItem}>TypeScript</div>
        <div className={styles.skillItem}>Tailwind CSS</div>
      </div>
    </section>
  );
};

export default Skills;
