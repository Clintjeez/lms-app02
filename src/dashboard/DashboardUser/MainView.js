import React, { useMemo } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useRouteMatch,
} from "react-router-dom";

import Home from "./pages/home/Home";
import Courses from "./pages/courses/Courses";
import Account from "./pages/account/Account";

function MainView() {
  const { url } = useRouteMatch();

  const routes = useMemo(() => {
    console.log(url);
    return [
      {
        path: url + "/",
        name: "Home",
        exact: true,
        component: Home,
        silent: false,
      },
      {
        path: url + "/courses",
        name: "Courses",
        exact: true,
        component: Courses,
        silent: false,
      },
      {
        path: url + "/account",
        name: "Account",
        exact: true,
        component: Account,
        silent: false,
      },
    ];
  }, [url]);

  return (
    <>
      <Switch>
        {routes.map((e) => (
          <Route key={e.name} path={e.path} component={e.component} exact />
        ))}
      </Switch>
    </>
  );
}

export default MainView;
