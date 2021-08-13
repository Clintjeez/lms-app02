// import swiper react components
import { Swiper, SwiperSlide } from "swiper/react";
// import component styles
import "./courseCarousel.scss";
// import components
import CourseCard from "../../../../components/courseCard/courseCard";
// import data
import courseCardData from "../../coursesPage/MOCK_DATA";
import { Link } from "react-router-dom";

const CourseCarousel = () => {
  return (
    <section id="courses-all">
      {/* <div className="course-square">
        <div className="overlay">
          <h1 className="courses-head">Courses</h1>
          <p className="text-about">
            Our wide range of courses, provided by experienced instructors and
            an ever increasing library of learning courses.
          </p>
          <form action="">
            <input
              className="view-courses"
              type="submit"
              value="View courses"
            ></input>
          </form>
        </div>
      </div>
      <div className="container">
        <SwiperSlide
          slidesPerView={1}
          spaceBetween={25}
          centeredSlides={true}
          breakpoints={{
            1024: {
              slidesPerView: 3,
              centeredSlides: false,
            },
          }}
        >
          {courseCardData.map((val, index) => {
            return (
          
              <SwiperSlide key={index}>
              <Link to="/" style={{ textDecoration: "none" }}>
                <CourseCard
                  
                  id={index}
                  title={val.title}
                  thumbnail={val.thumbnail}
                  author={val.author}
                  rating={val.rating}
                  rateCount={val.rateCount}
                  level={val.difficulty}
                  timeEstimate={val.timeEstimate}
                />
                </Link>
              </SwiperSlide>
        

            )
          }
      </div> */}
    </section>
  );
};

export default CourseCarousel;
