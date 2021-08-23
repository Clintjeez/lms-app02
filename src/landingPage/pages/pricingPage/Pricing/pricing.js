import "./pricing.scss";

const Pricing = () => {
  return (
    <section id="pricing">
      <div className="wave-bg">
        <div className="pricing-container">
          <div className="header">
            <h2 className="title">Pricing</h2>
            <p className="subtext">
              We provide competitive pricing for competive courses.
            </p>
          </div>
          <div className="content container">
            {/* Start of pricing cards */}
            <div className="pricing-cards">
              <div className="single-card left">
                <div className="top-card">
                  <p id="hidden-statement">best value</p>
                  <p className="left-price price">£0</p>
                  <p className="subscription-type">Free</p>
                  <p id="hide-statement" className="left-statement">
                    free
                  </p>
                </div>

                <ul className="features">
                  <li className="left-feature feature">
                    Montes sed egestas lacus urna ultrices.
                  </li>
                  <li className="left-feature feature">
                    Montes sed egestas lacus urna ultrices.
                  </li>
                  <li className="left-feature feature">
                    Montes sed egestas lacus urna ultrices.
                  </li>
                  <li className="left-feature feature">
                    Montes sed egestas lacus urna ultrices.
                  </li>
                </ul>

                <button type="button" className="btn-subscribe btn-left">
                  Get Started
                </button>
              </div>

              <div className="single-card center">
                <div className="top-card top-center">
                  <p id="statement">best value</p>
                  <p className="center-price price">
                    £10<span id="frequency">/mo</span>
                  </p>
                  <p id="hide-statement">billed annually*</p>
                </div>

                <ul className="center-features features">
                  <li className="center-feature feature">
                    Montes sed egestas lacus urna ultrices.
                  </li>
                  <li className="center-feature feature">
                    Montes sed egestas lacus urna ultrices.
                  </li>
                  <li className="center-feature feature">
                    Montes sed egestas lacus urna ultrices.
                  </li>
                  <li className="center-feature feature">
                    Montes sed egestas lacus urna ultrices.
                  </li>
                </ul>
                <button type="button" className="btn-subscribe center-fixed">
                  Get Started
                </button>
              </div>

              <div className="single-card right">
                <div className="top-card">
                  <p id="statement">most popular</p>
                  <p className="price">
                    £15<span id="frequency">/mo</span>
                  </p>
                  <p id="hide-statement">Monthly</p>
                </div>

                <ul className="features">
                  <li className="feature">
                    Montes sed egestas lacus urna ultrices.
                  </li>
                  <li className="feature">
                    Montes sed egestas lacus urna ultrices.
                  </li>
                  <li className="feature">
                    Montes sed egestas lacus urna ultrices.
                  </li>
                  <li className="feature">
                    Montes sed egestas lacus urna ultrices.
                  </li>
                </ul>

                <button type="button" className="btn-subscribe">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
