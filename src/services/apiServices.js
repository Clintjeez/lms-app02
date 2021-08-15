import axios from "axios";

import { loginUrl, signupUrl } from "./urls";

let accessToken = sessionStorage.getItem("user");

if (accessToken) {
  axios.defaults.headers.accessToken = accessToken;
}

export const userLogin = (data) => {
  // return axios({
  //   method: "POST",
  //   url: loginUrl,
  //   data,
  // });
  const res = fetch(loginUrl,{ 
    method:"POST",
  body:data,
  headers:{"Accept":"application/json",}})
};

export const userSignup = (data) => {
  return axios({
    method: "POST",
    url: signupUrl,
    data,
  });
};
