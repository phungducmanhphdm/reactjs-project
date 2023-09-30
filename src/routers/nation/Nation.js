import { AdminLayout } from "@layouts";
import { NationPage, AddNationPage } from "@pages";
import { Route } from "react-router-dom";

const NationRoute = (
  <Route path="nation">
    <Route
      path=""
      element={
        <AdminLayout>
          <NationPage />
        </AdminLayout>
      }
    />
    <Route
      path="add"
      element={
        <AdminLayout>
          <AddNationPage />
        </AdminLayout>
      }
    />
  </Route>
);

export default NationRoute;
