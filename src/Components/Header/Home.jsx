import Footer from "../Footer/Footer";
import OurJourney from "../OurJourney/OurJourney";
import SuccessStories from "../Pages/SuccessStories";
import Welcome from "../Pages/Welcome";
import WhoWeAre from "../Pages/WhoWeAre";
import Slider from "../Slider";

const Home = () => {
  return (
    <div>
      <Slider></Slider>
      <Welcome />
      <OurJourney />
      <WhoWeAre />
      <SuccessStories />
      <Footer></Footer>
    </div>
  );
};

export default Home;
