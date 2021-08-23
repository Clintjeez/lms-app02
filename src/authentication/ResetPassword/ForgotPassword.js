import React from "react";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
    return (

        <section id="reset-password-page">
        <div class="content-wrapper">
          <h1>Forgot password</h1>
          <p>Enter your email address that you used to sign up, then click the submit button</p>

          <form>
              <input type="email" placeholder="Email" />
              <input type="password" placeholder="Re-Type New Password" />
              <button>submit</button>
              <p>Back to <Link to="">Login</Link></p>
          </form>
        </div>
      </section>

    );
}
 
export default ForgotPassword;

