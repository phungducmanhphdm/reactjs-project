import { WaittingLabel } from "@components";
import styles from "./styles.module.scss";
import { useState } from "react";

function CheckGroup({
  id,
  label,
  data,
  handleCheck,
  handleSearch,
  haveSearch,
  disabled,
  loading,
}) {
  const [searchText, setSearchText] = useState("");

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
            {haveSearch === true ? (
              <div className={styles.searchbox}>
                <input
                  value={searchText}
                  onChange={(e) => {
                    setSearchText(e.target.value);
                    handleSearch({ e });
                  }}
                  placeholder="Search . . ."
                />
              </div>
            ) : (
              ""
            )}
            <div className={styles.content}>
              <div className={styles.items}>
                {data &&
                  (data.length > 0
                    ? data.map((item) => (
                        <div key={item.id} className={styles.item}>
                          <input
                            type="checkbox"
                            value={item.value}
                            id={`${item.value}_${id}`}
                            defaultChecked={item.checked}
                            onChange={(e) => handleCheck({ e, id })}
                            disabled={disabled === true}
                          />
                          <label htmlFor={`${item.value}_${id}`}>
                            {item.name}
                          </label>
                        </div>
                      ))
                    : "Data empty . . .")}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default CheckGroup;
