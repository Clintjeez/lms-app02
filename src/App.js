import { useState } from "react";
// import react router stuff

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import components
import Home from "./landingPage/pages/homePage/homePage";
import Courses from "./landingPage/pages/coursesPage/coursesPage";
// import SubCourses from "./landingPage/pages/coursesSubPage/coursesSubPage";
import Pricing from "./landingPage/pages/pricingPage/pricingPage";
import Teach from "./landingPage/pages/instructorPage/instructorPage";
import Login from "./authentication/pages/Login";
import Signup from "./authentication/pages/register";
import Dashboard from "./dashboard/dashboard";
import ForgotPassword from "./authentication/pages/ForgotPassword";

// import styles
import "./globalStyles/styles.scss";
import ProtectedRoute from "./services/route_gaurd";
import Account from "./dashboard/DashboardUser/pages/account/Account";

const routes = [
  {
    path: "/",
    exact: true,
    main: Home,
    guard: false,
  },
  {
    path: "/courses",
    exact: true,
    main: Courses,
    guard: false,
  },
  {
    path: "/pricing",
    exact: true,
    main: Pricing,
    guard: false,
  },
  {
    path: "/teach",
    exact: true,
    main: Teach,
    guard: false,
  },
  {
    path: "/login",
    exact: true,
    main: Login,
    guard: false,
  },
  {
    path: "/signup",
    exact: true,
    main: Signup,
    guard: false,
  },
  {
    path: "/forgot-password",
    exact: true,
    main: ForgotPassword,
    guard: false,
  },
  {
    path: "/dashboard",
    exact: true,
    main: Dashboard,
    guard: true,
  },
  {
    path: "/instructor",
    exact: true,
    main: Dashboard,
    guard: true,
  },
  {
    path: "/account",
    exact: true,
    main: Account,
    guard: true,
  },
];

function App() {
  return (
    <div className="App" style={{ overflowX: "hidden" }}>
      <Router>
        {routes.map((route, index) =>
          route.guard ? (
            <ProtectedRoute
              key={index}
              path={route.path}
              exact={route.exact}
              children={<route.main />}
            />
          ) : (
            <Route
              key={index}
              path={route.path}
              exact={route.exact}
              children={<route.main />}
            />
          )
        )}
      </Router>
    </div>
  );
}

export default App;
