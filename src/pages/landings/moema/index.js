import Head from "next/head";
import Image from "next/image";
import React from "react";
import image2 from "../../../../public/landing/moema/container.jpg";
import image1 from "../../../../public/landing/moema/sunshine.jpg";
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
        <div className={styles.container}>
          <Image alt="" src={image1} layout="responsive" objectFit="none" />
        </div>
        <div className={styles.container}>
          <div>text</div>
        </div>
        <div className={styles.container}>
          <Image alt="" src={image2} layout="responsive" objectFit="none" />
        </div>
      </div>
    </>
  );
}

export default Page;
