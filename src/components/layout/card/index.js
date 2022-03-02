import React from "react";

import styles from "./index.module.css";

function Card(props) {
  return (
    <>
      <div id={props.id + "div"} className={styles.container}>
        <img
          id={props.id + "img"}
          src="./building/imovel0.png"
          alt=""
          className={styles.image}
        />
        <div id={props.id + "div"} className={styles.title}>
          <h2 id={props.id + "h2"}>{props.title}</h2>
          <p id={props.id + "p"}>{props.description}</p>
        </div>
      </div>
    </>
  );
}

export default Card;
