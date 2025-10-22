"use client";
import styles from "./page.module.scss";
import Link from "next/link";

export default function ButtonPage() {
    return (
        <main className={styles.wrap}>
            <h1 className={styles.head}>Button</h1>

            <section className={styles.card}>
                <div className={styles.cardHead}>Preview</div>
                <div className={styles.preview}>
                    <button className={styles.nomal_btn}>Button</button>
                </div>
            </section>

            <section className={styles.card}>
                <div className={styles.cardHead}>目的</div>
                <ul className={styles.list}>
                    <li>押下による反応で「操作が完了した」という安心感を与える</li>
                    <li>ユーザーの操作を明確に開始させるための起点になる</li>
                </ul>
            </section>

            <section className={styles.card}>
                <div className={styles.cardHead}>使い道・用途</div>
                <ul className={styles.list}>
                    <li>フォーム送信（ログイン・検索・登録など）</li>
                    <li>アクション実行（モーダルを開く、処理を開始するなど）</li>
                    <li>ページ遷移やリンク移動</li>
                    <li>ユーザーにとって重要な行動（CTA：購入・申し込みなど）の提示</li>
                    <li>モーダル起動やページ遷移のトリガー</li>
                </ul>
            </section>

            <section className={styles.card}>
                <div className={styles.cardHead}>注意点</div>
                <ul className={styles.list}>
                    <li>
                        見た目がリンクと区別できないと混乱する<br />
                        → 「ボタンなのかリンクなのか」ユーザーが迷うとクリック率が下がる
                    </li>
                    <li>
                        デザインが目立ちすぎ／目立たなすぎ問題<br />
                        → CTAボタンは強調すべきだけど、多すぎると逆にどこを押せばいいかわからなくなる
                    </li>
                    <li>
                        配置やラベルの曖昧さ<br />
                        → 「OK」「はい」など抽象的な文言だと誤操作を招く
                    </li>
                    <li>
                        押した後のフィードバック不足<br />
                        → 反応がないと「押せてない？」と不安になり連打されやすい
                    </li>
                </ul>
            </section>

            <section className={styles.card}>
                <div className={styles.cardHead}>Hover</div>
                <div className={styles.preview}>
                    <div className={styles.stack}>
                        <button className={`${styles.btn} ${styles.filled}`}>Button</button>
                    </div>
                </div>
            </section>

            <section className={styles.card}>
                <div className={styles.cardHead}>Link</div>
                <div className={styles.preview}>
                    <div className={styles.stack}>
                        <button className={`${styles.link_btn} ${styles.filled}`}>Link</button>
                    </div>
                </div>
            </section>

            <section className={styles.card}>
                <div className={styles.cardHead}>Rounded</div>
                <div className={styles.preview}>
                    <div className={styles.stack}>
                        <button className={`${styles.rounded_btn} ${styles.filled}`}>→</button>
                    </div>
                </div>
            </section>


            <div className={styles.footerNav}>
                <Link href="/showcase">← Back to list</Link>
            </div>
        </main>
    );
}