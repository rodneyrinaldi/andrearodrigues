import React from "react";

import styles from "./index.module.css";

function Card(props) {
  return (
    <>
      <div className={styles.container}>
        <img src="./building/imovel0.png" alt="" className={styles.image} />
        <div className={styles.title}>
          <p>
            <h2>{props.title}</h2>
          </p>
          <p>{props.description}</p>
        </div>
      </div>
    </>
  );
}

export default Card;
