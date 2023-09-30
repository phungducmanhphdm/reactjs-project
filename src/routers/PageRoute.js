import { Route } from "react-router-dom";

import { AdminLayout } from "@layouts";
import { HomePage } from "@pages";
import ProductRoute from "./product/ProductRoute";
import NationRoute from "./nation/Nation";
import BrandRoute from "./brand/Brand";

const PageRoute = (
  <Route path="/">
    <Route
      path=""
      element={
        <AdminLayout>
          <HomePage />
        </AdminLayout>
      }
    />

    <Route
      path="home"
      element={
        <AdminLayout>
          <HomePage />
        </AdminLayout>
      }
    />

    {ProductRoute}
    {NationRoute}
    {BrandRoute}
  </Route>
);

export default PageRoute;
