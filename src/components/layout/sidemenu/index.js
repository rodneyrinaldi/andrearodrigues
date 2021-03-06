/* eslint-disable @next/next/no-img-element */
import { useRouter } from "next/router";
import React from "react";
import styles from "./index.module.css";

function SideMenu(props) {
  const router = useRouter();
  const msg =
    ", especialista em crédito imobiliário do programa Casa Verde e Amarela.  Quais os bairros vc procura? Como posso te ajudar?";
  const wapp =
    "https://api.whatsapp.com/send?phone=+5511975307017&text=Olá, a consultora Andrea" +
    msg;

  return (
    <>
      <div className={styles.container}>
        <a onClick={() => router.push("/simulation")}>
          <img width={44} src="/sidebar/simulation.png" alt="simulação" />
        </a>
      </div>

      <div className={styles.container}>
        <a href={wapp} target="_blank" rel="noreferrer">
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

      {props.showback === "yes" ? (
        <div className={styles.container}>
          <a onClick={() => router.back()}>
            <img width={44} src="/sidebar/back.png" alt="back" />
          </a>
        </div>
      ) : (
        <></>
      )}
    </>
  );
}

export default SideMenu;
