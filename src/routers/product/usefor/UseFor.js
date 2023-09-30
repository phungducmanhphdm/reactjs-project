import { AdminLayout } from "@layouts";
import { UseForPage, AddUseForPage } from "@pages";
import { Route } from "react-router-dom";

const ProductUseForRoute = (
  <Route path="usefor">
    <Route path="" element={<AdminLayout>{<UseForPage />}</AdminLayout>} />
    <Route
      path="add"
      element={<AdminLayout>{<AddUseForPage />}</AdminLayout>}
    />
  </Route>
);

export default ProductUseForRoute;
