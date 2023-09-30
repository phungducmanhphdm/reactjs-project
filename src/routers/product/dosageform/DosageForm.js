import { AdminLayout } from "@layouts";
import { DosageFormPage, AddDosageFormPage } from "../../../pages";
import { Route } from "react-router-dom";

const ProductDosageFormRoute = (
  <Route path="dosageform">
    <Route
      path=""
      element={
        <AdminLayout>
          <DosageFormPage />
        </AdminLayout>
      }
    />
    <Route
      path="add"
      element={
        <AdminLayout>
          <AddDosageFormPage />
        </AdminLayout>
      }
    />
  </Route>
);

export default ProductDosageFormRoute;
