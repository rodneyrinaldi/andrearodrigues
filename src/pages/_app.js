import { useEffect } from "react";
import "../styles/globals.css";
import "../styles/base.css";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    document.body.classList?.remove("loading");
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;
