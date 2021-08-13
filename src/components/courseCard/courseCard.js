import "./courseCard.scss";
import getStar from "./helpers/getStar";
import getStars from "./helpers/getStars";
import getLevel from "./helpers/getLevel";
import { Link } from "react-router-dom";

const CourseCard = ({
  id,
  title,
  thumbnail,
  author,
  rating,
  rateCount,
  level,
  timeEstimate,
}) => {
  // round start to nearest half (0.5)
  function roundHalf(num) {
    return (Math.round(num * 2) / 2).toFixed(1);
  }

  return (
    <div key={id} className="course-card">
      <div
        className="course-image"
        onClick={() => {
          console.log("clicked");
        }}
      >
        <Link to="/courses/sub-course">
          <img src={thumbnail} alt={title} />
          <div className="image-overlay">
            <p>{level} level</p>
            <h3>Estimated Time</h3>
            <p>{timeEstimate}</p>
          </div>
        </Link>
      </div>
      <div className="course-info">
        <h3>{title}</h3>
        <hr />
        <div className="course-stats">
          <div className="course-level">
            <img src={getLevel(level)} alt={`${level} difficulty`} />
          </div>
          <div className="course-rating">
            <span className="rating-value">{rating}</span>
            {getStars(roundHalf(rating)).map((rating, index) => (
              <img src={getStar(rating)} width={16} key={index} alt="star" />
            ))}
            <span className="rating-count">({rateCount})</span>
          </div>
        </div>
        <span className="author">by {author}</span>
      </div>
    </div>
  );
};

export default CourseCard;
