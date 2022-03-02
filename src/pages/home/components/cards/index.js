import { useContext, useEffect } from "react";
import Link from "next/link";
import { CardsListContext } from "../../../../contexts/cardslist";

import Card from "../../../../components/layout/card";

import styles from "./index.module.css";

export default function Cards() {
  const { isUpdated } = useContext(CardsListContext);
  const { dataUpdated } = useContext(CardsListContext);
  console.table(dataUpdated);

  useEffect(() => {}, [isUpdated]);

  return (
    <>
      <div className={styles.container}>
        <div className={styles.title}>
          <h2>Encontre o seu espaço para chamar de meu lar</h2>
        </div>
        <div className={styles.useble}>
          <div className={styles.line}>
            {isUpdated
              ? dataUpdated.map((data) => (
                  <div id={data.nome + "div"} className={styles.lineitem}>
                    <Link id={data.nome + "link"} href="/carddetail">
                      <a id={data.nome + "a"}>
                        <Card
                          id={data.nome + "card"}
                          title={data.nome}
                          description={data.descricao}
                        />
                      </a>
                    </Link>
                  </div>
                ))
              : null}
          </div>
        </div>
      </div>
    </>
  );
}
