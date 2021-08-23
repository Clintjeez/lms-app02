import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./pages/home/Home"
import Courses from "./pages/courses/Courses"
import Account from "./pages/account/Account"

function MainView() {
  return (
    <>
       <Switch>
         <Route exact path="/dashboard/home" component={Home} />
         <Route exact  path="/dashboard/courses" component={Courses} />
         <Route exact  path="/dashboard/account" component={Account} />
       </Switch>
    </>
  );
}

export default MainView;
