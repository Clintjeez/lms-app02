import { Link } from "react-router-dom";

// import style
import google from "./../assets/social-icons/google.svg";
import facebook from "./../assets/social-icons/facebook.svg";
import twitter from "./../assets/social-icons/twitter.svg";
// import style
import "./socials.scss";

const Socials = () => {
  return (
    <div className="social-media">
      <p>Sign up with social media</p>
      <Link to="/social"><img src={google} alt="" className="icons" /></Link>
      <Link to="/social"><img src={facebook} alt="" className="icons" /></Link>
      <Link to="/social"><img src={twitter} alt="" className="icons" /></Link>
    </div>
  );
};

export default Socials;

