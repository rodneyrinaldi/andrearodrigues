import React from "react";

import styles from "./index.module.css";

function Menu() {
  const app = "http://app.autorizacao.digital/signin";

  return (
    <div className={styles.container}>
      <a href={app} target="_blank">
        MENU
      </a>
    </div>
  );
}

export default Menu;
