import { Button } from "react-bootstrap";
import { useLayoutEffect, useRef, useState } from "react";

import styles from "./styles.module.scss";
import { Brand } from "@api";
import { WaittingLabel } from "@components";

function BrandPage() {
  const [dataList, setDataList] = useState({ status: 0, data: [] });

  useLayoutEffect(() => {
    if (dataList.status === 0) {
      Brand.getAll(
        (res) => {
          const data = res.data;
          console.log("load success");
          setDataList({
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
  }, []);

  return (
    <div className={styles.wrapper}>
      <div className={styles.body}>
        {dataList.status === 1 ? (
          dataList.data.map((item) => (
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
                        Brand.delete(
                          item.id,
                          (res) => {
                            console.log(res);
                            setDataList((pre) => ({
                              ...dataList,
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

export default BrandPage;
