import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Login() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Login to Dev Test</title>
        <meta name="description" content="Dev Test" />
        <link rel="icon" href="/images/svg/icon.svg" />
      </Head>

      <main className={styles.main}>
        <h1 className={`${styles.title}`}>
          Login to{" "}
          <Link href="/">
            <a>Dev Test!</a>
          </Link>
        </h1>
      </main>

      <footer className={styles.footer}>
        <Link href="/">
          <a>
            Powered by{" "}
            <span className={styles.logo}>
              <Image
                src="/images/svg/full_logo.svg"
                alt="DevTest Logo"
                width={72}
                height={16}
              />
            </span>
          </a>
        </Link>
      </footer>
    </div>
  );
}
