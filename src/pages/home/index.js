import Layout from "../../components/layout";

import Header from "./components/header";
import Filter from "./components/filter";
import Cards from "./components/cards";
import Footer from "./components/footer";

export default function Home() {
  return (
    <>
      <Layout showback="no">
        <Header />
        <Filter />
        <Cards />
        <Footer />
      </Layout>
    </>
  );
}
