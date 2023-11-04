import { useLoaderData } from "react-router-dom";
import CardPuma from "./CardPuma";
import PumaSlider from "../Slider/PumaSlider";
import Footer from "../Footer/Footer";

const Puma = () => {
  const newPuma = useLoaderData();
  console.log(newPuma);

  const filter = newPuma.filter(r => r.brand.includes("Puma"));
  console.log(filter);
  return (
    <>
      <PumaSlider></PumaSlider>
      <h1 className="text-4xl text-center font-extrabold my-10">
        Our Products: {filter.length}
      </h1>
      <div className="max-w-6xl mx-auto mb-32">
        <div className="grid ml-12 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filter?.map(data => (
            <CardPuma key={data._id} data={data}></CardPuma>
          ))}
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default Puma;
