import styles from './About.module.css';

const About = () => {
  return (
    <section id="about" className={styles.about}>
      <h2 className={styles.heading}>About Me</h2>
      <p className={styles.green}>
        I'm a software developer with a passion for building scalable, user-friendly web
        applications. I have experience in both front-end and back-end development, and I am a passionate Front-End Developer with a strong foundation in building websites and web applications. I have hands-on experience with modern web technologies including TypeScript, JavaScript, HTML, CSS, and Tailwind CSS, enabling me to create responsive and visually appealing user interfaces. As a student, I am constantly learning and expanding my skill set, currently diving into the world of Artificial Intelligence to stay ahead of the curve in the ever-evolving tech landscape. I enjoy combining creativity with coding to deliver seamless and engaging web experiences.
      </p>
    </section>
  );
};

export default About;
