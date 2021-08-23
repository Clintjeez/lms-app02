// import styles
import "./steps.scss";

const Step = ({ id, image, heading, text1, text2, button, wave }) => {
  return (
    <div className="step-content">
      <h1>{id}</h1>
      <div className="image">
        <img src={image} alt={heading} />
      </div>
      <div className="text-content">
        <h3>{heading}</h3>
        <p>{text1}</p>
        {text2 !== null && <p>{text2}</p>}
        {button !== null && <button>{button}</button>}
      </div>
      <img src={wave} className="mobile-wave" alt="wave graphic" />
    </div>
  );
};

export default Step;
