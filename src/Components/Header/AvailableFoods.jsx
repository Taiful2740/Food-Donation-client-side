/* eslint-disable react-hooks/exhaustive-deps */
import { useLoaderData } from "react-router-dom";
// import { useContext, useState } from "react";
// import { AuthContext } from "../../AuthProvider/AuthProvider";
import MyCartData from "../Pages/MyCartData";
import { useState } from "react";

const AvailableFoods = () => {
  const cartData = useLoaderData();
  console.log(cartData);

  const [cartProduct, setCartProduct] = useState(cartData);

  // const { user } = useContext(AuthContext);
  // const email = user?.email;

  return (
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
  );
};

export default AvailableFoods;
