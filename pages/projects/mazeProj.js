import Navbar from "../../components/navbar";
import Head from "next/head";
import styles from "../../styles/mazeProj.module.css";
import Image from "next/image";

export default function MazeProj() {
  return (
    <>
      <Head>
        <title>Build Your Own World</title>
      </Head>
      <Navbar></Navbar>
      <div className={styles.container}>
        <div className={styles.top}>
          <div className={styles.title}>Build Your Own World</div>
          <Image src="/images/maze.png" width={500} height={500}></Image>
        </div>
        <div className={styles.center}>
          <div className={styles.paragraph}>
            <div className={styles.subtitle}>Introduction</div>
            <div className={styles.text}>
              Build Your Own World is a Java-based game that uses data
              structures, algorithms, and the StdDraw library. I, along with my
              project partner Lori, created a maze where player can explore the
              world. The world consists of a system of rectangular rooms and
              hallways. Hallways connect rooms together. The players have the
              option to either play with the lights on or off, in which case
              only a small subset of blocks within the player’s field of view
              are visible. Additionally, players can choose to save and quit
              their game to continue later. World is created by by inputting an
              integer seed. Each world corresponding to the seed is randomly
              created and unique.
            </div>
          </div>
          <div className={styles.paragraph}>
            <div className={styles.subtitle}>Algorithms</div>
            <div className={styles.text}>
              <div className={styles.flex}>
                <Image
                  src="/images/Alg1.png"
                  width={300}
                  height={300}
                  className={styles.img}
                ></Image>
                <div>
                  For room generation, we needed to meet the requirement that
                  every room doesn't overlap each other. Also, the position of
                  the room must be random value corresponding to the seed value
                  that user input. We picked random location for rooms that are
                  unique. Also, we wanted our room to spread from the center to
                  the corner, so we used normal distribution as a random
                  function so that maze looks good.
                </div>
              </div>
              <div className={styles.flex}>
                <div>
                  For the next step, we expand the room from the position that
                  we defined in the previous step. We needed to expand the room
                  such that each room doesn't overlap the otehr. I cannot
                  explain everything we did here, but we basically track all the
                  cell in the maze and if the next expansion step will create
                  overlap, we stop the expansion.
                </div>
                <Image
                  src="/images/Alg2.png"
                  width={300}
                  height={300}
                  className={styles.img}
                ></Image>
              </div>
              <div className={styles.flex}>
                <Image
                  src="/images/Alg3.png"
                  width={300}
                  height={300}
                  className={styles.img}
                ></Image>
                <div>
                  At last, we create hallways to connect each room. We needed to
                  make sure that all rooms are reachable, otherwise players
                  might want to visit a certain room and they cannot reach to
                  the room. Again, I cannot explain everything we did, but we
                  assume whole maze is graph where rooms are verteces and
                  hallways are edge. We implemented funtion to connect graph
                  without making any overlap. This was actually what we learned
                  from graph theory class, and it was greate to see that we
                  could actually use it in the real life application.
                </div>
              </div>
            </div>
          </div>
          <div className={styles.paragraph}>
            <div className={styles.subtitle}>Recap</div>
            <div className={styles.text}>
              Overall, there were a lot of smaller problems that this project
              presented that I did not mention above. Many of these were too
              minute to mention without making this post needlessly long. As
              well, some of the game features such as player movement, flower
              picking, and score keeping were handled by my trusty project
              partner. Though I know the general gist of what he did, I am not
              confident in my ability to explain. Nonetheless, this brings me to
              my last point. This project offered not only an opportunity to
              sharpen my coding skills, but also taught the both of us to work
              with and value a project partner.
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
