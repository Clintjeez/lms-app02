import {
  SIGNUP_SUCCESS,
  SIGNUP_FAIL,
  SIGNUP_START,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGIN_START,
  LOGOUT,
  SET_MESSAGE,
} from "./types";

//import { successAction, errorAction } from "./toastActions";
import { userSignup, userLogin } from "../../services/apiServices";
import { errorAction, successAction } from "./toastActions";

export const signupStart = () => ({
  type: SIGNUP_START,
});

export const signupFailure = (error) => ({
  type: SIGNUP_FAIL,
  payload: error,
});

export const signupSuccess = (user) => ({
  type: SIGNUP_SUCCESS,
  payload: user,
});

export const loginStart = () => ({
  type: LOGIN_START,
});

export const loginFailure = (error) => ({
  type: LOGIN_FAIL,
  payload: error,
});

export const loginSuccess = (user) => ({
  type: LOGIN_SUCCESS,
  payload: user,
});

export const signupAsync = (data, history) => {
  return async (dispatch) => {
    try {
      dispatch(signupStart());
      const response = await userSignup(data);
      console.log(response);
      dispatch(successAction("Account created successfully!"));
      dispatch(signupSuccess());
      history.push("/login");
    } catch (error) {
      dispatch(
        errorAction(error.response?.data?.data.message[0]) ||
         errorAction(error.response.data.message) ||
         errorAction(error.response.message) ||
          "An error occured. Please try again"
      );  
      dispatch(signupFailure());
      console.log(error)
      console.log(error.response);
      console.log(error.response.message)
     
    }
  };
};


export const loginAsync = (data, history) => {
  return async (dispatch) => {
    try {
      dispatch(loginStart());
      const response = await userLogin(data);
      console.log(response);
      dispatch(successAction("Login successfully"));
      dispatch(loginSuccess);
      history.push("dashboard");
    } catch (error) {
      dispatch(errorAction(error.response?.data?.message));
      dispatch(loginFailure());
      console.log(error.response?.data?.message);
    }
  };
};
