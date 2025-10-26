import Link from "next/link";
import styles from "./page.module.scss";

export default function PC() {
    return (
        <>
            <h1 className={styles.head}>Showcase</h1>
            <div className={styles.wrap}>
                <div className={styles.link_block}>
                    <Link href="/showcase/sheet">Sheet</Link>
                    <Link href="#">Tabs</Link>
                    <Link href="#">Toast</Link>
                </div>
            </div>
        </>
    )
}