// import style
import google from "../assets/social-icons/google.svg";
import facebook from "../assets/social-icons/facebook.svg";
import twitter from "../assets/social-icons/twitter.svg";
// import style
import "./socials.scss";

const Socials = () => {
  return (
    <div className="social-media">
      <p>Sign up with social media</p>
      <img src={google} alt="" className="icons" />
      <img src={facebook} alt="" className="icons" />
      <img src={twitter} alt="" className="icons" />
    </div>
  );
};

export default Socials;
