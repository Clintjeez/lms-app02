import { Link } from "react-router-dom";
import menuItems from "./menuItems";
import "./SideMenu.scss";
import zustech_logo from "../../assets/zustech_logo.png";

const Menu = () => {
  return (
    <div className="sidebar-menu">
      <div className="menu-content">
        <div className="logo-container">
          <img src={zustech_logo} alt="logo" />
        </div>
        <ul>
          {menuItems.map((item) => {
            const { icon, text, url, id } = item;
            return (
              <Link to={`/dashboard/${url}`} key={id}>
                <li>
                  <div className="icon-container">
                    <img src={icon} alt="" />
                  </div>
                  <span>{text}</span>
                </li>
              </Link>
            );
          })}
        </ul>
        <div className="menu-footer">
          <Link>Log Out</Link>
        </div>
      </div>
    </div>
  );
};

export default Menu;
