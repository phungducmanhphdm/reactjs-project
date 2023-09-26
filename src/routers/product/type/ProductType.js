import { AdminLayout } from "@layouts";
import { TypePage, AddTypePage } from "@pages";
import { Route } from "react-router-dom";

const ProductTypeRoute = (
  <Route path="type">
    <Route
      path=""
      element={
        <AdminLayout>
          <TypePage />
        </AdminLayout>
      }
    />
    <Route
      path="add"
      element={
        <AdminLayout>
          <AddTypePage />
        </AdminLayout>
      }
    />
  </Route>
);

export default ProductTypeRoute;
