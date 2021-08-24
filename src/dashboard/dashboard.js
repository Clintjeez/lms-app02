import React from "react";
import { Switch, Route, useHistory, useLocation } from "react-router-dom";

import DashboardUser from "./DashboardUser/DashboardUser";
import DashboardInstructor from "./DashboardInstructor";
// import AdminDashboard from "./adminDashboard"

import AuthGuard from "../auth/authGuard/authGuard";

function Dashboard() {

  return (
    <>
      <DashboardUser />
    </>
  );

  // return (
  //   <div>
  //     <Switch>
  //       <Route path="/dashboard">
  //         {/* <AuthGuard> */}
  //         <DashboardUser />
  //         {/* </AuthGuard> */}
  //       </Route>
  //       <Route path={`/instructor`}>
  //         {/* <AuthGuard> */}
  //         <DashboardInstructor />
  //         {/* </AuthGuard> */}
  //       </Route>
  //     </Switch>
  //   </div>
  // );
}

export default Dashboard;
