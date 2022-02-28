import Link from "next/link";

import Card from "../../../../components/layout/card";

import styles from "./index.module.css";

export default function Cards() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.title}>
          <h2>Encontre o seu espaço para chamar de meu lar</h2>
        </div>
        <div className={styles.useble}>
          <div className={styles.line}>
            <div className={styles.lineitem}>
              <Link href="/detail">
                <a>
                  <Card />
                </a>
              </Link>
            </div>
            <div className={styles.lineitem}>
              <Link href="/detail">
                <a>
                  <Card />
                </a>
              </Link>
            </div>
            <div className={styles.lineitem}>
              <Link href="/detail">
                <a>
                  <Card />
                </a>
              </Link>
            </div>
            <div className={styles.lineitem}>
              <Link href="/detail">
                <a>
                  <Card />
                </a>
              </Link>
            </div>
            <div className={styles.lineitem}>
              <Link href="/detail">
                <a>
                  <Card />
                </a>
              </Link>
            </div>
            <div className={styles.lineitem}>
              <Link href="/detail">
                <a>
                  <Card />
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
