// import images
import teachImg from "../assets/what_it_takes.png";
import ellipseSolid from "../assets/Ellipse_1.png";
import ellipseDashed from "../assets/Ellipse_2.png";
// import styles
import "./what.scss";

const What = () => {
  return (
    <section id="what">
      <div className="container">
        <h2>What it takes</h2>
        <div className="content">
          <div className="images">
            <img
              src={teachImg}
              className="main-img"
              alt="women writing notes and pointing to a drawing board"
            />
            <img
              src={ellipseSolid}
              className="elipse-graphic e1"
              alt="elipse graphic"
            />
            <img
              src={ellipseDashed}
              className="elipse-graphic e2"
              alt="elipse graphic"
            />
          </div>
          <div className="text-content">
            <div className="item">
              <h3>Industry Leader</h3>
              <ul>
                <li>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Pretium molestie viverra arcu nullam.
                </li>
                <li>
                  Tortor sed posuere leo amet risus. Pretium rhoncus tellus
                  consectetur.
                </li>
              </ul>
            </div>
            <div className="item">
              <h3>Commited Educators </h3>
              <ul>
                <li>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Pretium molestie viverra arcu nullam.
                </li>
                <li>
                  Tortor sed posuere leo amet risus. Pretium rhoncus tellus
                  consectetur.
                </li>
              </ul>
            </div>
            <div className="item">
              <h3>Impact Driven Learners</h3>
              <ul>
                <li>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Pretium molestie viverra arcu nullam.
                </li>
                <li>
                  Tortor sed posuere leo amet risus. Pretium rhoncus tellus
                  consectetur.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default What;
