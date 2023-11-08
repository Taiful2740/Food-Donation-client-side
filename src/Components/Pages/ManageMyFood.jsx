import { useLoaderData } from "react-router-dom";
import Footer from "../Footer/Footer";
import { useState } from "react";
import MyCartData from "./MyCartData";

const ManageMyFood = () => {
  const cartData = useLoaderData();

  const [cartProduct, setCartProduct] = useState(cartData);

  console.log(cartData);
  return (
    <>
      <div className="max-w-screen-xl mx-auto">
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-5">
          {cartProduct?.map(data => (
            <MyCartData
              key={data._id}
              cartProduct={cartProduct}
              setCartProduct={setCartProduct}
              data={data}
            ></MyCartData>
          ))}
        </div>
      </div>
      {/* <div className="card w-80 bg-base-100 shadow-xl">
        <figure>
          <img src={photo} alt="Img" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <div className="flex justify-between">
            <span>Type: {type}</span>
            <span>Brand: {brand}</span>
          </div>
          <p className="text-xl">Price: ${price}</p>
          <Rating
            name="half-rating-read"
            defaultValue={rating}
            precision={0.5}
            readOnly
          />
          <p>{description}</p>
          <div className="card-actions justify-end">
            <Link to={`/details/${_id}`}>
              <button className="btn btn-success">View Details</button>
            </Link>
            <Link to={`/updateProduct/${_id}`}>
              <button className="btn btn-error">Update</button>
            </Link>
          </div>
        </div>
      </div> */}
      <Footer></Footer>
    </>
  );
};

export default ManageMyFood;
