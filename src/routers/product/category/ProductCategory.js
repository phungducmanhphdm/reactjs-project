import { AdminLayout } from "@layouts";
import { CategoryPage, AddCategoryPage } from "@pages";
import { Route } from "react-router-dom";

const ProductCategoryRoute = (
  <Route path="category">
    <Route
      path=""
      element={
        <AdminLayout>
          <CategoryPage />
        </AdminLayout>
      }
    />
    <Route
      path="add"
      element={
        <AdminLayout>
          <AddCategoryPage />
        </AdminLayout>
      }
    />
  </Route>
);

export default ProductCategoryRoute;
