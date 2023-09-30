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

function equalObject(obj1, obj2) {
  const _obj1 = JSON.stringify(obj1);
  const _obj2 = JSON.stringify(obj2);
  return _obj1 === _obj2;
}

function checkArrInArr(childArr, parentArr, fieldName) {
  const _arr = parentArr.map((item) => {
    let status = false;
    for (let i = 0; i < childArr.length; i++) {
      const e = childArr[i];
      if (equalObject(item, e)) {
        status = true;
        break;
      }
    }

    return {
      ...item,
      [fieldName]: status,
    };
  });
  return _arr;
}

export { fetchRoute, checkArrInArr };
