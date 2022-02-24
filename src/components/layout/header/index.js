import React from "react";
import Head from "next/head";

import Menu from "../menu";
import styles from "./index.module.css";

function Header(props) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <title>minha casa meu lar</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.container}>
        <div>
          <img
            src="./logo.png"
            alt="minha casa meu lar"
            className={styles.logo}
          />
          {/* <Menu /> */}
        </div>
        <h1 className={styles.title}> minha casa meu lar</h1>
      </div>
    </>
  );
}

export default Header;
