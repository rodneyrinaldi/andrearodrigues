import React from "react";
import { useRouter } from "next/router";

import styles from "./index.module.css";

function SideMenu(props) {
  const router = useRouter();
  const wapp =
    "https://api.whatsapp.com/send?phone=+551131646843&text=Olá, gostaria de obter maiores informações sobre:";

  return (
    <>
      {props.showback === "yes" ? (
        <div className={styles.container}>
          <a onClick={() => router.back()}>
            <img width={44} src="/sidebar/back.png" alt="back" />
          </a>
        </div>
      ) : (
        <></>
      )}

      {/* <div className={styles.container}>
        <a href="#" onClick={() => router.back()}>
          <img width={44} src="/sidebar/back.png" alt="back" />
        </a>
      </div> */}

      <div className={styles.container}>
        <a href={wapp} target="_blank">
          <img
            width={44}
            target="_blank"
            src="/sidebar/whatsapp.png"
            alt="whatsapp"
          />
        </a>
      </div>

      <div className={styles.container}>
        <a onClick={() => router.push("/message")}>
          <img width={44} src="/sidebar/email.png" alt="email" />
        </a>
      </div>
    </>
  );
}

export default SideMenu;
