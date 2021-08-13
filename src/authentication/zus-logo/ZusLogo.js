import logo from "./assets/Zustech-Logo.svg";
// import styles
import "./zusLogo.scss";

const ZusLogo = () => {
  return (
    <div className="signup-logo">
      <img src={logo} className="logo" alt="logo" />
      <span>zustech</span>
    </div>
  );
};

export default ZusLogo;
