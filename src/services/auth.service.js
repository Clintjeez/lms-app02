import axios from "axios";

const API_URL =
  "http://ec2-3-15-196-15.us-east-2.compute.amazonaws.com/api/Auth/";

const register = (firstname, lastname, email, password) => {
  return axios.post(API_URL + "signup", {
    firstname,
    lastname,
    email,
    password,
  });
};
// class AuthService {
//   //Login
//   login(username, password) {
//     return axios
//       .post(API_URL + "signin", { username, password })
//       .then((response) => {
//         if (response.data.accessToken) {
//           localStorage.setItem("user", JSON.stringify(response.data));
//         }
//         return response.data;
//       })
//       .catch((error) => {
//         if (error.response) {
//           console.log(error.response.data); // logs ' '
//           console.log(error.response.status); // logs 401
//           console.log(error.response.headers); // logs an object / {}
//         } else if (error) {
//           console.log(error.request)
//         } else {
//           console.log('Error' + error.message)
//         }
//       })
//   }

const login = (email, password) => {
  return axios
    .post(API_URL + "signup", {
      email,
      password,
    })
    .then((response) => {
      if (response.data.accessToken) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }
      return response.data;
    });
};

const logout = () => {
  localStorage.removeItem("user");
};

export default {
  register,
  login,
  logout,
};
