// import images
import blob1 from "../assets/blob-icon_1.png";
import blob2 from "../assets/blob-icon_2.png";
import blob3 from "../assets/blob-icon_3.png";
// import styles
import "./why.scss";

const Why = () => {
  return (
    <section id="why">
      <div className="container">
        <h2>Why become an Instructor</h2>
        <div className="content">
          <div className="item">
            <img src={blob1} alt="blob icon" />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pharetra
              non ante eros malesuada massa.
            </p>
          </div>
          <div className="item">
            <img src={blob2} alt="blob icon" />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pharetra
              non ante eros malesuada massa.
            </p>
          </div>
          <div className="item">
            <img src={blob3} alt="blob icon" />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pharetra
              non ante eros malesuada massa.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Why;
