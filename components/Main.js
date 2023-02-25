import styles from "../styles/Main.module.css";

const Main = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <span className={styles.text}>based in Tokyo, JP</span>
      </div>
      <div className={styles.center}>
        <span className={styles.myname}>Soma Tomita</span>
        <span className={styles.text}>is a software engineer</span>
      </div>
      <div className={styles.buttom}>
        <div className={styles.text}>Human-Computer interaction</div>
        <div className={styles.text}>Visual design</div>
        <div className={styles.text}>Web Development</div>
      </div>
    </div>
  );
};

export default Main;
