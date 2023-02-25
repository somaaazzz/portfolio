import Navbar from "../../components/Navbar";
import Head from "next/head";
import styles from "../../styles/unicornProj.module.css";
import Image from "next/image";

export default function treeProj() {
  return (
    <>
      <Head>
        <title>My Little Unicorn</title>
      </Head>
      <Navbar></Navbar>
      <div className={styles.container}>
        <div className={styles.top}>
          <div className={styles.title}>My Little Unicorn</div>
          <Image src="/images/unicorn.jpg" width={500} height={500}></Image>
        </div>
        <div className={styles.center}>
          <div className={styles.paragraph}>
            <div className={styles.subtitle}>Introduction</div>
            <div className={styles.text}>
              Quiz for Good is a web application that was created using
              React.js, a cutting-edge technology for building dynamic user
              interfaces. This app was developed by me and my talented partner,
              Ashley, during a hackathon, called TreeHacks hosted at Stanford
              University. As passionate learners in the education track, we were
              inspired to create an interactive quiz platform that can educate
              and raise awareness about environmental knowledge, a topic that we
              believe is crucial for the wellbeing of our planet and future
              generations. With Quiz for Good, users can now test their
              knowledge on various environmental issues and learn about
              sustainable practices while having fun and engaging in a
              meaningful way.
            </div>
          </div>
          <div className={styles.paragraph}>
            <div className={styles.subtitle}>Recap</div>
            <div className={styles.text}>
              Overall, I learned a lot through this hackathon. I met so many inspirational people and saw lots of cool projects. I will defenitly come back to this hackathon next year.
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
