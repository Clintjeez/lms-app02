// import {toast} from "react_toastify"
import jwtDecode from "jwt-decode";

const initialState = {
  token: localStorage.getItem("token"),
  firstName: null,
  lastName: null,
  userName: null,
  email: null,
  phoneNumber: null,
  countryId: null,
  password: null,
  confirmPassword: null,
  userType: null,
  deviceId: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SIGN_UP":
      console.log("welcome");
      const user = jwtDecode(action.token);
      return {
        ...initialState,
        token: action.token,
        firstName: user.firstName,
        lastName: user.lastName,
        userName: user.userName,
        email: user.email,
        phoneNumber: user.phoneNumber,
        countryId: user.countryId,
        password: user.password,
        confirmPassword: user.confirmPassword,
        userType: user.userType,
        deviceId: user.deviceId,
      };
    default:
      return state;
  }
};

export default authReducer;
