import styles from "./styles.module.scss";

function ProductPage() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.filter}>
        <div className={styles.filterHead}>
          <div className={styles.searchBox}></div>
          <div className={styles.switchIcon}></div>
        </div>
      </div>
      <div className={styles.body}>
        <ul className={styles.items}>
          <li className={styles.item}></li>
        </ul>
      </div>
    </div>
  );
}

export default ProductPage;
