import Button from "../../../../components/layout/button";

import styles from "./index.module.css";

export default function Filter() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.useble}>
          <div>
            <h4>Busque seu imóvel</h4>
          </div>

          <div className={styles.line}>
            <select name="garagem" id="garagem">
              <option value="com garagem">Com garagem</option>
              <option value="sem garagem">Sem garagem</option>
            </select>
            <select name="quartos" id="quartos">
              <option value="studio">Studio</option>
              <option value="1 quarto">1 Quarto</option>
              <option value="2 quarto">2 Quarto</option>
            </select>
            <select name="bairros" id="bairros">
              <option value="santo amaro">Santo Amaro</option>
              <option value="ibirapuera">Ibirapuera</option>
            </select>
          </div>
        </div>
      </div>
    </>
  );
}
