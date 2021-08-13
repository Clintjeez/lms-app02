import {
  SIGNUP_SUCCESS,
  SIGNUP_FAIL,
  SIGNUP_START,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
} from "../action/types";

const user = JSON.parse(localStorage.getItem("user"));

const initialState = {
  user: null,
  loading: false,
  error: "",
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGNUP_START:
      return {
        ...state,
        loading: true,
      };
    case SIGNUP_FAIL:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    case SIGNUP_SUCCESS:
      return {
        ...state,
        user: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};
