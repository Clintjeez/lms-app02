
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  withRouter,
} from "react-router-dom";

import menuItems from "./menuItems";
import "./SideMenu.scss";
import zustech_logo from "../../assets/zustech_logo.png";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../../../../redux/action/auth";

const Menu = () => {
  const dispatch = useDispatch();
  const history = useHistory();

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
          <Link onClick={() => dispatch(logout(history))}>Log Out</Link>
        </div>
      </div>
    </div>
  );
};

export default Menu;
