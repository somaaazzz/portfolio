import Navbar from "../../components/Navbar";
import Head from "next/head";
import styles from "../../styles/quizProj.module.css";

export default function treeProj() {
  return (
    <>
      <Head>
        <title>Tree</title>
      </Head>
      <Navbar></Navbar>
      <div className={styles.container}>
        <div className={styles.top}>
          <div className={styles.title}>Coming Soon...</div>
        </div>
      </div>
    </>
  );
}
