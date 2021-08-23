import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import Quote from "../Testimonial/images/quote.png";
import Closequote from "../Testimonial/images/closequote.png";
import Group from "../Testimonial/images/Group.png";
import Photo from "../Testimonial/images/photo.png";
import "../Testimonial/Testimonial.scss";
import people from "./data";

import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

const Testimonial = () => {
  return (
    <div className="testimonial-section container">
      <h3 className="title">Testimonials</h3>
      <img className="group" src={Group} alt="" />

      <div className="container-btn">
        <button className="prev-featured">
          <FaChevronLeft size={26} style={{ fill: "#828282" }} />
        </button>

        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          navigation={{
            nextEl: ".next-featured",
            prevEl: ".prev-featured",
          }}
        >
          {/*looping through my array object to fetch data */}

          {people.map((user) => (
            <SwiperSlide key={user.id} className="slide">
              <div className="slide-content">
                <div className="text-header-section">
                  <p className="user-testimonial">{user.testimonial}</p>
                </div>

                <div className="user-image-box">
                  <img src={Photo} alt="" className="user-photo" />
                  <h5>{user.username}</h5>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <button className="next-featured">
          <FaChevronRight size={26} style={{ fill: "#828282" }} />
        </button>
      </div>
      <img className="group-fade" src={Group} alt="" />
    </div>
  );
};

export default Testimonial;
