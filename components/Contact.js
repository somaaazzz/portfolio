import styles from "../styles/Contact.module.css";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

const Contact = () => {
  return (
    <div className={styles.container} id="contact">
      <div className={styles.top}>Contact</div>
      <div className={styles.center}>
        I love meeting interesting people. If you're in Japan and want to grab
        coffee, don't hesitate to reach out.
      </div>
      <div className={styles.bottom}>
        <a href="https://www.linkedin.com/in/soma-tomita/">
          <FaLinkedin size={40} className={styles.link}></FaLinkedin>
        </a>
        <a href="https://github.com/somaaazzz">
          <FaGithub size={40} className={styles.link}></FaGithub>
        </a>
        <a href="https://www.instagram.com/somatomita/">
          <FaInstagram size={40} className={styles.link}></FaInstagram>
        </a>
      </div>
    </div>
  );
};

export default Contact;
