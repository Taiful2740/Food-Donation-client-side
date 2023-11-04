import { useLoaderData } from "react-router-dom";
import CardAdidas from "./CardAdidas";
import AdidasSlider from "../Slider/AdidasSlider";
import Footer from "../Footer/Footer";

const Adidas = () => {
  const newAdidas = useLoaderData();
  console.log(newAdidas);

  const filter = newAdidas.filter(r => r.brand.includes("Adidas"));
  console.log(filter);
  return (
    <>
      <AdidasSlider></AdidasSlider>
      <h1 className="text-4xl text-center font-extrabold my-10">
        Our Products: {filter.length}
      </h1>
      <div className="max-w-6xl mx-auto mb-32">
        <div className="grid ml-16 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filter?.map(data => (
            <CardAdidas key={data._id} data={data}></CardAdidas>
          ))}
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default Adidas;
