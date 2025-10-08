import Link from "next/link";
import image from "next/image";
import styles from "../app/page.module.scss";

export default function Home() {
  return (
    <>
      <div className={styles.hero}>
        <div className={styles.inner}>
          <h1 className={styles.title}>UI Components Website</h1>
          <Link href={"/showcase"} className={styles.cta}>
            Let’s check
          </Link>
        </div>
      </div>
    </>
  )
}