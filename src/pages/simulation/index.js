import React from "react";

import Layout from "../../components/layout";
import Title from "../../components/layout/title";

import styles from "./index.module.css";

function Simulation() {
  return (
    <>
      <Layout showback="yes">
        <Title title="ENVIE SUA MENSAGEM" />
        <div className={styles.container}></div>
      </Layout>
    </>
  );
}

export default Simulation;
