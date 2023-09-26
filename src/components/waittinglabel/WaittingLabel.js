import Spinner from "react-bootstrap/Spinner";
import styles from "./styles.module.scss";

function WaittingLabel({ label }) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.spinner}>
        <Spinner animation="grow" />
      </div>
      <div className={styles.label}>{label}</div>
    </div>
  );
}

export default WaittingLabel;
