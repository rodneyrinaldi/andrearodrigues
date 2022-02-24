import { useRouter } from "next/router";

import styles from "./index.module.css";

function Button(props) {
  const router = useRouter();
  const { title, url, width, height } = props;

  return (
    <>
      <button
        className={styles.button}
        type="button"
        width={width}
        height={height}
        onClick={() => (!url ? router.back() : router.push(url))}
      >
        {title}
      </button>
    </>
  );
}

export default Button;
