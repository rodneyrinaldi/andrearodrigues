import React, { useEffect, useState } from "react";
import Select, { OptionTypeBase, Props as SelectProps } from "react-select";
import { CardsListContext } from "../../../../contexts/cardslist";

import styles from "./index.module.css";

import imovelData from "../../../../data/imoveis.json";
import garagemData from "../../../../data/garagem.json";
import quartoData from "../../../../data/quarto.json";
import bairroData from "../../../../data/bairro.json";

export default function Filter() {
  const [cardsList, setCardsList] = useState(null);

  const [garagem, setGaragem] = useState({
    value: "Com garagem",
    label: "Com garagem",
  });
  const [quarto, setQuarto] = useState({
    value: "Dois quartos",
    label: "Dois quartos",
  });
  const [bairro, setBairro] = useState({
    value: "Santo Amaro",
    label: "Santo Amaro",
  });

  function filterImoveis() {
    const { label: garagemlabel } = garagem;
    const { label: quartolabel } = quarto;
    const { label: bairrolabel } = bairro;

    const dataImovel = imovelData
      .filter(
        (p) =>
          p.garagem === garagemlabel &&
          p.quarto === quartolabel &&
          p.bairro === bairrolabel
      )
      .map((p) => ({
        garagem: p.garagem,
        quarto: p.quarto,
        bairro: p.bairro,
        nome: p.nome,
      }));

    // setProcedureOptions(dataProcedure);
    console.log(dataImovel);
  }

  useEffect(() => {}, []);

  useEffect(() => {
    filterImoveis();
    setCardsList({ garagem, quarto, bairro, cardsList });
  }, [garagem, quarto, bairro]);

  return (
    <>
      <CardsListContext.Provider value={cardsList}>
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
                  options={garagemData}
                  defaultValue={garagem}
                  onChange={setGaragem}
                  isSearchable={false}
                  className={styles.lineselect}
                />
                <Select
                  id="quarto"
                  instanceId="quarto"
                  options={quartoData}
                  defaultValue={quarto}
                  onChange={setQuarto}
                  isSearchable={false}
                  className={styles.lineselect}
                />
                <Select
                  id="bairro"
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
      </CardsListContext.Provider>
    </>
  );
}
