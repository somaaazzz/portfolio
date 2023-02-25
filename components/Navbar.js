import styles from "../styles/navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.navitem}>
        <a href="/#home" className={styles.link}>
          home
        </a>
      </div>
      <div className={styles.navitem}>
        <a href="/#about" className={styles.link}>
          about
        </a>
      </div>
      <div className={styles.navitem}>
        <a href="/#projects" className={styles.link}>
          projects
        </a>
      </div>
      <div className={styles.navitem}>
        <a href="/#contact" className={styles.link}>
          contact
        </a>
      </div>
      <div className={styles.navitem}>
        <a href="/#resume" className={styles.link}>
          resume
        </a>
      </div>
    </div>
  );
};

export default Navbar;
