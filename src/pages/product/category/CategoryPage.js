import { Button } from "react-bootstrap";
import { useLayoutEffect, useRef, useState } from "react";

import styles from "./styles.module.scss";
import { Category } from "@api";
import { WaittingLabel } from "@components";

function CategoryPage() {
  const [categoryList, setCategoryList] = useState({ status: 0, data: [] });

  const [load, setLoad] = useState(false);

  useLayoutEffect(() => {
    if (categoryList.status === 0) {
      Category.getAll(
        (res) => {
          const data = res.data;
          console.log("load success");
          setCategoryList({
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
        {categoryList.status === 1 ? (
          categoryList.data.map((item) => (
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
                        `Delete category: ${item.name}?`
                      );

                      if (isYes) {
                        Category.delete(
                          item.id,
                          (res) => {
                            console.log(res);
                            setCategoryList((pre) => ({
                              ...categoryList,
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

export default CategoryPage;
