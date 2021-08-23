import { notification } from "antd";
import React from "react";
import { useEffect } from "react";
import { connect } from "react-redux";
import { useLocation, withRouter } from "react-router-dom";

function AuthGuard({ children, isLoggedIn, history }) {
  const location = useLocation();

  useEffect(() => {
    if (!isLoggedIn) {
      notification.info({
        message: "Information",
        description: "Kindly login to proceed.",
      });
      history.push(`/login?path=${location.pathname}`);
    }
  }, []);

  return <>{isLoggedIn && children}</>;
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.user.isLoggedIn,
  };
};
export default connect(mapStateToProps, null)(withRouter(AuthGuard));

