import React from "react";
import { Link } from "react-router-dom";
const ResetPassword = () => {
    return (
        <section id="reset-password-page">
        <div class="content-wrapper">
          <h1>Change Password</h1>

          <form>
              <input type="email" placeholder="Enter New Password" />
              <input type="email" placeholder="Re-Type New Password" />
              <button>Change Password</button>
          </form>
        </div>
      </section>
    );
}
 
export default ResetPassword;