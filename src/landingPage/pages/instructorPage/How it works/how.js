import { useState } from "react";
// import components
import Step from "./step";
import data from "./data";
// import images

// import styles
import "./how.scss";

const How = () => {
  const [value, setValue] = useState(0);

  const { image, title, text1, text2, button, wave } = data[value];

  return (
    <section id="how">
      <div className="container">
        <h2 className="title">How it works</h2>
        <div className="section-controls">
          {data.map((item, index) => {
            return (
              <div className="step" key={item.id}>
                <button
                  onClick={() => setValue(index)}
                  className={`step-btn ${index === value && "active-btn"}`}
                >
                  <h2>{item.id}</h2>
                </button>
              </div>
            );
          })}
        </div>

        <div className="slides">
          <Step
            image={image}
            heading={title}
            text1={text1}
            text2={text2}
            button={button}
            wave={wave}
          />
        </div>
        <div className="slides-mobile">
          {data.map((step, index) => {
            return (
              <Step
                key={step.id}
                id={step.id}
                image={step.image}
                heading={step.title}
                text1={step.text1}
                text2={step.text2}
                button={step.button}
                wave={step.wave}
              />
            );
          })}
        </div>
      </div>
      <img src={wave} className="full-wave" alt="wave graphic" />
    </section>
  );
};

export default How;
