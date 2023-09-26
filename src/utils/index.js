import { Route } from "react-router-dom";

function fetchRoute(route, index = 0) {
  const childs = route.childs;
  const Page = route.page;
  const Layout = route.layout;
  const path = route.path;

  if (Page == null) {
    <Route key={index} path={path}>
      {childs.map((item, index) => fetchRoute(item, index))}
    </Route>;
  } else {
    if (Layout === null) {
      return <Route key={index} path={path} element={<Page />}></Route>;
    } else {
      return (
        <Route
          key={index}
          path={path}
          element={
            <Layout>
              <Page />
            </Layout>
          }
        ></Route>
      );
    }
  }
}

export { fetchRoute };
