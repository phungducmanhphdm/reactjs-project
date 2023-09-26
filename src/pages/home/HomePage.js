import styles from "./styles.module.scss";
import { useCallback, useEffect, useState } from "react";

function HomePage() {
  const [loadding, setLoadding] = useState(true);
  const [pageData, setPageData] = useState({ v: true });
  const [checkValid, setCheckValid] = useState(false);

  const handleInput = useCallback(({ id, e, valid }) => {
    const value = e.target.value;
    setPageData((pre) => ({
      ...pre,
      [id]: {
        value,
        valid,
      },
    }));
  }, []);

  const handleValid = useCallback((e) => {
    const value = e.target.value;
    return !(value === "");
  }, []);

  useEffect(() => {
    const timerId = setInterval(() => {}, 1000);

    return () => {
      clearTimeout(timerId);
    };
  }, []);

  return (
    <div className={styles.wrapper}>
      {/* <TextBox
        label="Product name"
        loadding={false}
        value=""
        errorLabel="Tên đã tồn tại"
        handleValid={handleValid}
        handleChange={handleInput}
        checkValid={checkValid}
      /> */}
      <hr></hr>
    </div>
  );
}

export default HomePage;
