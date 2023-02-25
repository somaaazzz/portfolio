import Navbar from "../../components/navbar";
import Head from "next/head";
import styles from "../../styles/matcherProj.module.css";
import Image from "next/image";

export default function matcherProj() {
  return (
    <>
      <Head>
        <title>matcherProj</title>
      </Head>
      <Navbar></Navbar>
      <div className={styles.container}>
        <div className={styles.top}>
          <div className={styles.title}>Matcher</div>
          <Image
            src="/images/matcher-login.png"
            width={500}
            height={500}
          ></Image>
        </div>
        <div className={styles.center}>
          <div className={styles.paragraph}>
            <div className={styles.subtitle}>Introduction</div>
            <div className={styles.text}>
              Matcher is a dynamic and user-friendly website that aims to
              facilitate UC Berkeley students in forming study groups with
              like-minded peers who share similar academic interests. Developed
              as part of the CS198 Introduction to Full-Stack Development
              course, this innovative platform was the culmination of the
              collective efforts of our dedicated team of seven members, with
              each of us contributing our unique skillset to make it a success.
              As a front-end developer and visual designer, I played a key role
              in bringing the vision of Matcher to life, creating an intuitive
              and visually appealing interface that seamlessly integrates with
              the back-end functionality of the application. Our project stands
              as a testament to the power of collaborative learning and
              highlights the immense potential of technology to enhance the
              academic experience.
            </div>
          </div>
          <div className={styles.paragraph}>
            <div className={styles.subtitle}>Functionality</div>
            <div className={styles.text}>
              <div className={styles.flex}>
                <Image
                  src="/images/matcherprofilemaker.png"
                  width={300}
                  height={300}
                  className={styles.img}
                ></Image>
                <div>
                  To begin using Matcher, the first step is to create an
                  engaging profile that showcases your interests and your
                  classes, which can attract like-minded individuals who share
                  similar passions. Once you've crafted your profile, you have
                  the option to either wait for other users to reach out to you
                  or actively search for potential study partners using our
                  intuitive search feature.
                </div>
              </div>
              <div className={styles.flex}>
                <div>
                  As I mentioned above, users can narrow down the potential
                  study partner based on their preference. For example, users
                  can filter by classes, pronouns, year so that they can find
                  best study partner. If users find good candidate, they can
                  send like and if someone like them back, they can exchange
                  their contact.
                </div>
                <Image
                  src="/images/Matcherfind.jpg"
                  width={300}
                  height={300}
                  className={styles.img}
                ></Image>
              </div>
              <div className={styles.flex}>
                <Image
                  src="/images/matcherfilter.png"
                  width={300}
                  height={300}
                  className={styles.img}
                ></Image>
                <div>
                  Users have the ability to discover individuals who have
                  expressed interest in them. When both parties express mutual
                  interest, it creates a match, and they are given the
                  opportunity to exchange contact information to plan a meeting
                  and discuss study topics.
                </div>
              </div>
            </div>
          </div>
          <div className={styles.paragraph}>
            <div className={styles.subtitle}>Recap</div>
            <div className={styles.text}>
              Working on this project with a team of more than 5 people was a
              new experience for me. The collaboration allowed us to develop a
              wide range of functionalities that would not have been possible
              individually. I'm grateful for my talented teammates whose skills
              and contributions made the project a success. Furthermore, the
              project taught me a lot, as we had a deadline to meet and had to
              rely on each other's strengths to accomplish our goals.
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
