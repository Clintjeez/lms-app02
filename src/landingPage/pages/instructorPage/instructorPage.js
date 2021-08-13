import Layout from "../../../components/layout/layout";
// import components
import HeroInstructor from "./HeroInstructor/heroInstructor";
import CtaIns from "./ctaIns/ctaIns";
import Why from "./Why become an instructor/why";
import How from "./How it works/how";
import Testimonial from "../homePage/Testimonial/Testimonial";
import What from "./What it takes/what";
import Footer from "../homePage/footer/Footer";
// import styles
import "./instructorPage.scss";

const InstructorPage = () => {
  return (
    <Layout>
      <HeroInstructor />
      <Why />
      <How />
      <section id="testimonial" style={{ paddingBottom: "100px" }}>
        <Testimonial />
      </section>
      <What />
      <CtaIns />
    </Layout>
  );
};

export default InstructorPage;
