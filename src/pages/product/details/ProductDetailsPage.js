import { useParams } from "react-router-dom";
import styles from "./styles.module.scss";

function ProductDetailsPage() {
  const { id } = useParams();

  return <div>Product details page {id}</div>;
}

export default ProductDetailsPage;
