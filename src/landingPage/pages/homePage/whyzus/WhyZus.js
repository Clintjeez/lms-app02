import React from "react";
import Yellow from "./icons/Yellow.svg";
import DarkBlue from "./icons/DarkBlue.svg";
import Blue from "./icons/Blue.svg";
import Green from "./icons/Green.svg";
import { Link, BrowserRouter as Router } from "react-router-dom";
import "./WhyZus.scss";

function whyZus() {
  return (
    <>
      <section id="about-section">
        <div class="custom-shape-divider-top-1621535573">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
              className="shape-fill"
            ></path>
          </svg>
        </div>
        <div className="container">
          <div className="row info-row">
            <div className="col">
              <div className="info-text">
                <h1>Why Zustech</h1>
                <p>
                  Here at Zustech, we have a broad experience in consultancy and
                  training. We have many years of providing the best experience
                  for clients and trainees alike.
                </p>
                <div className="btn-wrapper">
                  <Router>
                    <Link to="/start-trial" style={{ textDecoration: "none" }}>
                      <button className="info-btn">Find out more</button>
                    </Link>
                  </Router>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="info-cards">
                <div className="feature-card">
                  <div className="card-icon">
                    <img
                      src={Yellow}
                      alt="card-icon"
                      className="yellow-icon"
                      size="3em"
                    />
                  </div>
                  <div className="card-content">
                    <h3>Experienced</h3>
                    <p>
                      Training Provided by experienced professionals giving
                      reputable learning material.
                    </p>
                  </div>
                </div>
                <div className="feature-card">
                  <div className="card-icon">
                    <img
                      src={DarkBlue}
                      alt="card-icon"
                      className="DarkBlue-icon"
                      size="3em"
                    />
                  </div>
                  <div className="card-content">
                    <h3>Flexibility</h3>
                    <p>
                      Our flexible training can be done at anytime and anywhere,
                      respecting your time and schedule.
                    </p>
                  </div>
                </div>
                <div className="feature-card">
                  <div className="card-icon">
                    <img
                      src={Blue}
                      alt="card-icon"
                      className="blue-icon"
                      size="3em"
                    />
                  </div>
                  <div className="card-content">
                    <h3>Variety</h3>
                    <p>
                      Giving you access to a variety of courses under
                      professional instructors, meaning you'll find something
                      for you!
                    </p>
                  </div>
                </div>
                <div className="feature-card">
                  <div className="card-icon">
                    <img
                      src={Green}
                      alt="card-icon"
                      className="green-icon"
                      size="3em"
                    />
                  </div>
                  <div className="card-content">
                    <h3>Communication</h3>
                    <p>
                      Allows for communication between students and instructors,
                      giving you the power to clarify your learning!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default whyZus;
