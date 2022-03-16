import Head from "next/head";
import Image from "next/image";
import React from "react";
import image0 from "../../../../public/lps/nosm/image0.jpg";
import image1 from "../../../../public/lps/nosm/image1.jpg";
import image2 from "../../../../public/lps/nosm/image2.jpg";
import image3 from "../../../../public/lps/nosm/image3.jpg";
import image4 from "../../../../public/lps/nosm/image4.jpg";
import image5 from "../../../../public/lps/nosm/image5.jpg";
import image6 from "../../../../public/lps/nosm/image6.jpg";
import image7 from "../../../../public/lps/nosm/image7.jpg";
import styles from "./index.module.css";

function Page() {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <title>imovelhoje.com.br</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        <div className={styles.header}>
          <h1>imóvelhoje</h1>
          <img src="/logo.png" alt="imóvel hoje nex one sena madureira" />
          <h1>oportunidade</h1>
        </div>

        <div className={styles.layer}>
          <div className={styles.image}>
            <Image alt="" src={image0} layout="responsive" objectFit="none" />
            <div className={styles.title}>
              <h2>NEX ONE</h2>
              <h2>Sena Madureira</h2>
            </div>
            <div className={styles.message}>
              <h2>Comunicação</h2>
            </div>
          </div>
        </div>

        <div className={styles.layer}>
          <br />
          <br />
        </div>

        <div className={styles.layer2col}>
          <div className={styles.cards}>
            <div className={styles.card}>
              <Image alt="" src={image1} width="700" height="400" />
            </div>
            <div className={styles.card}>
              <Image alt="" src={image2} width="700" height="400" />
            </div>
            <div className={styles.card}>
              <Image alt="" src={image3} width="700" height="400" />
            </div>
            <div className={styles.card}>
              <Image alt="" src={image4} width="700" height="400" />
            </div>
            <div className={styles.card}>
              <Image alt="" src={image5} width="700" height="400" />
            </div>
            <div className={styles.card}>
              <Image alt="" src={image6} width="700" height="400" />
            </div>
          </div>
        </div>

        <div className={styles.layerdark}>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
        </div>

        <div className={styles.layer}>
          <br />
        </div>

        <div className={styles.map}>
          <Image alt="" src={image7} layout="responsive" objectFit="none" />
        </div>

        <div className={styles.footer}>
          <a href="https://dev.rodneyrinaldi.com">dev.rodneyrinaldi.com</a>
          <a href="https://imovelhoje.com.br">imovelhoje.com.br</a>
        </div>
      </div>
    </>
  );
}

export default Page;
