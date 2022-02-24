import React from "react";
import { useRouter } from "next/router";

import Button from "../components/layout/button";
import Layout from "../components/layout";

import styles from "./index.module.css";

function Index() {
  const router = useRouter();
  return (
    <>
      <Layout showback="no">
        <img
          src="./images/home.png"
          alt="minha casa meu lar"
          className={styles.image}
        />

        <div className={styles.filter}>
          <h2>encontre seu lar</h2>
          <div>
            <select name="garagem" id="garagem">
              <option value="com garagem">Com garagem</option>
              <option value="sem garagem">Sem garagem</option>
            </select>
          </div>
          <div>
            <select name="quartos" id="quartos">
              <option value="studio">Studio</option>
              <option value="1 quarto">1 Quarto</option>
              <option value="2 quarto">2 Quarto</option>
            </select>
          </div>
          <div>
            <select name="bairros" id="bairros">
              <option value="santo amaro">Santo Amaro</option>
              <option value="ibirapuera">Ibirapuera</option>
            </select>
          </div>
          <br />
          <Button title="Mais informações" url="/" width="50px" height="20px" />
        </div>
      </Layout>
    </>
  );
}

export default Index;

{
  /* <Section3>
    <Button
      title="Mais informações"
      url="/pricing"
      width="10%"
      height="20px"
    />
  </Section3> */
}
