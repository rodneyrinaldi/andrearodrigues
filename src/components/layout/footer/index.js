import React from "react";

import styles from "./index.module.css";

function Footer() {
  return (
    <>
      <hr className={styles.line} />
      <div className={styles.container}>
        <a href="https://dev.rodneyrinaldi.com">dev.rodneyrinaldi.com</a>
        <a href="https://rodneyrinaldi.com">
          <img src="./rr.ico" alt="rodneyrinaldi" />
        </a>
        <a href="https://dpo.rodneyrinaldi.com">dpo.rodneyrinaldi.com</a>
      </div>
    </>
  );
}

export default Footer;
