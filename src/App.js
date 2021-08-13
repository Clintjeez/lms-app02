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
import Dashboard from "./dashboard/DashboardUser/DashboardUser";
import ForgotPassword from "./authentication/pages/ForgotPassword";

// import styles
import "./globalStyles/styles.scss";

function App() {
  return (
    <div className="App" style={{ overflowX: "hidden" }}>
      <Router>
        <Switch>
          {/* Public Routes */}
          <Route exact path="/" component={Home} />
          <Route exact path="/courses" component={Courses} />
          {/* <Route exact path="/courses/sub-course" component={SubCourses} /> */}
          <Route exact path="/pricing" component={Pricing} />
          <Route exact path="/teach" component={Teach} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
          <Route path="/dashboard" component={Dashboard} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
