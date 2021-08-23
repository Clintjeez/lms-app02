const prod = true;
export const PROXY = prod
  ? "https://proxy-server-ng.herokuapp.com"
  : "http://localhost:8080";
export const baseUrl = `http://ec2-3-15-196-15.us-east-2.compute.amazonaws.com/`;

export const loginUrl = `${baseUrl}api/Auth/Authenticate`;

export const signupUrl = `${baseUrl}api/Auth/Register`;
