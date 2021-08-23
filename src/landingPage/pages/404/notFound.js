import { Link } from "react-router-dom";
// images
import notFoundImg from "./assets/404_Illustration.svg";
// styles
import "./notFound.scss";

const NotFound = () => {
  return (
    <section id="pageNotFound">
      <div className="container">
        <h1>sorry, this page could not be found </h1>
        <img src={notFoundImg} alt="404 error message illustration" />
        <h3>check if the url is correct or use the links below</h3>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/courses">Courses</Link>
          </li>
          <li>
            <Link to="/pricing">Pricing</Link>
          </li>
          <li>
            <Link to="/teach">Teach</Link>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default NotFound;
