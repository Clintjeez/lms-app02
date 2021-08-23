// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import facebook from '../assets/social-icons/facebook.svg';
// import google from '../assets/social-icons/google.svg';
// import twitter from '../assets/social-icons/twitter.svg';
// import eyeclosed from '../assets/eyeclosed.svg';
// import image from '../assets/sign-up-img.svg';
// import usePasswordToggle from '../signupPage/Signup/usePasswordToggle';
// import FormValidator from '../InputValidation/Form&Validation';
// import InputField from '../InputValidation/InputField';


// import './Form.scss';

// const requiredValidator = (val) => {
//     if (!val) {
//         return ["This field is required!"];
//     }
//     return [];
// }
// const emailSyntaxValidator = (val) => {
//     let valid = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

//     if (!valid.test(val)) {
//         return ["This address must be entered in correct email format"]
//     }
//     return []
// }

// const Form = () => {
//     const [PasswordInputType, ToggleIcon] = usePasswordToggle();


//     return (
//         <section id="signin">
//             <main>
//                     <div className="exit-to-home-right">
//                         <Link to="/">
//                             <span className="return-home-right">X</span>
//                         </Link>
//                     </div>
//             <FormValidator onSubmit={data => console.log(data)} className="form-content">
//                     <div className="form-btn">
//                         <Link to="/Login">
//                             <button type="button" className="signIn-btn">Sign in</button>
//                         </Link>
//                         <Link to="/register">
//                             <button type="button" className="signUp-btn">Sign up</button>
//                         </Link>
//                     </div>
//                     <div className="header">
//                         <h1>Welcome back</h1>
//                         <p className="cta-signin">Sign in to continue</p>
//                     </div>


//                     <div className="form-control">
//                         <InputField
//                             name="email"
//                             type="email"
//                             className="form-input"
//                             validators={[requiredValidator, emailSyntaxValidator]}
//                             placeholder="Email"
//                         />
//                         {/* <input type="email" name="username" placeholder="Email" value={values.username} onChange={handleChange} /> */}
                        
//                     </div>
//                     <div className="form-control">
//                         <div className="psd">
//                             <InputField
//                                 name="password"
//                                 type={PasswordInputType}
//                                 className="form-input"
//                                 validators={[requiredValidator]}
//                                 placeholder="Password"
//                             />
//                             {/* <input id="password" type={PasswordInputType} name="password" placeholder="Password" value={values.password} onChange={handleChange} /> */}
//                             <span className="password-toggle-icon">{ToggleIcon}</span>

//                         </div>

//                     </div>

//                     <div className="checkbox">
//                         <input type="checkbox" />
//                         <label for="remember-details">Remember me</label>
//                     </div>
//                     <button type="submit" className="submit-btn">Sign in</button>
//                     <div className="forgot-password">
//                         {/* <p className="forgot-pwd-link"><a href="#">Forgot password?</a></p> */}
//                     </div>

//                     <div className="separator">
//                         <div className="line"></div>
//                         or
//                         <div className="line"></div>
//                     </div>

//                     <div className="social-media">
//                         <p>Sign up with social media</p>
//                         <img src={google} alt="" className="icons" />
//                         <img src={facebook} alt="" className="icons" />
//                         <img src={twitter} alt="" className="icons" />
//                     </div>
//                 </FormValidator>

//                 <div className="welcome-message">
//                     {/* <div className="exit-to-home-right">
//                         <Link to="/">
//                             <span className="return-home-right">X</span>
//                         </Link>
//                     </div> */}
//                     <h1>Welcome back</h1>
//                     <p>Sign in to continue</p>
//                     <img src={image} alt="" />
//                 </div>

//             </main>
//         </section>
//     )
// }

// export default Form;
