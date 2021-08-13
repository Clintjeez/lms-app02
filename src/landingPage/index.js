import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import components
import Nav from "./navigation/nav";
import HomePage from "./pages/homePage/homePage";
import PricingPage from "./pages/pricingPage/pricingPage";
import CoursesPage from "./pages/coursesPage/coursesPage";
import InstructorPage from "./pages/instructorPage/instructorPage";
import PageNotFound from "./pages/404/notFound";

const LandingPage = () => {
  return (
    <>
      <Nav />
      <Route exact path="/">
        <HomePage />
      </Route>
      <Route path="/courses">
        <CoursesPage />
      </Route>
      <Route path="/pricing">
        <PricingPage />
      </Route>
      <Route path="/teach">
        <InstructorPage />
      </Route>
      <Route path="/404">
        <PageNotFound />
      </Route>
    </>
  );
};

export default LandingPage;
