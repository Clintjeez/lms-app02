import React from "react";
import "../../Searchbar.scss";
// import swiper
import { Swiper, SwiperSlide } from "swiper/react";
//import CourseCard
import CourseCard from "../../../../../../components/courseCard/courseCard";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";

const CoursesGrid = ({ data }) => {
  const matches = useMediaQuery("(max-width: 600px)");

  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  };

  return matches ? (
    // mobile slider
    <Swiper
      slidesPerView={1}
      spaceBetween={20}
      centeredSlides={false}
      loop={false}
      pagination={pagination}
      navigation={{
        nextEl: ".next-course",
        prevEl: ".prev-course",
      }}
      dynamicbullets="true"
    >
      <div className="course-list">
        {data.map((val, index) => {
          return (
            <SwiperSlide>
              <div className="course-item" key={index}>
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
              </div>
            </SwiperSlide>
          );
        })}
      </div>
    </Swiper>
  ) : (
    // grid display of all courses
    <div>
    <button>
      <HiChevronLeft className="prev-course" size={40} style={{ fill: "#828282" }} />
    </button>
    <Swiper
      spaceBetween={25}
      slidesPerView={1}
      centeredSlides={true}
      loop={false}
      navigation={{
        nextEl: ".next-course",
        prevEl: ".prev-course",
      }}
      pagination={pagination}
      scrollbar={{ draggable: true }}
      // onSwiper={(swiper) => console.log(swiper)}
      // onSlideChange={() => console.log("slide change")}
    >
      <SwiperSlide>
        <div className="course-list">
          {/*course results id:0 - 6- page 1*/}
          {data.slice(0, 6).map((val, index) => {
            return (
              <div className="course-item" key={index}>
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
              </div>
            );
          })}
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="course-list">
          {/*course results id: 6-12- page 2*/}
          {data.slice(6, 12).map((val, index) => {
            return (
              <div className="course-item" key={index}>
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
              </div>
            );
          })}
        </div>
      </SwiperSlide>
    </Swiper>
    <button>
      <HiChevronRight className="next-course" size={40} style={{ fill: "#828282" }} />
    </button>
    </div>
  );
};

export default CoursesGrid;
