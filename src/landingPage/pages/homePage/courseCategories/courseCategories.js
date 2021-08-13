import { Link } from "react-router-dom";
import categoryData from "./categoryData";
// import styles
import "./courseCategories.scss";

const CourseCategories = () => {
  return (
    <section id="course-categories">
      <div className="container">
        <h1>Top Categories</h1>
        <div className="category-container">
          <div className="category-items">
            {categoryData.map((item, index) => {
              const { title, thumbnail, link } = item;
              return (
                <Link key={index} to={link} style={{ textDecoration: "none" }}>
                  <div
                    className="category-item"
                    style={{
                      backgroundImage: "url(" + thumbnail + ")",
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  >
                    <span>{title}</span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseCategories;
