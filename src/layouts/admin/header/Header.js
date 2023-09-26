import { Link } from "react-router-dom";
import styles from "./styles.module.scss";

function Header() {
  return (
    <div className={styles.wrapper}>
      <div className={`${styles.segmentLeft}`}>
        <div className={styles.logo}>
          <Link to="/">Logo</Link>
        </div>
        {/* <div className={styles.link}>
          <Link to="/">Home</Link>
        </div>
        <div className={styles.link}>
          <Link to="/product">Product</Link>
        </div> */}
      </div>

      <div className={`${styles.segmentRight}`}>
        <div className={styles.logo}>Profile</div>
      </div>
    </div>
  );
}

export default Header;
