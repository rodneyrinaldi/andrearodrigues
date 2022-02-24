import React from "react";
import Head from "next/head";

import styles from "./index.module.css";

function LandingPage() {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <title>autorizacao.digital</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.container}>
        <div>
          <img
            src="/landing/funnylogo.png"
            alt="autorização digital"
            className={styles.logo}
          />
          <br />
          <br />
        </div>

        <div className={styles.row}>
          <div className={styles.image}>
            <img
              src="/landing/lawyer.png"
              alt="xxx"
              className={styles.logorow}
            />
          </div>
          <div className={styles.text}>
            <h2>
              Não importa o local ou o horário, mantenha a segurança em seus
              atendimentos.
            </h2>
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.text}>
            <h2>
              Elabore e tenha sempre disponível suas procurações e contratos de
              honorários.
            </h2>
          </div>
          <div className={styles.image}>
            <img
              src="/landing/contract.png"
              alt="xxx"
              className={styles.logorow}
            />
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.image}>
            <img
              src="/landing/mobile.png"
              alt="xxx"
              className={styles.logorow}
            />
          </div>
          <div className={styles.text}>
            <h2>
              Assinatura digital, protocolo, comunicação e arquivamento em
              núvem.
            </h2>
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.text}>
            <h2>
              Planos individuais e contas coorporativas, ótima relação custo
              benefício, mensalidades fixas.
            </h2>
          </div>
          <div className={styles.image}>
            <img
              src="/landing/contract.png"
              alt="xxx"
              className={styles.logorow}
            />
          </div>
        </div>

        <div className={styles.column}>
          <div className={styles.line}>
            <img
              src="/landing/signature.png"
              alt="xxx"
              // className={styles.logorow}
              width="300vw"
            />
            <h2>
              Venha para a autorização.digital, tenha agilidade, segurança e
              recebimento online em seus atendientos.
            </h2>
          </div>
        </div>
      </div>
    </>
  );
}

export default LandingPage;
