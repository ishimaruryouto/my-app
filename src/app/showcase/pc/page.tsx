import Link from "next/link";
import styles from "./page.module.scss";

export default function PC() {
    return (
        <>
            <h1 className={styles.head}>Showcase</h1>
            <div className={styles.wrap}>
                <div className={styles.link_block}>
                    <Link href="/showcase/navigation">Navigation Menu</Link>
                    <Link href="#">Table</Link>
                    <Link href="#">Tooltip</Link>
                </div>
            </div>
        </>
    )
}