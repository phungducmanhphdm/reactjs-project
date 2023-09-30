import { AdminLayout } from "@layouts";
import { UnitPage, AddUnitPage } from "@pages";
import { Route } from "react-router-dom";

const ProductUnitRoute = (
  <Route path="unit">
    <Route
      path=""
      element={
        <AdminLayout>
          <UnitPage />
        </AdminLayout>
      }
    />
    <Route
      path="add"
      element={
        <AdminLayout>
          <AddUnitPage />
        </AdminLayout>
      }
    />
  </Route>
);

export default ProductUnitRoute;
