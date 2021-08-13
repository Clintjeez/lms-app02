import Layout from "../../../components/layout/layout";

import Testimonial from "./Testimonial/Testimonial";
import Hero from "./Hero/hero";
import WhyZus from "./whyzus/WhyZus";
import Cta from "./cta/Cta";
import FeaturedCourses from "./courseCarousel/courseCarousel";
import Careers from "./careers/Careers";
import CourseCategories from "./courseCategories/courseCategories";

const HomePage = () => {
  return (
    <Layout>
      <Hero />
      <WhyZus />
      <FeaturedCourses />
      <CourseCategories />
      <section
        id="testimonial"
        style={{ background: "#F8F8F8", paddingBottom: "100px" }}
      >
        <Testimonial />
      </section>
      <Careers />
      <Cta />
    </Layout>
  );
};

export default HomePage;
