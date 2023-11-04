import { useLoaderData } from "react-router-dom";

import CardNike from "./CardNike";
import NikeSlider from "../Slider/NikeSlider";
import Footer from "../Footer/Footer";

const Nike = () => {
  const newNike = useLoaderData();
  console.log(newNike);

  const filter = newNike.filter(r => r.brand.includes("Nike"));
  console.log(filter);
  return (
    <>
      <NikeSlider></NikeSlider>
      <h1 className="text-4xl text-center font-extrabold my-10">
        Our Products: {filter.length}
      </h1>
      <div className="max-w-6xl mx-auto mb-32">
        <div className="grid ml-14 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filter?.map(data => (
            <CardNike key={data._id} data={data}></CardNike>
          ))}
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default Nike;
