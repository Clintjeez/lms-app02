import Layout from "../../../components/layout/layout";
import SubPageHero from "./subPageHero/SubPageHero";
import WhyUseZustech from "./whyUseZustech/whyUseZustech";
import CourseContentSection from "./courseContentSection/CourseContentSection"

const CoursesSubPage = () => {
    return (
      <Layout>
          <SubPageHero/>
          <WhyUseZustech/>
          <CourseContentSection/>
      </Layout>
    );
  };
  export default CoursesSubPage;