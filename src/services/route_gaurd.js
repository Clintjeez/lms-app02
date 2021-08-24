import { useMemo } from "react";
import { isLoggedIn } from "../redux/action/auth";
import { Redirect, Route, useLocation } from "react-router-dom";

/**
 * Protect route to authentication users only
 * @param Parameters
 */
export default function ProtectedRoute({ children, ...rest }) {
  const location = useLocation();
  const loggedIn = isLoggedIn();

  const render = () => {
    console.log(loggedIn);
    // Check auth state
    if (loggedIn) {
      // if authenticated
      return children;
    } else {
      // if not authenticated
      return (
        <Redirect to={{ pathname: "/login", state: { from: location } }} />
      );
    }
  };

  return <Route {...rest} children={render()} />;
}
