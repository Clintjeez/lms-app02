import React from "react";
import { Link, BrowserRouter as Router } from "react-router-dom";
import "./Cta.scss";

function Cta() {
  return (
    <>
      <section id="cta-section">
        <div className="container">
          <h1 className="heading">Start a career</h1>
          <p className="info">
            Start learning today at Zustech and learn core skills in:
            Business Analysis, Project Management, Software Testing, Test
            Automation and more!
          </p>
          <div className="btn-wrapper">
            <Router>
              <Link to="/start-trial" style={{ textDecoration: "none" }}>
                <button className="cta-trial-btn">Start Free Trial</button>
              </Link>
            </Router>
          </div>
        </div>
      </section>
    </>
  );
}

export default Cta;
