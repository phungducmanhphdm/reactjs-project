import { Footer } from "./footer";
import { Header } from "./header";
import { Sidebar } from "./sidebar";
import styles from "./styles.module.scss";

function AdminLayout({ children }) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <Header />
      </div>
      <div className={styles.body}>
        <div className={styles.sidebar}>
          <Sidebar />
        </div>
        <div className={styles.content}>
          <div className={styles.page}>{children}</div>
          <div className={styles.footer}>
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminLayout;
