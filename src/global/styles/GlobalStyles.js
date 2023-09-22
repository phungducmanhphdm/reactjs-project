import styles from "./styles.module.scss";

function GLobalStyles({ children }) {
  return <div className={styles.global}>{children}</div>;
}

export default GLobalStyles;
