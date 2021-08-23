import eye from "./eye.png";
import eyeclosed from "./eyeclosed.png";
// import styles
import "./eyeFeature.scss";

const ShowHide = () => {
  return (
    <div>
      <img src={eyeclosed} alt="hide password" className="hide-password" />
      <img src={eye} alt="show password" className="show-password" />
    </div>
  );
};

export default ShowHide;
