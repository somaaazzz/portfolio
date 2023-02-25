import styles from "../styles/About.module.css";
import Image from "next/image";

const About = () => {
  return (
    <div className={styles.container} id="about">
      <div className={styles.header1}>About</div>
      <div className={styles.aboutme}>
        <div className={styles.portrait}>
          <Image
            src="/images/portrait.jpg"
            width={497}
            height={331}
            className={styles.portrait}
          ></Image>
        </div>

        <div className={styles.education}>
          <div>
            <div className={styles.header2}>Meiji University</div>
            <div className={styles.text}>
              2020 April - 2025 May<br></br>Junior student majoring in computer
              science. Expected to graduate in 2025 May.
            </div>
          </div>
          <div>
            <div className={styles.header2}>UC Berkeley</div>
            <div className={styles.text}>
              2022 Augst - 2023 May<br></br>An academic year exchange program.
              <br></br>Studied computer science.
            </div>
          </div>
        </div>
      </div>
      <div className={styles.bottom}>
        <div className={styles.header2}>Introduction</div>
        <div className={styles.text}>
          I am interested in human-computer interaction, UI/UX, and web
          development. The reason for interest stem from my fascination with
          how technology impacts our lives and how we interact with it. I am
          intrigued by the idea of designing user-friendly interfaces and
          creating seamless user experiences that make technology more
          accessible and intuitive for people. Also, I am drawn to the technical
          side of web development, where I can leverage my coding skills to
          build complex applications that solve real-world problems.
        </div>
      </div>
    </div>
  );
};

export default About;
