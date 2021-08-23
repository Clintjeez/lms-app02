// import Actions from 'types'
import { 
  SET_SUCCESS,
  SET_ERROR, 
  SET_INFO, 
  SET_WARNING } from "./types";
// import notify library
import { notify } from 'react-notify-toast';

export function successAction(message) {
  return function(dispatch) {
    let myColor = { background: "#white", text: "#03023b"};
    dispatch({
      type: SET_SUCCESS,
      payload: message
    });
    notify.show(
      <div className="toast">
        <div className="toast-icon">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M2 10C2 5.58172 5.58172 2 10 2C10.9254 2 11.812 2.1567 12.6361 2.4442C13.1576 2.62611 13.7278 2.35085 13.9097 1.82938C14.0916 1.30792 13.8163 0.737716 13.2949 0.555803C12.2619 0.195438 11.1527 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20C15.5228 20 20 15.5228 20 10C20 9.74029 19.9901 9.48271 19.9706 9.22762C19.9284 8.67695 19.4479 8.26468 18.8972 8.30681C18.3465 8.34893 17.9343 8.82949 17.9764 9.38016C17.992 9.58454 18 9.79124 18 10C18 14.4183 14.4183 18 10 18C5.58172 18 2 14.4183 2 10ZM19.7411 3.67144C20.1119 3.26217 20.0807 2.62977 19.6714 2.25894C19.2622 1.88812 18.6298 1.91928 18.2589 2.32856L9.96822 11.4789L7.76774 8.85711C7.41268 8.43408 6.78192 8.37898 6.35889 8.73404C5.93586 9.08909 5.88076 9.71986 6.23581 10.1429L8.43629 12.7646C9.2159 13.6935 10.6361 13.7204 11.4503 12.8217L19.7411 3.67144Z" fill="#31D0AA"/>
          </svg>
        </div>
        <div className="toast-content">
          <div className="toast-title">
            Success
          </div>
          <p className="toast-message">
            {message}
          </p>
        </div>
        <div>
          <button className="toast-dismiss" onClick={notify.hide}>X</button>
        </div>
      </div>, "custom", 2500, myColor)
  };
};

export function errorAction(message) {
  return function(dispatch) {
    let myColor = { background: "white", text: "#03023b"};
    dispatch({
      type: SET_ERROR,
      payload: message
    });
    notify.show(
      <div className="toast">
        <div className="toast-icon">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M18 10C18 14.4183 14.4183 18 10 18C5.58172 18 2 14.4183 2 10C2 5.58172 5.58172 2 10 2C14.4183 2 18 5.58172 18 10ZM20 10C20 15.5228 15.5228 20 10 20C4.47715 20 0 15.5228 0 10C0 4.47715 4.47715 0 10 0C15.5228 0 20 4.47715 20 10ZM14.2426 14.2426C13.8521 14.6332 13.219 14.6332 12.8284 14.2426L10 11.4142L7.17157 14.2426C6.78105 14.6332 6.14788 14.6332 5.75736 14.2426C5.36684 13.8521 5.36684 13.219 5.75736 12.8284L8.58579 10L5.75736 7.17157C5.36683 6.78105 5.36683 6.14788 5.75736 5.75736C6.14788 5.36684 6.78105 5.36684 7.17157 5.75736L10 8.58579L12.8284 5.75736C13.219 5.36684 13.8521 5.36684 14.2426 5.75736C14.6332 6.14788 14.6332 6.78105 14.2426 7.17157L11.4142 10L14.2426 12.8284C14.6332 13.219 14.6332 13.8521 14.2426 14.2426Z" fill="#EB5757"/>
          </svg>
        </div>
        <div className="toast-content">
          <div className="toast-title">
            Error
          </div>
          <p className="toast-message">
            {message}
          </p>
        </div>
        <div>
          <button className="toast-dismiss" onClick={notify.hide}>X</button>
        </div>
      </div>, "custom", 2500, myColor)
  };
};

export function infoAction(message) {
  return function(dispatch) {
    let myColor = { background: "white", text: "#03023b"};
    dispatch({
      type: SET_INFO,
      payload: message
    });
    notify.show(
      <div className="toast">
        <div className="toast-icon">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="10" cy="10" r="9" stroke="#3A86FF" strokeWidth="2"/>
          <path d="M10.9844 15H9.00195V7.60352H10.9844V15ZM8.88574 5.68945C8.88574 5.39323 8.98372 5.14941 9.17969 4.95801C9.38021 4.7666 9.65137 4.6709 9.99316 4.6709C10.3304 4.6709 10.5993 4.7666 10.7998 4.95801C11.0003 5.14941 11.1006 5.39323 11.1006 5.68945C11.1006 5.99023 10.998 6.23633 10.793 6.42773C10.5924 6.61914 10.3258 6.71484 9.99316 6.71484C9.66048 6.71484 9.3916 6.61914 9.18652 6.42773C8.986 6.23633 8.88574 5.99023 8.88574 5.68945Z" fill="#3A86FF"/>
          </svg>
        </div>
        <div className="toast-content">
          <div className="toast-title">
            Information
          </div>
          <p className="toast-message">
            {message}
          </p>
        </div>
        <div>
          <button className="toast-dismiss" onClick={notify.hide}>X</button>
        </div>
      </div>, "custom", -1, myColor)
  };
};

export function warningAction(message) {
  return function(dispatch) {
    let myColor = { background: "white", text: "#03023b"};
    dispatch({
      type: SET_WARNING,
      payload: message
    });
    notify.show(
      <div className="toast">
        <div className="toast-icon">
          <svg width="24" height="23" viewBox="0 0 24 23" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M11.1318 3.53499C11.5157 2.86318 12.4844 2.86318 12.8682 3.53499L21.4219 18.5039C21.8028 19.1705 21.3215 20 20.5536 20H3.44636C2.67854 20 2.19717 19.1705 2.57812 18.5039L11.1318 3.53499Z" stroke="#FFCC00" strokeWidth="2"/>
          <path d="M12.7686 14.9443H11.1279L10.8955 8.04688H13.001L12.7686 14.9443ZM11.9482 16.0244C12.2809 16.0244 12.5475 16.1224 12.748 16.3184C12.9531 16.5143 13.0557 16.765 13.0557 17.0703C13.0557 17.3711 12.9531 17.6195 12.748 17.8154C12.5475 18.0114 12.2809 18.1094 11.9482 18.1094C11.6201 18.1094 11.3535 18.0114 11.1484 17.8154C10.9479 17.6195 10.8477 17.3711 10.8477 17.0703C10.8477 16.7695 10.9479 16.5212 11.1484 16.3252C11.3535 16.1247 11.6201 16.0244 11.9482 16.0244Z" fill="#FFCC00"/>
          </svg>
        </div>
        <div className="toast-content">
          <div className="toast-title">
            Warning
          </div>
          <p className="toast-message">
            {message}
          </p>
        </div>
        <div>
          <button className="toast-dismiss" onClick={notify.hide}>X</button>
        </div>
      </div>, "custom", 2500, myColor)
  };
};