import { useLoaderData } from "react-router-dom";
import CardZara from "./CardZara";
import ZaraSlider from "../Slider/ZaraSlider";
import { useEffect, useState } from "react";
import Footer from "../Footer/Footer";

const Zara = () => {
  const newZara = useLoaderData();
  const [file, setFile] = useState([]);
  const [info, setInfo] = useState([]);

  useEffect(() => {
    const filter = newZara.filter(e =>
      e.brand.toLowerCase().includes("Zara".toLowerCase())
    );
    if (filter.length > 0) {
      setFile(filter);
    } else {
      setInfo("No Product Found");
    }
  }, []);

  console.log(newZara);

  // const filter = newZara.filter(r => r.brand.includes("Zara"));
  // console.log(filter);
  return (
    <>
      <ZaraSlider></ZaraSlider>
      <h1 className="text-4xl text-center font-extrabold my-10">
        Our Products
      </h1>
      <div className="max-w-6xl mx-auto mb-32">
        {!newZara ? (
          ""
        ) : (
          <p className="text-5xl mt-10 font-semibold text-center">{info}</p>
        )}
        {!info ? (
          ""
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {file?.map(data => (
              <CardZara key={data._id} CardsZara={data}></CardZara>
            ))}
          </div>
        )}

        {/* {filter?.map(data => (
            <CardZara key={data._id} data={data}></CardZara>
          ))} */}
      </div>
      <Footer></Footer>
    </>
  );
};

export default Zara;
