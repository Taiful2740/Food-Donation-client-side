import { useLoaderData } from "react-router-dom";
import CardReebok from "./CardReebok";
import ReebokSlider from "../Slider/ReebokSlider";
import Footer from "../Footer/Footer";

const Reebok = () => {
  const newReebok = useLoaderData();
  console.log(newReebok);

  const filter = newReebok.filter(r => r.brand.includes("Reebok"));
  console.log(filter);

  return (
    <>
      <ReebokSlider></ReebokSlider>
      <h1 className="text-4xl text-center font-extrabold my-10">
        Our Products: {filter.length}
      </h1>
      <div className="max-w-6xl mx-auto mb-32">
        <div className="grid ml-16 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* <h1>Reebok: {filter.length}</h1> */}
          {filter?.map(data => (
            <CardReebok key={data._id} data={data}></CardReebok>
          ))}
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default Reebok;
