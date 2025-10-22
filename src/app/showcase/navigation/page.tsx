"use client";
import styles from "./page.module.scss";
import Link from "next/link";

export default function navigationPage() {
    return (
        <main className={styles.wrap}>
            <h1 className={styles.head}>Navigation Menu</h1>

            <section className={styles.card}>
                <div className={styles.cardHead}>Preview</div>
                <div className={styles.preview}>
                    <nav className={styles.nav}>
                        <ul>
                            <li><Link href="#">Home</Link></li>
                            <li><Link href="#">Conponents</Link></li>
                            <li><Link href="#">Docs</Link></li>
                            <li><Link href="#">List</Link></li>
                            <li><Link href="#">Sample</Link></li>
                            <li><Link href="#">Icon</Link></li>
                        </ul>
                    </nav>
                </div>
            </section>

            <section className={styles.card}>
                <div className={styles.cardHead}>目的</div>
                <ul className={styles.list}>
                    <li>サイトやアプリ内での 情報構造を整理して提示する</li>
                    <li>ユーザーに 現在地を示し、目的のページへ導く</li>
                    <li>コンテンツ探索の効率を上げ、迷わず操作できるようにする</li>
                </ul>
            </section>

            <section className={styles.card}>
                <div className={styles.cardHead}>使い道・用途</div>
                <ul className={styles.list}>
                    <li>サイト全体のヘッダーやサイドバーで主要ページへの導線を提供</li>
                </ul>
            </section>

            <section className={styles.card}>
                <div className={styles.cardHead}>注意点</div>
                <ul className={styles.list}>
                    <li>
                        項目数が多すぎると迷いやすい<br />
                        → 情報設計をきちんと行い、階層を整理する必要あり
                    </li>
                    <li>
                        ラベルが抽象的だと誤解を招く<br />
                        → 「サービス」や「その他」など曖昧な表現は避ける
                    </li>
                    <li>
                        階層が深すぎるとUXが低下<br />
                        → Mega Menuやドロップダウンは2階層程度に収めるのがベター
                    </li>
                    <li>
                        現在位置（Active state）が不明確<br />
                        → どこを見ているか分からないとユーザーが迷子になる
                    </li>
                </ul>
            </section>

            <div className={styles.footerNav}>
                <Link href="/showcase">← Back to list</Link>
            </div>
        </main>
    );
}