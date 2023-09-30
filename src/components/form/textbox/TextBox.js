import { WaittingLabel } from "@components";
import styles from "./styles.module.scss";
import { memo, useLayoutEffect, useRef, useState } from "react";

function TextBox({
  id,
  label,
  defaultValue,
  handleChange,
  handleValid,
  disabled,
  loading,
  type,
  checkValid,
  placeholder,
  errorInfo,
}) {
  const [valid, setValid] = useState({ status: true, message: "" });
  const [value, setValue] = useState(defaultValue);

  useLayoutEffect(() => {
    if (errorInfo) {
      setValid(errorInfo);
    } else {
      const e = { target: { value: value, type: "text" } };
      if (checkValid) {
        setValid(handleValid(e));
      }
    }

    return () => {};
  }, [checkValid]);

  useLayoutEffect(() => {
    if (errorInfo) {
      setValid(errorInfo);
    }
  }, [errorInfo]);

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
            {type === "textarea" ? (
              <textarea
                placeholder={placeholder}
                className={styles.input}
                type={type ? type : "text"}
                value={value}
                onChange={(e) => {
                  setValue(e.target.value);
                  const validInfo = handleValid(e);
                  setValid(validInfo);
                  handleChange({ id, e, valid: validInfo });
                }}
                disabled={disabled === true}
              />
            ) : (
              <input
                placeholder={placeholder}
                className={styles.input}
                type={type ? type : "text"}
                value={value}
                onChange={(e) => {
                  setValue(e.target.value);
                  const validInfo = handleValid(e);
                  setValid(validInfo);
                  handleChange({ id, e, valid: validInfo });
                }}
                disabled={disabled === true}
              />
            )}
            <span className={styles.error}>
              {valid.status === false ? valid.message : ""}
            </span>
          </>
        )}
      </div>
    </div>
  );
}

export default memo(TextBox);
