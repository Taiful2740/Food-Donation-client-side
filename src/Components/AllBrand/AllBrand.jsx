import { Link } from "react-router-dom";

const AllBrand = () => {
  return (
    <div className="max-w-6xl mx-auto mb-32">
      <h1 className=" text-4xl font-semibold text-center mt-20" id="welcome">
        Our Popular Brand
      </h1>
      <div className="grid ml-7 mr-5 md:grid-cols-2 lg:grid-cols-3 gap-10 ">
        {/* brand-1 */}
        <Link to="/reebok">
          <div className=" card-body h-96 shadow-2xl flex justify-center mt-5 mb-14 ">
            <img src="https://i.ibb.co/m9PDM8s/81.jpg" alt="" />
          </div>
        </Link>
        {/* brand-2 */}
        <Link to="/adidas">
          <div className="card-body h-96 shadow-2xl flex justify-center mt-5 mb-14">
            <img src="https://i.ibb.co/VMMp8Zm/adidas.jpg" alt="" />
          </div>
        </Link>
        {/* brand-3 */}
        <Link to="/puma">
          <div className=" card-body h-96 shadow-2xl flex justify-center mt-5 mb-14">
            <img src="https://i.ibb.co/GvwBFtz/puma.png" alt="" />
          </div>
        </Link>
        {/* brand-4 */}
        <Link to="/nike">
          <div className="card-body h-96 shadow-2xl flex justify-center mt-5 mb-14">
            <img src="https://i.ibb.co/8r6LsNy/nike.png" alt="" />
          </div>
        </Link>
        {/* brand-5 */}
        <Link to="/gucci">
          <div className="card-body h-96 shadow-2xl flex justify-center mt-5 mb-14">
            <img src="https://i.ibb.co/LYhk969/gucci.jpg" alt="" />
          </div>
        </Link>
        {/* brand-6 */}
        <Link to="/zara">
          <div className="card-body h-96 shadow-2xl flex justify-center mt-5 mb-14">
            <img src="https://i.ibb.co/CPGFrVL/zara.png" alt="" />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default AllBrand;
