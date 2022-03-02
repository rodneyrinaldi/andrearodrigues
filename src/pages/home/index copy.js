import React, { useEffect, useState } from "react";
import { CardsListContext } from "../../contexts/cardslist";

import Layout from "../../components/layout";

import Header from "./components/header";
import Filter from "./components/filter";
import Cards from "./components/cards";
import Faqs from "./components/faqs";
import Footer from "./components/footer";

import imovelData from "../../data/imoveis.json";

export default function Home() {
  const [dataImoveis, setDataImoveis] = useState({});

  useEffect(() => {
    const filter = (filterData) => filterData.bairro !== "...";
    setDataImoveis(imovelData.filter(filter));
  }, []);

  return (
    <>
      <CardsListContext.Provider value={{ dataImoveis }}>
        <Layout showback="no">
          <Header />
          <Filter />
          <Cards />
          <Faqs />
          <Footer />
        </Layout>
      </CardsListContext.Provider>
    </>
  );
}
