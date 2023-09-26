import { AdminLayout } from "@layouts";
import { GroupPage, AddGroupPage } from "@pages";
import { Route } from "react-router-dom";

const ProductGroupRoute = (
  <Route path="group">
    <Route
      path=""
      element={
        <AdminLayout>
          <GroupPage />
        </AdminLayout>
      }
    />
    <Route
      path="add"
      element={
        <AdminLayout>
          <AddGroupPage />
        </AdminLayout>
      }
    />
  </Route>
);

export default ProductGroupRoute;
