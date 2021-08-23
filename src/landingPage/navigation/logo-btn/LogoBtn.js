import logo from "./assets/Zustech-Logo.svg";
// import styles
import "./logoBtn.scss";

const LogoBtn = () => {
  return (
    <div className="nav-logo">
      <img src={logo} className="logo" alt="logo" />
      <span>zustech</span>
    </div>
  );
};

export default LogoBtn;
