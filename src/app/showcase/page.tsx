import Link from "next/link";
import styles from "./page.module.scss";



export default function All() {
    return (
        <>
            <h1 className={styles.head}>Showcase</h1>
            <div className={styles.wrap}>
                <div className={styles.link_block}>
                    <Link href="/showcase/button">Button</Link>
                    <Link href="#">Input</Link>
                    <Link href="#">Tooltip</Link>
                    <Link href="#">Sheet</Link>
                    <Link href="#">Toast</Link>
                    <Link href="#">Dialog / Modal</Link>
                    <Link href="#">Navigation Menu</Link>
                    <Link href="#">Table</Link>
                    <Link href="#">Tabs</Link>
                </div>
            </div>

        </>
    )
}