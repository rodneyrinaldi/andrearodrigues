import React, { useCallback, useEffect, useState } from "react";

import Select, { OptionTypeBase, Props as SelectProps } from "react-select";

import styles from "./index.module.css";

import garagemData from "../../../../data/garagem.json";
import quartoData from "../../../../data/quarto.json";
import bairroData from "../../../../data/bairro.json";
import imoveiData from "../../../../data/imoveis.json";

export default function Filter() {
  const [loading, setLoading] = useState(true);
  const [garagem, setGaragem] = useState(null);
  const [quarto, setQuarto] = useState(null);
  const [bairro, setBairro] = useState(null);

  const handleGaragemChange = useCallback((e) => {
    setGaragem(e.label);
  }, []);

  const handleQuartoChange = useCallback((e) => {
    setQuarto(e.label);
  }, []);

  const handleBairroChange = useCallback((e) => {
    setBairro(e.label);
  }, []);

  useEffect(() => {
    // setLoading(true)
    // setLoading(false)
  }, []);

  useEffect(() => {
    // setLoading(true)
    // setLoading(false)
  }, [garagem, quarto, bairro]);

  return (
    <>
      <div className={styles.container}>
        <div className={styles.useble}>
          <div>
            <h4>Busque seu imóvel</h4>
          </div>

          <form>
            <div className={styles.line}>
              <Select
                id="garagem"
                instanceId="garagem"
                placeholder="..."
                options={garagemData}
                onChange={handleGaragemChange}
                className={styles.lineselect}
              />
              <Select
                id="quarto"
                instanceId="quarto"
                placeholder="..."
                options={quartoData}
                className={styles.lineselect}
              />
              <Select
                id="bairro"
                instanceId="bairro"
                placeholder="..."
                options={bairroData}
                className={styles.lineselect}
              />
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
