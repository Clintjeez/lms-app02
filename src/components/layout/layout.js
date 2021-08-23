import React from "react";
import Navigation from "../../landingPage/navigation/nav";
import Footer from "../../landingPage/pages/homePage/footer/Footer";

function Layout({ children }) {
  return (
    <div className="full_layout">
      <Navigation />
      {children}
      <Footer />
    </div>
  );
}

export default Layout;
