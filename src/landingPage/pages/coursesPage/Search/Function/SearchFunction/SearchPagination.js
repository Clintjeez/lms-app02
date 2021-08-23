import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "../Grid/SearchFunction.scss";
import CourseCard from "../../../../../../components/courseCard/courseCard";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";


const SearchPagination = ({ results }) => {
  // check resolution of screen
  const matches = useMediaQuery("(max-width: 600px)");
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  };
  // console.log(results);
  // console.log(matches);

  return matches ? (
    /* if mobile view */

    <Swiper
      slidesPerView={1}
      spaceBetween={25}
      centeredSlides={false}
      loop={false}
      pagination={pagination}
      dynamicbullets={true}
    >
      <div className="course-list">
        {results.map((val, index) => {
          return (
            <SwiperSlide>
              <div className="course-item">
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
              </div>
            </SwiperSlide>
          );
        })}
      </div>
    </Swiper>
  ) : (
    /* tablet and up */
    <div>
    <button >
      <HiChevronLeft className="prev-course" size={40} style={{ fill: "#828282" }} />
    </button>
    <Swiper
      slidesPerView={1}
      spaceBetween={25}
      centeredSlides={true}
      loop={false}
      pagination={pagination}
    >
      <SwiperSlide>
        <div className="course-list">
          {/*course results id:0 - 6- page 1*/}
          {results.slice(0, 6).map((val, index) => {
            return (
              <div className="course-item">
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
              </div>
            );
          })}
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="course-list">
          {/*course results id:0 - 6- page 1*/}
          {results.slice(6, 12).map((val, index) => {
            return (
              <div className="course-item">
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

export default SearchPagination;
