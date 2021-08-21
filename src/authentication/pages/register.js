import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
import usePasswordToggle from "../helpers/usePasswordToggle";
import PasswordStrengthMeter from "../helpers/PasswordStrengthMeter";
import Exit from "./../assets/exit.svg";
import Socials from "../helpers/socials";
import ZusLogo from "../zus-logo/ZusLogo";
import Signup from "./../assets/sign-up-img.svg";
// import useForm 'react-hook-form' & Yup validation
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { VscLoading } from "react-icons/vsc";

import { Select } from "antd";

import { useDispatch, useSelector } from "react-redux";

// Redux connectOptions

import { signupAsync } from "../../redux/action/auth";

import "./FormStyling.scss";
import { infoAction } from "../../redux/action/toastActions";

const { Option } = Select;

// var countryTelData = require('country-telephone-data');

const Register = () => {
  const dispatch = useDispatch();
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    countryId: 1,
    password: "",
    confirmPassword: "",
    userType: 1,
    deviceId: "",
  });

  const [deviceId, setDeviceId] = useState("");
  const getDeviceId = async () => {
    const res = await axios.get("https://geolocation-db.com/json/");
    // console.log(res.data);
    setDeviceId(res.data.IPv4);
  };

  useEffect(() => {
    getDeviceId();
  }, []);

  const [PasswordInputType, ToggleIcon] = usePasswordToggle();
  const [passwordInput, setPasswordInput] = useState("");

  const { loading } = useSelector((state) => state.auth);
  const history = useHistory();

  const validationSchema = Yup.object().shape({
    firstName: Yup.string()
      .required("First Name is a required field")
      .matches(/^[a-z ,.'-]+$/i, "Must be alphabetic characters"),
    lastName: Yup.string()
      .required("Last name is a required field")
      .matches(/^[a-z ,.'-]+$/i, "Must be alphabetic characters"),
    email: Yup.string()
      .required("Email is a required field")
      .email("Email is invalid"),
    password: Yup.string()
      .required("Password is required")
      .matches(
        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{6,50}$/,
        "Password is required to be at least 6 characters long up to a maximum of 50 characters inclusive of at least 1 uppercase letter, 1 lowercase letter, 1 numerical digit and 1 special character."
      ),
    confirmPassword: Yup.string()
      .required("Confirm password is required")
      .oneOf([Yup.ref("password"), null], "Passwords must match"),
    acceptTerms: Yup.bool().oneOf(
      [true],
      "You must accept the Terms and Conditions!"
    ),
  });
  // create resolver variable to inject to useForm hook as validation
  const formOptions = { resolver: yupResolver(validationSchema) };

  // get functions to build form with useForm() hook
  const { register, handleSubmit, formState } = useForm(formOptions);

  const { errors } = formState;

  const submitClick = () => {
    const info = {
      ...user,
      username: user.email,
      countryId: 2,
      deviceId: deviceId,
    };
console.log('Click')
    dispatch(signupAsync(info, history));
  };

  const submitClick1 = () => {
    alert('click')
  }

  const handleInputChange = (e) => {
    const { value, name } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  
  return (
    <section id="register">
      <div className="container">
        <div className="form-content-left">
          <div className="form-container">
            <div className="logo-zustech-form">
              <Link to="/">
                <ZusLogo />
              </Link>
            </div>
            <div className="signup-text">
              <h1 className="title">Let's get started</h1>
              <p className="cta-text">Enter your details to begin learning</p>
            </div>
            <div className="img-1">
              <img src={Signup} alt="signup-img" className="signup-img" />
            </div>
          </div>
        </div>
        <div className="form-content-right">
          <div className="exit-to-home-right">
            <Link to="/">
              <img src={Exit} alt="exit-cross" className="return-home-right" />
            </Link>
          </div>
          <form className="signup-form" onSubmit={handleSubmit(submitClick)} noValidate >
            <div className="form-btn">
              <Link to="/login">
                <button type="button" className="signIn-btn">
                  Sign in
                </button>
              </Link>
              <Link to="/signup">
                <button type="button" className="signUp-btn active">
                  Sign up
                </button>
              </Link>
            </div>
            <div className="signup-text-right">
              <h1 className="title">Let's get started</h1>
              <p className="cta-text">Enter your details to begin learning</p>
            </div>

            <div className="form-inputs">
              <div className="form-field">
                <input
                  {...register("firstName")}
                  type="text"
                  className="form-control"
                  placeholder="First Name"
                  name="firstName"
                  value={user.firstName}
                  onChange={(e) => handleInputChange(e)}
                  required
                />
                <p className="asterisk">*</p>
              </div>
              <div className="error">{errors.firstName?.message}</div>
            </div>
            <div className="form-inputs">
              <div className="form-field">
                <input
                  {...register("lastName")}
                  type="text"
                  className="form-control"
                  placeholder="Last Name"
                  name="lastName"
                  value={user.lastName}
                  onChange={(e) => handleInputChange(e)}
                  required
                />
                <p className="asterisk">*</p>
              </div>
              <div className="error">{errors.lastName?.message}</div>
            </div>

            <div className="form-inputs">
              <div>
                <div className="form-field">
                  <input
                    type="text"
                    {...register("email")}
                    className="form-control"
                    placeholder="Email"
                    name="email"
                    value={user.email}
                    onChange={(e) => handleInputChange(e)}
                    required
                  />
                  <p className="asterisk">*</p>
                </div>
                <div className="error">{errors.email?.message}</div>
              </div>
            </div>

            <div className="form-inputs pwd">
              <div>
                <div className="form-field">
                  <input
                    {...register("password")}
                    type={PasswordInputType}
                    className="form-control"
                    placeholder="Password"
                    name="password"
                    value={user.password}
                    onChange={(e) => handleInputChange(e)}
                    required
                  />
                  <p className="asterisk">*</p>
                  <span className="password-toggle-icon">{ToggleIcon}</span>
                </div>
                <PasswordStrengthMeter passwordInput={user.password} />
                <div className="error">{errors.password?.message}</div>
              </div>
            </div>

            <div className="form-inputs pwd">
              <div>
                <div className="form-field">
                  <input
                    {...register("confirmPassword")}
                    type={PasswordInputType}
                    className="form-control"
                    placeholder="Confirm Password"
                    name="confirmPassword"
                    value={user.confirmPassword}
                    onChange={(e) => handleInputChange(e)}
                    required
                  />
                  <p className="asterisk">*</p>
                  <span className="password-toggle-icon">{ToggleIcon}</span>
                </div>
                <div className="error">{errors.confirmPassword?.message}</div>
              </div>
            </div>

            <div className="checkbox">
              <div className="checkbox-terms-wrapper">
                <input
                  {...register("acceptTerms")}
                  id="terms&conditions"
                  className="t-c"
                  type="checkbox"
                  required
                />
                <label htmlFor="terms&conditions">
                  I have read the <a href="/t&c">Terms & Conditions </a>
                </label>
                <p className="asterisk">*</p>
              </div>
              <div className="error tc">{errors.acceptTerms?.message}</div>
              <div className="checkbox-mrkt-wrapper">
                <input
                  type="checkbox"
                  id="marketing"
                  name="marketing"
                  className="marketing"
                />
                <label htmlFor="marketing">Opt in for Marketing emails</label>
              </div>
            </div>

            <div className="btn-wrapper">
              <button className="form-input-btn signup-submit" type="submit">
                {loading ? <VscLoading /> : "Sign Up"}
              </button>
            </div>
            <div className="separator">
              <div className="line"></div>
              or
              <div className="line"></div>
            </div>
            <Socials />
          </form>
        </div>
      </div>
    </section>
  );
};

export default Register;
