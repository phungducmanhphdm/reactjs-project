import { memo, useEffect, useLayoutEffect, useRef, useState } from "react";
import styles from "./styles.module.scss";
import { WaittingLabel } from "@components";

function SelectBox({
  id,
  label,
  data,
  defaultValue,
  handleValid,
  handleChange,
  disabled,
  loading,
  checkValid,
}) {
  const [valid, setValid] = useState({ status: true, message: "" });
  const [value, setValue] = useState(defaultValue);

  useLayoutEffect(() => {
    //Khởi tạo giá trị của input ở parent
    const e = { target: { value: value, type: "select-one" } };
    if (checkValid === true) {
      setValid(handleValid(e));
    }
    return () => {};
  }, [checkValid]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.label}>{label}</div>
      <div className={styles.body}>
        {loading === true ? (
          <div className={styles.spinner}>
            <WaittingLabel label="loading . . ." />
          </div>
        ) : (
          <>
            <select
              className={styles.input}
              value={value}
              onChange={(e) => {
                setValue(e.target.value);
                setValid(handleValid(e));
                handleChange({ id, e, valid });
              }}
              disabled={disabled}
            >
              {data.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.name}
                </option>
              ))}
            </select>
            <span className={styles.error}>
              {valid.status === false ? valid.message : ""}
            </span>
          </>
        )}
      </div>
    </div>
  );
}

export default memo(SelectBox);
