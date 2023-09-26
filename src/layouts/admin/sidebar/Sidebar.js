import { Link } from "react-router-dom";
import styles from "./styles.module.scss";

function Sidebar() {
  const handleDrop = (e) => {
    e.target.classList.toggle(`${styles.active}`);
    const forId = e.target.getAttribute("datafor");
    const drop = document.getElementById(forId);
    drop.classList.toggle(`${styles.active}`);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.items}>
        <div className={styles.item}>
          <Link to="/home">Home</Link>
        </div>
        <div className={`${styles.item} ${styles.dropdown}`}>
          <div
            datafor="dropProduct"
            className={styles.dropToggle}
            onClick={handleDrop}
          >
            Product
          </div>
          <div id="dropProduct" className={`${styles.dropItems}`}>
            <ul>
              <li>
                <Link to="/product">All product</Link>
              </li>
              <li>
                <Link to="/product/add">Add product</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className={`${styles.item} ${styles.dropdown}`}>
          <div
            datafor="dropType"
            className={styles.dropToggle}
            onClick={handleDrop}
          >
            Type
          </div>
          <div id="dropType" className={`${styles.dropItems}`}>
            <ul>
              <li>
                <Link to="/product/type">All type</Link>
              </li>
              <li>
                <Link to="/product/type/add">Add type</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className={`${styles.item} ${styles.dropdown}`}>
          <div
            datafor="dropGroup"
            className={styles.dropToggle}
            onClick={handleDrop}
          >
            Group
          </div>
          <div id="dropGroup" className={`${styles.dropItems}`}>
            <ul>
              <li>
                <Link to="/product/group">All group</Link>
              </li>
              <li>
                <Link to="/product/group/add">Add group</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className={`${styles.item} ${styles.dropdown}`}>
          <div
            datafor="dropCategory"
            className={styles.dropToggle}
            onClick={handleDrop}
          >
            Category
          </div>
          <div id="dropCategory" className={`${styles.dropItems}`}>
            <ul>
              <li>
                <Link to="/product/category">All category</Link>
              </li>
              <li>
                <Link to="/product/category/add">Add category</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className={`${styles.item} ${styles.dropdown}`}>
          <div
            datafor="dropSpecifyfor"
            className={styles.dropToggle}
            onClick={handleDrop}
          >
            Specifyfor
          </div>
          <div id="dropSpecifyfor" className={`${styles.dropItems}`}>
            <ul>
              <li>
                <Link to="/product/specifyfor">All specifyfor</Link>
              </li>
              <li>
                <Link to="/product/specifyfor/add">Add specifyfor</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className={`${styles.item} ${styles.dropdown}`}>
          <div
            datafor="dropUsefor"
            className={styles.dropToggle}
            onClick={handleDrop}
          >
            Usefor
          </div>
          <div id="dropUsefor" className={`${styles.dropItems}`}>
            <ul>
              <li>
                <Link to="/product/usefor">All usefor</Link>
              </li>
              <li>
                <Link to="/product/usefor/add">Add usefor</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className={`${styles.item} ${styles.dropdown}`}>
          <div
            datafor="dropIngredient"
            className={styles.dropToggle}
            onClick={handleDrop}
          >
            Ingredient
          </div>
          <div id="dropIngredient" className={`${styles.dropItems}`}>
            <ul>
              <li>
                <Link to="/product/ingredient">All ingredient</Link>
              </li>
              <li>
                <Link to="/product/ingredient/add">Add ingredient</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className={`${styles.item} ${styles.dropdown}`}>
          <div
            datafor="dropUnit"
            className={styles.dropToggle}
            onClick={handleDrop}
          >
            Unit
          </div>
          <div id="dropUnit" className={`${styles.dropItems}`}>
            <ul>
              <li>
                <Link to="/product/unit">All unit</Link>
              </li>
              <li>
                <Link to="/product/unit/add">Add unit</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
