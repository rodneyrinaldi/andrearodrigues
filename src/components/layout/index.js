import Header from "../layout/header";
import Main from "../layout/main";
import SideMenu from "../layout/sidemenu";
import Footer from "../layout/footer";

import styles from "./index.module.css";

function Layout({ children, showback }) {
  return (
    <>
      <div className={styles.container}>
        <header>
          <Header />
        </header>

        <main>
          <Main>{children}</Main>
        </main>

        <aside>
          <SideMenu showback={showback} />
        </aside>

        <footer>
          <Footer />
        </footer>
      </div>
    </>
  );
}

export default Layout;
