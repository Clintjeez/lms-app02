// import styles
import "./careers.scss";
// import images
import img_mobile from "./assets/bulding_careers_mobile.png";
import img_wide from "./assets/bulding_careers_widescreen.png";

const Careers = () => {
  return (
    <section id="careers">
      <div className="container">
        <h1>Build your career</h1>
        <p>
          Jump starting your career as a professional with our training courses.
        </p>
        <img src={img_wide} className="careers-wide" alt="" />
        <img src={img_mobile} className="careers-mobile" alt="" />
      </div>
    </section>
  );
};

export default Careers;
