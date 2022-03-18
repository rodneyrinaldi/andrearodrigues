import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import logo from "../../../../public/logo.png";
import button1 from "../../../../public/lps/nosm/button1.png";
import button2 from "../../../../public/lps/nosm/button2.png";
import image0 from "../../../../public/lps/nosm/image0.jpg";
import image2 from "../../../../public/lps/nosm/image2.jpg";
import image3 from "../../../../public/lps/nosm/image3.jpg";
import image4 from "../../../../public/lps/nosm/image4.jpg";
import image5 from "../../../../public/lps/nosm/image5.jpg";
import image6 from "../../../../public/lps/nosm/image6.jpg";
import image7 from "../../../../public/lps/nosm/image7.jpg";
import image8 from "../../../../public/lps/nosm/image8.jpg";
import Email from "../../../components/email";
import styles from "./index.module.css";

function Page() {
  const router = useRouter();
  const msg =
    "estou interessado neste empreendimento NEx One da Rua Nhambiquaras, poderia me contatar com mais informações? Obrigado.";
  const wapp =
    "https://api.whatsapp.com/send?phone=+5511975307017&text=Olá consultora, " +
    msg;

  function showUp() {
    openImage();
  }
  function openImage() {}

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
          <span>
            <Image alt="" src={logo} width="10" height="10" />
          </span>
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
                <a href="#emailLayer">
                  <Image alt="" src={button2} width="60" height="60" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.layer}>
          <h2>Lançamento de studios rua Nhambiquaras</h2>
          <h1>
            Moema 13 mil / m<sup>2</sup>
          </h1>
        </div>

        <div className={styles.layercols}>
          <div className={styles.cards}>
            <div className={styles.card}>
              <a
                onClick={() =>
                  window.open(
                    "https://imovelhoje.com.br/lps/nosm/image2.jpg",
                    "_blank"
                  )
                }
              >
                <Image alt="" src={image2} width="700" height="400" />
              </a>
            </div>
            <div className={styles.card}>
              <a
                onClick={() =>
                  window.open(
                    "https://imovelhoje.com.br/lps/nosm/image3.jpg",
                    "_blank"
                  )
                }
              >
                <Image alt="" src={image3} width="700" height="400" />
              </a>
            </div>
            <div className={styles.card}>
              <a
                onClick={() =>
                  window.open(
                    "https://imovelhoje.com.br/lps/nosm/image4.jpg",
                    "_blank"
                  )
                }
              >
                <Image alt="" src={image4} width="700" height="400" />
              </a>
            </div>
            <div className={styles.card}>
              <a
                onClick={() =>
                  window.open(
                    "https://imovelhoje.com.br/lps/nosm/image5.jpg",
                    "_blank"
                  )
                }
              >
                <Image alt="" src={image5} width="700" height="400" />
              </a>
            </div>
            <div className={styles.card}>
              <a
                onClick={() =>
                  window.open(
                    "https://imovelhoje.com.br/lps/nosm/image6.jpg",
                    "_blank"
                  )
                }
              >
                <Image alt="" src={image6} width="700" height="400" />
              </a>
            </div>
            <div className={styles.card}>
              <a
                onClick={() =>
                  window.open(
                    "https://imovelhoje.com.br/lps/nosm/image7.jpg",
                    "_blank"
                  )
                }
              >
                <Image alt="" src={image7} width="700" height="400" />
              </a>
            </div>
          </div>
        </div>

        <div name="emailLayer" id="emailLayer" className={styles.layerdark}>
          <Email />
        </div>

        <div className={styles.layer}>
          <h2>Clique para a visualizar no Google Maps</h2>
        </div>

        <div className={styles.map}>
          <a
            href={"https://goo.gl/maps/iRv29gUQVQ4pzBak9"}
            target="_blank"
            rel="noreferrer"
          >
            <Image alt="" src={image8} layout="responsive" objectFit="fill" />
          </a>
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
