import Navbar from "../../components/Navbar";
import Head from "next/head";
import styles from "../../styles/quizProj.module.css";
import Image from "next/image";

export default function qizProj() {
  return (
    <>
      <Head>
        <title>Quiz For Good</title>
      </Head>
      <Navbar></Navbar>
      <div className={styles.container}>
        <div className={styles.top}>
          <div className={styles.title}>Quiz For Good</div>
          <Image src="/images/quizapp.png" width={500} height={500}></Image>
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
            <div className={styles.subtitle}>Questions</div>
            <div className={styles.text}>
              <div className={styles.flex}>
                <Image
                  src="/images/quizapp2.png"
                  width={300}
                  height={300}
                  className={styles.img}
                ></Image>
                <div>
                  Each and every question that Quiz for Good presents to its
                  users is created by ChatGPT. Leveraging the powerful
                  capabilities of ChatGPT, our application fetches infinite
                  number of questions by calling its API, so that ensuring the
                  user experience is always fresh, and intellectually
                  stimulating. In fact, during the event, we are encouraged to
                  use ChatGPT API because OpenAI was one of the sponsor for ther
                  event. I specifically did visual design using figma, and
                  front-end, and my partner Ashley did the systematic part where
                  calling API and store the data as Json.
                </div>
              </div>
            </div>
          </div>
          <div className={styles.paragraph}>
            <div className={styles.subtitle}>Recap</div>
            <div className={styles.text}>
              Overall, I learned a lot through this hackathon. I met so many
              inspirational people and saw lots of cool projects. I will
              defenitly come back to this hackathon next year.
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
