import { useEffect, useState } from "react";

import React from "react";
import { useHistory } from "react-router";

function AuthGuard({ children }) {
  const [token, setToken] = useState(sessionStorage.getItem("auth_token"));
  const history = useHistory();
  useEffect(() => {
    let token = sessionStorage.getItem("auth_token");
    if (!token) {
      history.push("/login");
    }
  });
  return <>{token ? children : null}</>;
}

export default AuthGuard;
