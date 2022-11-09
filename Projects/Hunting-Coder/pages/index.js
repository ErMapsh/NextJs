import Head from "next/head"; // we got head from Next js,, is similar like html head
import Image from "next/image";
import Link from "next/link";

// using import
import styles from "../styles/Home.module.css";


export default function Home() {
  return (
    <>
    <div className={styles.container}>
      <Head>
        <title>Hunting Coder</title>
        <meta name="description" content="Hunting Coder for coders" />
        <meta
          name="keywords"
          content="Nextjs, Hunting Coder for coders, Hunting Coders"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <div className={`${styles.blogContainer}`}>
          <div className={styles.headingPlusSlogan}>
            <h1 className={styles.h1}>Hunting Coder</h1>
            <div className={styles.imageDiv}>
              <Image src={'/coder.jpg'} width={300} height={200} className={styles.image} />
            </div>
            <p>A blog for hunting coders by a hunting coder</p>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
