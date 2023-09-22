import { BrowserRouter, Routes } from "react-router-dom";

import { fetchRoute } from "@utils";
import {
  HomePage,
  ProductPage,
  ProductDetailsPage,
  ProductAddPage,
} from "@pages";
import { AdminLayout } from "@layouts";

const ADMIN_ROUTES = {
  path: "/",
  page: null,
  layout: null,
  childs: [
    {
      path: "",
      page: HomePage,
      layout: AdminLayout,
      childs: [],
    },
    {
      path: "product",
      page: null,
      layout: null,
      childs: [
        {
          path: "",
          page: ProductPage,
          layout: AdminLayout,
          childs: [],
        },
        {
          path: "details",
          page: null,
          layout: null,
          childs: [
            {
              path: ":id",
              page: ProductDetailsPage,
              layout: AdminLayout,
              childs: [],
            },
          ],
        },
        {
          path: "add",
          page: ProductAddPage,
          layout: AdminLayout,
          childs: [],
        },
      ],
    },
  ],
};

const AdminRoutes = (
  <BrowserRouter>
    <Routes>{fetchRoute(ADMIN_ROUTES)}</Routes>
  </BrowserRouter>
);

export { AdminRoutes };
