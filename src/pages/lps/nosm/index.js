import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import button1 from "../../../../public/lps/nosm/button1.png";
import button2 from "../../../../public/lps/nosm/button2.png";
import image0 from "../../../../public/lps/nosm/image0.jpg";
import image1 from "../../../../public/lps/nosm/image1.png";
import image2 from "../../../../public/lps/nosm/image2.jpg";
import image3 from "../../../../public/lps/nosm/image3.jpg";
import image4 from "../../../../public/lps/nosm/image4.jpg";
import image5 from "../../../../public/lps/nosm/image5.jpg";
import image6 from "../../../../public/lps/nosm/image6.jpg";
import image7 from "../../../../public/lps/nosm/image7.jpg";
import image8 from "../../../../public/lps/nosm/image8.jpg";
import styles from "./index.module.css";

function Page() {
  const router = useRouter();
  const msg =
    ", especialista em crédito imobiliário do programa Casa Verde e Amarela.  Quais os bairros vc procura? Como posso te ajudar?";
  const wapp =
    "https://api.whatsapp.com/send?phone=+5511975307017&text=Olá, a consultora Andrea" +
    msg;

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
            <div className={styles.message}>
              <div>
                <a href={wapp} target="_blank" rel="noreferrer">
                  <Image alt="" src={button1} width="60" height="60" />
                </a>
              </div>
              <div>
                <a onClick={() => router.push("/message")}>
                  <Image alt="" src={button2} width="60" height="60" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.layer}>
          <div className={styles.title}>
            <Image alt="" src={image1} width="100%" height="100%" />
          </div>
          <br />
          <br />
          <br />
          <br />
          <h1>
            Lançamento Sena Madureira 13.000 m<sup>2</sup>
          </h1>
        </div>

        <div className={styles.layercols}>
          <div className={styles.cards}>
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
            <div className={styles.card}>
              <Image alt="" src={image7} width="700" height="400" />
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
          <Image alt="" src={image8} layout="responsive" objectFit="none" />
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
