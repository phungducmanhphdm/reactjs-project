import { Button } from "react-bootstrap";
import { useLayoutEffect, useRef, useState } from "react";

import styles from "./styles.module.scss";
import { Type } from "@api";
import { WaittingLabel } from "@components";

function TypePage() {
  const [typeList, setTypeList] = useState({ status: 0, data: [] });
  const [load, setLoad] = useState(false);
  const timerId = useRef();

  useLayoutEffect(() => {
    console.log("USE EFF");
    if (typeList.status === 0) {
      Type.getAll(
        (res) => {
          const data = res.data;
          console.log("load success");
          setTypeList({
            status: 1,
            data: data,
          });
        },
        (err) => {
          alert("Load data thất bại");
        }
      );
    }
    return () => {};
  }, [load]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.body}>
        {typeList.status === 1 ? (
          typeList.data.map((item) => (
            <div key={item.id} className={styles.row}>
              <div className={styles.left}>
                <div className={styles.id}>{item.id}</div>
                <div className={styles.name}>{item.name}</div>
              </div>
              <div className={styles.right}>
                <div className={styles.edit}></div>
                <div className={styles.delete}>
                  <Button
                    variant="danger"
                    onClick={(e) => {
                      const isYes = window.confirm(
                        `Delete type: ${item.name}?`
                      );

                      if (isYes) {
                        Type.delete(
                          item.id,
                          (res) => {
                            console.log(res);
                            setTypeList((pre) => ({
                              ...typeList,
                              data: pre.data.filter((i) => i.id != item.id),
                            }));
                          },
                          (err) => {
                            alert(`Cannot delete: ${item.name}`);
                          }
                        );
                      }
                    }}
                  >
                    delete
                  </Button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <WaittingLabel label="loading . . ." />
        )}
      </div>
    </div>
  );
}

export default TypePage;
