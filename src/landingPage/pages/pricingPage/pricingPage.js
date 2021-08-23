import Layout from "../../../components/layout/layout";
import Pricing from "./Pricing/pricing";
import Testimonials from "../homePage/Testimonial/Testimonial";
import Footer from "../homePage/footer/Footer";
const PricingPage = () => {
  return (
    <Layout>
      <Pricing />
      <section id="testimonial" style={{ paddingBottom: "100px" }}>
        <Testimonials />
      </section>
    </Layout>
  );
};

export default PricingPage;
