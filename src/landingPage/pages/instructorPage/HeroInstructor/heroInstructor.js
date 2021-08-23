import "./heroInstructor.scss";

const HeroInstructor = () => {
  return (
    <section id="heroInstructor">
      <div className="background">
        <div className="container-hero">
          <h1 className="title">Teach</h1>
          <p className="info-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
            nisi nesciunt in perferendis aspernatur ut a molestias aut
            distinctio rem impedit, quo cupiditate soluta quam possimus enim,
            asperiores deleniti rerum!
          </p>
          <div className="buttons">
            <form action="">
              <input
                className="get-started"
                type="submit"
                value="Get started"
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
      </div>
    </section>
  );
};

export default HeroInstructor;
