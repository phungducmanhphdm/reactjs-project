import { useParams } from "react-router-dom";
import styles from "./styles.module.scss";

function ProductAddPage() {
  const { id } = useParams();

  return <div>Product add page</div>;
}

export default ProductAddPage;
