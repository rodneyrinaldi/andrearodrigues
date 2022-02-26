import { useEffect, useState } from "react";

import useScrollListener from "../../hooks/useScrollListener";

import Header from "../layout/header";
import Main from "../layout/main";
import SideMenu from "../layout/sidemenu";
import Footer from "../layout/footer";

import styles from "./index.module.css";

function Layout({ children, showback }) {
  const [scrollClassList, setScrollClassList] = useState([]);
  const scroll = useScrollListener();

  useEffect(() => {
    const _classList = [];

    if (scroll.y > 150 && scroll.y - scroll.lastY > 0)
      _classList.push("nav-bar--hidden");

    setScrollClassList(_classList);
  }, [scroll.y, scroll.lastY]);

  return (
    <>
      <div className={styles.container}>
        <nav>
          <header>
            <Header />
          </header>
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
            <div className={scrollClassList.join(" ")}>
              <img
                src="./images/scrolldown.gif"
                alt="role para baixo"
                className={styles.image}
              />
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

export default Layout;
