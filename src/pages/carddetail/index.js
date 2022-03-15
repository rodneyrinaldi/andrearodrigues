import React from "react";

import Layout from "../../components/layout";
import Title from "../../components/layout/title";

import styles from "./index.module.css";

function CardDetail() {
  return (
    <>
      <Layout showback="yes">
        <Title title="DETALHES" />
        <div className={styles.container}></div>
      </Layout>
    </>
  );
}

export default CardDetail;
