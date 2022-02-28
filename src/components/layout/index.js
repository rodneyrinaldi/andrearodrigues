import useDeviceDetect from "../../hooks/usedevicedetect";
import useScrollPosition from "../../hooks/usescrollposition";

import Header from "../layout/header";
import Header2 from "../layout/header2";
import Main from "../layout/main";
import SideMenu from "../layout/sidemenu";
import Footer from "../layout/footer";

import styles from "./index.module.css";

function Layout({ children, showback }) {
  const deviceDetect = useDeviceDetect();
  const scrollPosition = useScrollPosition();

  return (
    <div id="divpage" className={styles.container}>
      <nav>
        <header>{scrollPosition > 50 ? <Header2 /> : <Header />}</header>
      </nav>

      <main>
        <Main>{children}</Main>
      </main>

      <aside>
        <SideMenu showback={showback} />
      </aside>

      <footer>
        <Footer />
        <div className={styles.scrolldown}>
          {deviceDetect === "Mobile" ? (
            scrollPosition < 2050 ? (
              <img
                src="./images/scrolldown.gif"
                alt="role para baixo"
                className={styles.image}
              />
            ) : null
          ) : scrollPosition < 950 ? (
            <img
              src="./images/scrolldown.gif"
              alt="role para baixo"
              className={styles.image}
            />
          ) : null}
        </div>
      </footer>
    </div>
  );
}

export default Layout;
