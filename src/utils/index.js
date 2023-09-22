import { Route } from "react-router-dom";
import React, { Fragment } from "react";

function fetchRoute(route, index = 0) {
  const childs = route.childs;
  const Layout = route.layout === null ? Fragment : route.layout;
  const Page = route.page;
  const Element =
    Page === null ? null : (
      <Layout>
        {" "}
        <Page> </Page>{" "}
      </Layout>
    );
  const path = route.path;

  return (
    <Route key={index} path={path} element={Element}>
      {childs.map((item, index) => fetchRoute(item, index))}
    </Route>
  );
}

export { fetchRoute };
