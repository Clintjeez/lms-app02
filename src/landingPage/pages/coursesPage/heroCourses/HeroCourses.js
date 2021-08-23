// import swiper react components
import { Swiper, SwiperSlide } from "swiper/react";
import './HeroCourses.scss'
// Import the Swiper styles
import "swiper/swiper.scss";
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

const HeroCourses = () => {
   return (
       <section id="heroCourses">
           <div className="container-hero">
        <Swiper 
          pagination={true}
          slidesPerView={1}
          spaceBetween={0}
          centeredSlides={true}
          navigation
          loop={false}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
        <SwiperSlide>
        
        <div className="content">
            <div className="headinghero">
           <h1 className="header">Learn Python Programming <br/> Masterclass
           </h1>
           </div>
           <p className="text-about">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pharetra non ante eros malesuada massa. 
               Semper nulla semper adipiscing sed suspendisse mi cursus. Quisque nunc pretium id id aenean egestas. 
           </p>
           <form action="">
            <input
              className="watch"
              type="submit"
              value="Watch now"
            ></input>
          </form>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="content">
            <div className="headinghero">
           <h1 className="header">Learn Python Programming <br/> Masterclass
           </h1>
           </div>
           <p className="text-about">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pharetra non ante eros malesuada massa. 
               Semper nulla semper adipiscing sed suspendisse mi cursus. Quisque nunc pretium id id aenean egestas. 
           </p>
           <form action="">
            <input
              className="watch"
              type="submit"
              value="Watch now"
            ></input>
          </form>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="content">
            <div className="headinghero">
           <h1 className="header">Learn Python Programming <br/> Masterclass
           </h1>
           </div>
           <p className="text-about">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pharetra non ante eros malesuada massa. 
               Semper nulla semper adipiscing sed suspendisse mi cursus. Quisque nunc pretium id id aenean egestas. 
           </p>
           <form action="">
            <input
              className="watch"
              type="submit"
              value="Watch now"
            ></input>
          </form>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="content">
            <div className="headinghero">
           <h1 className="header">Learn Python Programming <br/> Masterclass
           </h1>
           </div>
           <p className="text-about">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pharetra non ante eros malesuada massa. 
               Semper nulla semper adipiscing sed suspendisse mi cursus. Quisque nunc pretium id id aenean egestas. 
           </p>
           <form action="">
            <input
              className="watch"
              type="submit"
              value="Watch now"
            ></input>
          </form>
        </div>
        </SwiperSlide>
        </Swiper>
       </div>
       </section>
   )  
}
export default HeroCourses;
