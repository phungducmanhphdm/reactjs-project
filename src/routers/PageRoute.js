import { Route } from "react-router-dom";

import ProductRoute from "./product/ProductRoute";
import { AdminLayout } from "@layouts";
import { HomePage } from "@pages";

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
  </Route>
);

export default PageRoute;
