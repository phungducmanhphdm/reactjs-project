import { Route } from "react-router-dom";

import ProductType from "./type/ProductType";
import ProductGroup from "./group/ProductGroup";

import { AdminLayout } from "@layouts";
import { ProductPage, ProductAddPage } from "@pages";

const ProductRoute = (
  <Route path="product">
    <Route
      path=""
      element={
        <AdminLayout>
          <ProductPage />
        </AdminLayout>
      }
    />
    <Route
      path="add"
      element={
        <AdminLayout>
          <ProductAddPage />
        </AdminLayout>
      }
    />
    {ProductType}
    {ProductGroup}
  </Route>
);

export default ProductRoute;
