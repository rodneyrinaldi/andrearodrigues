import React from "react";

import Layout from "../../components/layout";
import Title from "../../components/layout/title";
import Email from "../../components/email";

import styles from "./index.module.css";

function Simulation() {
  return (
    <>
      <Layout showback="yes">
        <Title title="ENVIE SUA SOLICITAÇÃO" />
        <div className={styles.container}>
          <Email />
        </div>
      </Layout>
    </>
  );
}

export default Simulation;
