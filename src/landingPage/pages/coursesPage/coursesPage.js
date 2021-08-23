import Layout from "../../../components/layout/layout";
import HeroCourses from "./heroCourses/HeroCourses";
import Searchbar from "./Search/Search";

const CoursesPage = () => {
  return (
    <Layout>
      <HeroCourses />
      <Searchbar />
    </Layout>
  );
};

export default CoursesPage;
