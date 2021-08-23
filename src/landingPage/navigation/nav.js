import { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
// import components
import LogoBtn from "./logo-btn/LogoBtn";
import NavList from "./NavList";
import { Twirl as Hamburger } from "hamburger-react";
// import styles
import "./nav.scss";

/* Hide scrollbar on scroll down. Reveal on scroll up*/
// let prevScrollPos = window.pageYOffset;

// window.onscroll = function () {
//   let currentScrollPos = window.pageYOffset;
//   if (prevScrollPos > currentScrollPos) {
//     document.querySelector("nav").style.top = "0";
//   } else {
//     document.querySelector("nav").style.top = "-90px";
//   }
//   prevScrollPos = currentScrollPos;
// };

const Nav = () => {
  // State
  const history = useHistory();
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [showLinks, setShowLinks] = useState(false);
  const [boxShadow, setBoxShadow] = useState(false);
  const [isOpen, setOpen] = useState(false);

  // track change in width
  useEffect(() => {
    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    };
    window.addEventListener("resize", changeWidth);
    // Clean up
    return () => {
      window.removeEventListener("resize", changeWidth);
    };
  }, [screenWidth]);

  useEffect(() => {
    // Toggles overflow hidden on the body
    const preventScroll = () => {
      // toggle when menu's open and only for mobile viewport
      showLinks && screenWidth < 768
        ? (document.body.style.overflowY = "hidden")
        : (document.body.style.overflowY = "visible");
    };
    preventScroll();
  }, [showLinks, screenWidth]);

  // Sets navbar to position fixed
  useEffect(() => {
    const shadowNav = () => {
      if (window.scrollY >= 90) {
        setBoxShadow(true);
      } else {
        setBoxShadow(false);
      }
    };
    window.addEventListener("scroll", shadowNav);
    // clean up
    return () => {
      window.removeEventListener("scroll", shadowNav);
    };
  }, []);

  return (
    <nav className={`${boxShadow ? "shadow" : ""}`}>
      <div className={`${showLinks ? "nav-center menu-open" : "nav-center"}`}>
        <div className="nav-header">
          <Link to="/" style={{ textDecoration: "none" }}>
              <LogoBtn />
          </Link>
          <Hamburger
            className="nav-toggle"
            color="#3a86ff"
            direction="left"
            label="Show menu"
            toggled={isOpen}
            toggle={setOpen}
            onToggle={(toggled) => {
              if (toggled) {
                // open a menu
                setShowLinks(true);
              } else {
                // close a menu
                setShowLinks(false);
              }
            }}
          />
        </div>
        <div className="links-container">
          <NavList setShowLinks={setShowLinks} setOpen={setOpen} />
        </div>
        <div className="nav-btns">
          <Link to="/login">
            <button className="btn-primary">Sign in</button>
          </Link>
          <Link to="/signup">
            <button className="btn-secondary">Sign up</button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
