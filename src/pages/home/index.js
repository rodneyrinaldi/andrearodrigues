import React, { useState, useEffect } from "react";
import { CardsListContext } from "../../contexts/cardslist";

import Layout from "../../components/layout";

import Header from "./components/header";
import Filter from "./components/filter";
import Cards from "./components/cards";
import Faqs from "./components/faqs";
import Footer from "./components/footer";

import imovelData from "../../data/imoveis.json";

export default function Home() {
  const [isLoading, setIsLoading] = useState(false);
  const [isUpdated, setIsUpedated] = useState(false);
  const [dataUpdated, setDataUpdated] = useState({});

  useEffect(() => {
    const filter = (filterData) => filterData.bairro !== "...";
    setDataUpdated(imovelData.filter(filter));
    setIsUpedated(true);
  }, []);

  return (
    <>
      <CardsListContext.Provider
        value={{
          isLoading,
          setIsLoading,
          isUpdated,
          setIsUpedated,
          dataUpdated,
          setDataUpdated,
        }}
      >
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
