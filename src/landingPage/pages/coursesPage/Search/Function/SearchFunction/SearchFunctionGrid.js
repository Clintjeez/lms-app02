import React from "react";
import CourseCard from "../../../../../../components/courseCard/courseCard";
import "../Grid/SearchFunction.scss";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { Swiper, SwiperSlide } from "swiper/react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";


const SearchFunctionGrid = ({ results }) => {
  const matches = useMediaQuery("(max-width: 600px)");
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  };

  return matches ? (
    <div>
    <Swiper
      slidesPerView={1}
      spaceBetween={20}
      centeredSlides={false}
      loop={false}
      pagination={pagination}
      dynamicbullets={true}
    >
      <div className="course-list">
        {results.map((val, index) => {
          return (
            <SwiperSlide>
              <CourseCard
                key={index}
                id={index}
                title={val.title}
                thumbnail={val.thumbnail}
                author={val.author}
                rating={val.rating}
                rateCount={val.rateCount}
                level={val.difficulty}
                timeEstimate={val.timeEstimate}
              />
            </SwiperSlide>
          );
        })}
      </div>
    </Swiper>
    </div>
  ) : (
    <div className="course-list">
      {results.map((val, index) => {
        return (
          <div key={index}>
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
  );
};

export default SearchFunctionGrid;
