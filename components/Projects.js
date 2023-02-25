import styles from "../styles/Projects.module.css";
import Image from "next/image";
import Link from "next/link";

const Projects = () => {
  return (
    <div className={styles.container} id="projects">
      <div className={styles.top}>
        <span className={styles.header1}>Projects</span>
      </div>
      <div className={styles.projectscontaier}>
        <Card
          imageSrc="/images/maze.png"
          title="Build Your Own World"
          description="Java-based game that uses data structures, algorithms, and the StdDraw library"
          href="/projects/mazeProj"
        ></Card>
        <Card
          imageSrc="/images/matcher-login.png"
          title="Matcher"
          description="Online matching application using next.js, and mongodb"
          href="/projects/matcherProj"
        ></Card>
        <Card
          imageSrc="/images/unicorn.jpg"
          title="My Little Unicorn"
          description="Mock up landing page made with next.js"
          href="/projects/unicornProj"
        ></Card>
        <Card
          imageSrc="/images/quiz.png"
          title="Quiz For Good"
          description="Quiz app made for TreeHacks at Stanford University. Using next.js"
          href="/projects/quizProj"
        ></Card>
        <Card
          imageSrc="/images/tree.jpg"
          title="Mock Up Tree"
          description="3D printed tree using fusion 360"
          href="/projects/treeProj"
        ></Card>
      </div>
    </div>
  );
};

export default Projects;

const Card = ({ imageSrc, title, description, href }) => {
  return (
    <div className={styles.card}>
      <Link href={href}>
        <Image
          src={imageSrc}
          width={300}
          height={300}
          alt={title}
          className={styles.img}
        />
        <div className={styles.body}>
          <div className={styles.header2}>{title}</div>
          <div className={styles.text}>{description}</div>
        </div>
      </Link>
    </div>
  );
};
