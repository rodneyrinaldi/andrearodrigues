import styles from "./index.module.css";

export default function Cards() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.useble}>
          <div>
            <h2>Perguntas mais frequentes</h2>
          </div>

          <div className={styles.line}>
            <div className={styles.lineitem}></div>
          </div>
        </div>
      </div>
    </>
  );
}
