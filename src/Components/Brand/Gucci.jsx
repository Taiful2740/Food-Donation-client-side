import { useLoaderData } from "react-router-dom";

import CardGucci from "./CardGucci";
import GucciSlider from "../Slider/GucciSlider";
import Footer from "../Footer/Footer";

const Gucci = () => {
  const newGucci = useLoaderData();
  console.log(newGucci);

  const filter = newGucci.filter(r => r.brand.includes("Gucci"));
  console.log(filter);
  return (
    <>
      <GucciSlider></GucciSlider>
      <h1 className="text-4xl text-center font-extrabold my-10">
        Our Products: {filter.length}
      </h1>
      <div className="max-w-6xl mx-auto mb-32">
        <div className="grid ml-12 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filter?.map(data => (
            <CardGucci key={data._id} data={data}></CardGucci>
          ))}
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default Gucci;
