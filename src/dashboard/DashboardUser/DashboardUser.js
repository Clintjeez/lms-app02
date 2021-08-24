import {
  BrowserRouter as Router,
  Route,
  Switch,
  useRouteMatch,
} from "react-router-dom";
import { Row, Col } from "antd";

import TopMenu from "./components/TopMenu/TopMenu";
import SideMenu from "./components/SideMenu/SideMenu";
import MainView from "./MainView";
import { useLocation } from "react-router-dom";
import React, { useMemo } from "react";

import Home from "./pages/home/Home";
import Courses from "./pages/courses/Courses";
import Account from "./pages/account/Account";
import "./DashboardUser.scss";

const StudentDashboard = () => {
  const { url } = useRouteMatch();

  const routes = [
    {
      path: url,
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
  return (
    <>
      <div className="dashboard">
        <aside className="aside-wrapper">
          <SideMenu />
        </aside>
        <main className="main-wrapper">
          <TopMenu />
          <Switch>
            {routes.map((e) => (
              <Route key={e.name} path={e.path} component={e.component} exact />
            ))}
          </Switch>
        </main>
      </div>
    </>
  );
};

export default StudentDashboard;
