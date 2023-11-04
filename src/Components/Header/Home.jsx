import Footer from "../Footer/Footer";
import OurJourney from "../OurJourney/OurJourney";
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

      <Footer></Footer>
    </div>
  );
};

export default Home;
