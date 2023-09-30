import { AdminLayout } from "@layouts";
import { SpecifyForPage, AddSpecifyForPage } from "@pages";
import { Route } from "react-router-dom";

const ProductSpecifyForRoute = (
  <Route path="specifyfor">
    <Route
      path=""
      element={
        <AdminLayout>
          <SpecifyForPage />
        </AdminLayout>
      }
    />
    <Route
      path="add"
      element={
        <AdminLayout>
          <AddSpecifyForPage />
        </AdminLayout>
      }
    />
  </Route>
);

export default ProductSpecifyForRoute;
