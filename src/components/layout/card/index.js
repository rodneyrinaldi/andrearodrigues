import React from "react";

import styles from "./index.module.css";

function Card(props) {
  return (
    <>
      <div className={styles.container}>
        <img src="./building/imovel0.png" alt="" className={styles.image} />
        <p>
          <b>SPPACE</b>
        </p>
        <p>Jardim Botânico</p>
      </div>
    </>
  );
}

export default Card;
