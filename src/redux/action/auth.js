import { hash } from "../../middleware/crypto";
//import { successAction, errorAction } from "./toastActions";
import { userLogin, userSignup } from "../../services/apiServices";
import { errorAction, successAction } from "./toastActions";
import {
  LOGIN_FAIL,
  LOGIN_START,
  LOGIN_SUCCESS,
  SIGNUP_FAIL,
  SIGNUP_START,
  SIGNUP_SUCCESS,
} from "./types";

const LOCAL_AUTH_TOKEN_KEY = hash("_LOCAL_AUTH_TOKEN_KEY");
const LOCAL_AUTH_ROLE = hash("_LOCAL_AUTH_ROLE");
const LOCAL_AUTH_EXPIRE = hash("_LOCAL_AUTH_EXPIRE");

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

const storeAuthState = (token, role, expireAt) => {
  localStorage.setItem(LOCAL_AUTH_TOKEN_KEY, token);
  localStorage.setItem(LOCAL_AUTH_ROLE, JSON.stringify(role));
  localStorage.setItem(LOCAL_AUTH_EXPIRE, expireAt);
};

export const restoreAuthState = () => {
  const token = localStorage.getItem(LOCAL_AUTH_TOKEN_KEY);
  const role = JSON.parse(localStorage.getItem(LOCAL_AUTH_ROLE));
  const expireAt = localStorage.getItem(LOCAL_AUTH_EXPIRE);

  return { token, role, expireAt };
};

export const isLoggedIn = () => {
  const token = localStorage.getItem(LOCAL_AUTH_TOKEN_KEY);

  if (token) {
    return true;
  }
  return false;
};

export const signupAsync = (data, history) => {
  return async (dispatch) => {
    try {
      dispatch(signupStart());
      const {
        data: { accessToken, roleClaims, expiryIn },
      } = await userSignup(data);
      storeAuthState(accessToken, roleClaims, expiryIn);
      dispatch(successAction("Account created successfully!"));
      // dispatch(signupSuccess());
      history.push("/login");
    } catch (error) {
      dispatch(
        errorAction(error.response?.data?.data.message[0]) ||
          errorAction(error.response.data.message) ||
          errorAction(error.response.message) ||
          "An error occurred. Please try again"
      );
      // dispatch(signupFailure());
      console.log(error);
      console.log(error.response);
      console.log(error.response.message);
    }
  };
};

export const loginAsync = (data, history) => {
  return async (dispatch) => {
    try {
      dispatch(loginStart());
      const response = await userLogin(data);
      console.log(response);
      storeAuthState(
        response.data.accessToken,
        response.data.roleClaims,
        response.data.expiryIn
      );
      dispatch(successAction("Login successfully"));
      dispatch(loginSuccess);
      history.push("/dashboard");
    } catch (error) {
      dispatch(errorAction(error.response?.data?.message));
      // dispatch(loginFailure());
      console.log(error.response?.data?.message);
    }
  };
};

export const logout = (history) => {
  return (dispatch) => {
    try {
      localStorage.clear();
      history.push("/login");
    } catch (error) {
      dispatch(errorAction("error occurred logging out"));
    }
  };
};
