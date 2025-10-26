"use client";

import styles from "./page.module.scss";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function SheetPage() {
    const [open, setOpen] = useState(false);
    const nameRef = useRef<HTMLInputElement | null>(null);


    useEffect(() => {
        const onKey = (e: KeyboardEvent) => {
            if (e.key === "Escape") setOpen(false);
        };
        if (open) {
            document.addEventListener("keydown", onKey);
            document.body.style.overflow = "hidden";

            setTimeout(() => nameRef.current?.focus(), 0);
        } else {
            document.body.style.overflow = "";
        }
        return () => {
            document.removeEventListener("keydown", onKey);
            document.body.style.overflow = "";
        };
    }, [open]);

    const close = () => setOpen(false);

    return (
        <main className={styles.wrap}>
            <h1 className={styles.head}>Showcase</h1>

            <section className={styles.card}>
                <div className={styles.cardHead}>Preview</div>
                <div className={styles.preview}>
                    <button className={styles.nomal_btn} onClick={() => setOpen(true)}>
                        Open
                    </button>
                </div>
            </section>

            <section className={styles.card}>
                <div className={styles.cardHead}>目的</div>
                <ul className={styles.list}>
                    <li>サイトやアプリ内での情報構造を整理して提示する</li>
                    <li>ユーザーに現在地を示し、目的のページへ導く</li>
                    <li>コンテンツ探索の効率を上げ、迷わず操作できるようにする</li>
                </ul>
            </section>

            <section className={styles.card}>
                <div className={styles.cardHead}>使い道・用途</div>
                <ul className={styles.list}>
                    <li>設定変更・詳細フォーム・補助フローを右側のシートで表示</li>
                </ul>
            </section>

            <section className={styles.card}>
                <div className={styles.cardHead}>注意点</div>
                <ul className={styles.list}>
                    <li>閉じる手段は複数（×ボタン / ESC / 背景クリック）を用意</li>
                    <li>親画面はスクロール固定して操作を限定する</li>
                    <li>見出し・説明を置いてコンテキストを明確にする</li>
                </ul>
            </section>

            <div className={styles.footerNav}>
                <Link href="/showcase">← Back to list</Link>
            </div>


            {open && <div className={styles.overlay} onClick={close} aria-hidden="true" />}

            <aside
                className={`${styles.sheet} ${open ? styles.open : ""}`}
                role="dialog"
                aria-modal="true"
                aria-labelledby="sheet-title"
                aria-describedby="sheet-desc"
                onClick={(e) => e.stopPropagation()}
            >
                <header className={styles.sheetHeader}>
                    <h2 id="sheet-title">Change Profile</h2>
                    <button
                        className={styles.iconClose}
                        aria-label="Close"
                        onClick={close}
                    >
                        ×
                    </button>
                    <p id="sheet-desc" className={styles.desc}>
                        プロフィールを変更し、完了したら、保存してください
                    </p>
                </header>

                <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
                    <label className={styles.label}>
                        Name
                        <input ref={nameRef} className={styles.input} type="text" />
                    </label>

                    <label className={styles.label}>
                        User Name
                        <input className={styles.input} type="text" />
                    </label>

                    <div className={styles.actions}>
                        <button type="submit" className={styles.primary}>
                            Save Change
                        </button>
                        <button type="button" className={styles.ghost} onClick={close}>
                            Close
                        </button>
                    </div>
                </form>
            </aside>
        </main>
    );
}