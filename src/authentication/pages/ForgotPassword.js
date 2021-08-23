import React from "react";
import { Link } from "react-router-dom";
import Layout from "../../components/layout/layout";
import "../pages/forgotPassword.scss";

const ForgotPassword = () => {
  return (
    <Layout>
      <section id="forgot-password-page">
        <div class="content-wrapper">
          <h3>Forgot password</h3>
          <p>Enter your email address that you used to sign up, then click the submit button</p>

          <form>
              <input type="email" placeholder="Email" />
              <button>submit</button>
              <p>Back to <Link to="/login" style={{color: "#3a86ff"}}>Login</Link></p>
          </form>
        </div>
      </section>
    </Layout>
  );
};

export default ForgotPassword;
