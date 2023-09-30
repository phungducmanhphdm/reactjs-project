import { Route } from "react-router-dom";

import ProductType from "./type/ProductType";
import ProductGroup from "./group/ProductGroup";
import ProductCategory from "./category/ProductCategory";
import ProductSpecifyForRoute from "./specifyfor/SpecifyFor";
import ProductUseForRoute from "./usefor/UseFor";
import ProductIngredientRoute from "./ingredient/Ingredient";
import ProductUnitRoute from "./unit/Unit";
import ProductDosageFormRoute from "./dosageform/DosageForm";

import { AdminLayout } from "@layouts";
import { ProductPage, ProductAddPage, ProductEditPage } from "@pages";

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
    <Route path="edit">
      <Route
        path="details/:id"
        element={
          <AdminLayout>
            <ProductEditPage />
          </AdminLayout>
        }
      />
    </Route>
    {ProductType}
    {ProductGroup}
    {ProductCategory}
    {ProductSpecifyForRoute}
    {ProductUseForRoute}
    {ProductIngredientRoute}
    {ProductUnitRoute}
    {ProductDosageFormRoute}
  </Route>
);

export default ProductRoute;
