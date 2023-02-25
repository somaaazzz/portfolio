import Head from "next/head";
import Navbar from "../components/Navbar";
import Main from "../components/Main";
import About from "../components/About";
import styles from "/styles/Home.module.css"
import Projects from "../components/Projects";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <>
      <Head>
        <title>home</title>
      </Head>
      <Navbar></Navbar>
      <div className={styles.container} id="home">
        <Main></Main>
        <About></About>
        <Projects></Projects>
        <Contact></Contact>
      </div>
    </>
  );
}
