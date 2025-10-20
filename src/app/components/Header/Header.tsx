"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Header.module.scss";

export default function Header() {
    const pathName = usePathname();

    const isAll = pathName === "/showcase";
    const isPc = pathName.startsWith("/showcase/pc");
    const isMobile = pathName.startsWith("/showcase/mobile");

    return (
        <>
            <header>
                <nav className={styles.nav}>
                    <Link href="/showcase" className={`${styles.link} ${isAll ? styles.active : ""}`} aria-current={isAll ? "page" : undefined}>ALL</Link>
                    <Link href="/showcase/pc" className={`${styles.link} ${isPc ? styles.active : ""}`} aria-current={isPc ? "page" : undefined}>PC</Link>
                    <Link href="/showcase/mobile" className={`${styles.link} ${isMobile ? styles.active : ""}`} aria-current={isMobile ? "page" : undefined}>MOBILE</Link>
                </nav>
            </header>
        </>
    )

}