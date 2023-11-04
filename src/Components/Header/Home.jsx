import AllBrand from "../AllBrand/AllBrand";
import Footer from "../Footer/Footer";
import CustomerReview from "../Pages/CustomerReview";
import OurServices from "../Pages/OurServices";
import Slider from "../Slider";

const Home = () => {
  return (
    <div>
      <Slider></Slider>
      <AllBrand></AllBrand>
      <OurServices></OurServices>
      <CustomerReview></CustomerReview>
      <Footer></Footer>
    </div>
  );
};

export default Home;
