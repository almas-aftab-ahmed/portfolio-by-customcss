// src/components/Contact.tsx
import styles from './Contact.module.css';

const Contact = () => {
  return (
    <section id="contact" className={styles.contact}>
      <h2 className='head'>Contact Me</h2>
      <p>If you'd like to get in touch, feel free to send me a message.</p>
      <button className='toggle'>Contact Me</button>
    </section>
  );
};

export default Contact;
