
const initialState = { message: "Sorry! We don't quite know what happened there..." }

function toastReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case "SET_SUCCESS":
      return {...state, message: payload}
    case "SET_ERROR":
      return {...state, message: payload}
    case "SET_INFO":
      return {...state, message: payload}
    case "SET_WARNING":
      return {...state, message: payload}
      
    default:
      return state;
  }
}

export default toastReducer;

