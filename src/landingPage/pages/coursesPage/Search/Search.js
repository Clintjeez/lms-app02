import React, { useState, useEffect } from "react";
// import swiper
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper/core";
// import components
import CourseCard from "../../../../components/courseCard/courseCard";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";

// import styles
import "./Searchbar.scss";
// import react icons
import { GoSearch } from "react-icons/go";
// import fake data
import DATA from "../MOCK_DATA.js";
// import Search Function
import SearchFunction from "./Function/Grid/SearchFunction";
import CoursesGrid from "./Function/Grid/CoursesGrid";

SwiperCore.use([Navigation]);

const Searchbar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [data, setData] = useState(DATA);
  const [isSearchActive, setIsSearchActive] = useState(false);

  useEffect(() => {
    setIsSearchActive(false);
  }, []);

  return (
    // features courses and search bar
    <section className="course-search-section" id="courses">
      <div className="course-search-app container">
        <form
          className="course-search"
          onSubmit={(e) => {
            // reset courses if input empty
            e.preventDefault();
            if (searchTerm === "") {
              setIsSearchActive(false);
            } else {
              // pass
            }
          }}
        >
          <label htmlFor="course-search"></label>
          <input
            type="search"
            id="course-searchbar"
            placeholder="Search courses"
            onChange={(e) => {
              setSearchTerm(e.target.value);
              setIsSearchActive(true);
            }}
          />
          {/* <button className="search-btn">
            <GoSearch size={25} style={{ fill: "#3a86ff" }} />
          </button> */}
        </form>
        <div className="featured-courses">
          <h2>Featured Courses</h2>
          <Swiper
            slidesPerView={1}
            spaceBetween={25}
            centeredSlides={true}
            loop={true}
            navigation={{
              nextEl: ".next-featured",
              prevEl: ".prev-featured",
            }}
            breakpoints={{
              768: {
                slidesPerView: 2,
                centeredSlides: false,
                spaceBetween: 25,
              },
              1024: {
                slidesPerView: 3,
                centeredSlides: false,
                spaceBetween: 15,
              },
            }}
          >
            {DATA.filter((val) => val === true).map((val, index) => {
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
          </Swiper>
          <button className="prev-featured">
            <HiChevronLeft size={40} style={{ fill: "#828282" }} />
          </button>
          <button className="next-featured">
            <HiChevronRight size={40} style={{ fill: "#828282" }} />
          </button>
        </div>
      </div>

      <div className="background">
        <div className="container">
          <h2 className="title">Courses</h2>
          {
            isSearchActive ? (
              <SearchFunction
                data={DATA}
                searchTerm={searchTerm}
                isSearchActive={isSearchActive}
              /> // true
            ) : (
              <CoursesGrid data={DATA} />
            ) // false
          }
        </div>
      </div>
    </section>
  );
};

export default Searchbar;
