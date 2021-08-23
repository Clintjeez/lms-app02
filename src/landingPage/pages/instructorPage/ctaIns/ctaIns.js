import "./ctaIns.scss";

const CtaIns = () => {
  return (
    <section id="cta-ins">
      <div className="container">
        <h1 className="title">Need more information</h1>
        <p className="info-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
          aliquid sequi quas autem, officiis quae magnam corrupti porro nemo
          deleniti voluptatibus, ad accusantium culpa? Dicta vitae reprehenderit
          quibusdam odio.
        </p>
        <div className="buttons">
          <form action="">
            <input
              className="faqs"
              type="submit"
              value="Instructor FAQs"
            ></input>
          </form>
          <form action="">
            <input
              className="instructor-handbook"
              type="submit"
              value="Instructor Handbook"
            ></input>
          </form>
        </div>
      </div>
    </section>
  );
};

export default CtaIns;
