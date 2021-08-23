import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
import image from "../assets/sign-up-img.svg";
import usePasswordToggle from "../helpers/usePasswordToggle";
import Exit from "./../assets/exit.svg";
import ZusLogo from "../zus-logo/ZusLogo";
import Socials from "../helpers/socials";
// import React-hook-form & Yup validation
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch, useSelector } from "react-redux";
import { VscLoading } from "react-icons/vsc";

import { loginAsync } from "../../redux/action/auth";

// import styles
import "./FormStyling.scss";

const Login = () => {
  const dispatch = useDispatch();
  const [PasswordInputType, ToggleIcon] = usePasswordToggle();

  const [user, setUser] = useState({
    userName: "",
    password: "",
    rememberMe: false,
    deviceId: "",
  });


  const [checked, setChecked] = useState(false);

  const [deviceId, setDeviceId] = useState("");
  const getDeviceId = async () => {
    const res = await axios.get("https://geolocation-db.com/json/");
    // console.log(res.data);
    setDeviceId(res.data.IPv4);
  };

  useEffect(() => {
    getDeviceId();
  }, []);

  const validationSchema = Yup.object().shape({
    userName: Yup.string()
      .required("Email is a required field")
      .email("Must be in valid email format"),
    password: Yup.string().required("Password is required"),
  });
  // create resolver variable to inject to useForm hook as validation
  const formOptions = { resolver: yupResolver(validationSchema) };

  // get functions to build form with useForm() hook
  const { register, handleSubmit, reset, formState } = useForm(formOptions);
  const { errors, isSubmitSuccessful } = formState;

  const { loading } = useSelector((state) => state.auth);
  const history = useHistory();

  const onSubmit = () => {
    const info = {
      ...user,
      deviceId: deviceId,
    };
    dispatch(loginAsync(info, history));
  };

  const handleInputChange = (e) => {
    const { value, name } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleCheckbox = (e) => {
    setChecked(true);
    console.log(checked);
  };

  return (
    <section id="signin">
      <div className="container">
        <main>
          <form onSubmit={handleSubmit(onSubmit)} noValidate>
            <div className="form-container">
              <div className="form-btn">
                <Link to="/login">
                  <button type="button" className="signIn-btn">
                    Sign in
                  </button>
                </Link>
                <Link to="/signup">
                  <button type="button" className="signUp-btn">
                    Sign up
                  </button>
                </Link>
              </div>
              <div className="header">
                <h1>Welcome back</h1>
                <p className="cta-signin">Sign in to continue</p>
              </div>
              <div className="form-field">
                <div className="form-control">
                  <input
                    {...register("userName")}
                    type="email"
                    className="form-input"
                    placeholder="Your email"
                    name="userName"
                    value={user.userName}
                    onChange={(e) => handleInputChange(e)}
                  />

                  <div className="error">{errors.userName?.message}</div>
                </div>
                <p className="asterisk">*</p>
              </div>
              <div className="form-field">
                <div className="form-control">
                  <div className="psd">
                    <input
                      {...register("password")}
                      type={PasswordInputType}
                      className="form-input"
                      placeholder="Password"
                      name="password"
                      value={user.password}
                      onChange={(e) => handleInputChange(e)}
                    />

                    <span className="password-toggle-icon">{ToggleIcon}</span>

                    <div className="error">{errors.password?.message}</div>
                  </div>
                </div>
                <p className="asterisk">*</p>
              </div>
              <div className="checkbox">
                <input
                  type="checkbox"
                  checked={checked}
                  value={user.rememberMe}
                  onChange={(e) => handleCheckbox(e)}
                />
                <label for="remember-details">Remember me?</label>
              </div>
              <button type="submit" className="submit-btn">
              {loading ? <VscLoading /> : "Sign in"}
              </button>
              <div className="forgot-password">
                <p className="forgot-pwd-link">
                  <Link to="/ForgotPassword">Forgot password?</Link>
                </p>
              </div>

              <div className="separator">
                <div className="line"></div>
                or
                <div className="line"></div>
              </div>
              {/* SOCIALS */}
              <Socials />
            </div>
          </form>

          <div className="welcome-message">
            <div className="logo-exit">
              <div className="logo-zustech-form">
                <Link to="/">
                  <ZusLogo />
                </Link>
              </div>
            </div>
            <div className="exit-to-home-right">
              <Link to="/">
                <img
                  src={Exit}
                  alt="exit-cross"
                  className="return-home-right"
                />
              </Link>
            </div>
            <div className="welcome-container">
              <div className="content">
                <h1>Welcome back</h1>
                <p>Sign in to continue</p>
              </div>
              <img src={image} alt="" className="image" />
            </div>
          </div>
        </main>
      </div>
    </section>
  );
};

export default Login;
