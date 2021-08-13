import React from "react";
import { Switch, Route } from "react-router-dom";

import DashboardUser from "./DashboardUser/DashboardUser";
import DashboardInstructor from "./DashboardInstructor";
// import AdminDashboard from "./adminDashboard"

import AuthGuard from "../auth/authGuard/authGuard";

function Dashboard({ match }) {
  return (
    <div>
      <Switch>
        <Route path="/dashboard">
          {/* <AuthGuard> */}
          <DashboardUser />
          {/* </AuthGuard> */}
        </Route>
        <Route path={`${match.path}/instructor`}>
          {/* <AuthGuard> */}
          <DashboardInstructor />
          {/* </AuthGuard> */}
        </Route>
      </Switch>
    </div>
  );
}

export default Dashboard;
