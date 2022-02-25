import Card from "../../../../components/layout/card";

import styles from "./index.module.css";

export default function Cards() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.useble}>
          <div>
            <h2>Encontre o seu espaço para chamar de meu lar</h2>
          </div>

          <div className={styles.line}>
            <div className={styles.lineitem}>
              <Card />
            </div>
            <div className={styles.lineitem}>
              <Card />
            </div>
            <div className={styles.lineitem}>
              <Card />
            </div>
            <div className={styles.lineitem}>
              <Card />
            </div>
            <div className={styles.lineitem}>
              <Card />
            </div>
            <div className={styles.lineitem}>
              <Card />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
