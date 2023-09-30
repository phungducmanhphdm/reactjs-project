import { AdminLayout } from "@layouts";
import { IngredientPage, AddIngredientPage } from "@pages";
import { Route } from "react-router-dom";

const ProductIngredientRoute = (
  <Route path="ingredient">
    <Route path="" element={<AdminLayout>{<IngredientPage />}</AdminLayout>} />
    <Route
      path="add"
      element={<AdminLayout>{<AddIngredientPage />}</AdminLayout>}
    />
  </Route>
);

export default ProductIngredientRoute;
