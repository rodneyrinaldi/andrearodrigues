import React, { useContext, useEffect, useState } from "react";
import Select, { OptionTypeBase, Props as SelectProps } from "react-select";

import { CardsListContext } from "../../../../contexts/cardslist";

import styles from "./index.module.css";

import imovelData from "../../../../data/imoveis.json";
import garagemData from "../../../../data/garagem.json";
import quartoData from "../../../../data/quarto.json";
import bairroData from "../../../../data/bairro.json";

export default function Filter() {
  const { setIsUpdated } = useContext(CardsListContext);
  const { setDataUpdated } = useContext(CardsListContext);
  const { dataUpdated } = useContext(CardsListContext);

  const [garagem, setGaragem] = useState({
    value: "...",
    label: "...",
  });
  const [quarto, setQuarto] = useState({
    value: "...",
    label: "...",
  });
  const [bairro, setBairro] = useState({
    value: "...",
    label: "...",
  });

  function filterImoveis() {
    const { label: garagemlabel } = garagem;
    const { label: quartolabel } = quarto;
    const { label: bairrolabel } = bairro;

    const filter = (filterData) =>
      (garagemlabel == "..."
        ? filterData.garagem !== garagemlabel
        : filterData.garagem === garagemlabel) &&
      (quartolabel == "..."
        ? filterData.quarto !== quartolabel
        : filterData.quarto === quartolabel) &&
      (bairrolabel == "..."
        ? filterData.bairro !== bairrolabel
        : filterData.bairro === bairrolabel);
    const dataImoveis = imovelData.filter(filter);

    setDataUpdated(dataImoveis);
  }

  useEffect(() => {
    filterImoveis();
    setIsUpdated(true);
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
                placeholder="..."
                instanceId="garagem"
                options={garagemData}
                defaultValue={garagem}
                onChange={setGaragem}
                isSearchable={false}
                className={styles.lineselect}
              />
              <Select
                id="quarto"
                placeholder="..."
                instanceId="quarto"
                options={quartoData}
                defaultValue={quarto}
                onChange={setQuarto}
                isSearchable={false}
                className={styles.lineselect}
              />
              <Select
                id="bairro"
                placeholder="..."
                instanceId="bairro"
                options={bairroData}
                defaultValue={bairro}
                onChange={setBairro}
                isSearchable={false}
                className={styles.lineselect}
              />
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
