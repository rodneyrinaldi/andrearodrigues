import Head from "next/head";
import { useState } from "react";

function Widget({ pageName }) {
  const [active, setActive] = useState(false);

  if (active) {
    return (
      <>
        <Head>
          <title>you are browsing the {pageName} page</title>
        </Head>
        <div>
          <button onClick={() => setActive(false)}>
            Restore original title
          </button>
          Take alook at the title
        </div>
      </>
    );

    return (
      <>
        <button onClick={() => setActive(true)}>Change page title</button>
      </>
    );
  }
}
