import { AdminLayout } from "@layouts";
import { BrandPage, AddBrandPage } from "@pages";
import { Route } from "react-router-dom";

const BrandRoute = (
  <Route path="brand">
    <Route
      path=""
      element={
        <AdminLayout>
          <BrandPage />
        </AdminLayout>
      }
    />
    <Route
      path="add"
      element={
        <AdminLayout>
          <AddBrandPage />
        </AdminLayout>
      }
    />
  </Route>
);

export default BrandRoute;
