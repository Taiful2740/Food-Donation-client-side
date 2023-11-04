/* eslint-disable react-hooks/exhaustive-deps */
import { useLoaderData } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import MyCartData from "../Pages/MyCartData";

const MyCart = () => {
  const cartData = useLoaderData();

  const [cartProduct, setCartProduct] = useState(cartData);

  const { user } = useContext(AuthContext);
  const email = user?.email;

  useEffect(() => {
    const file = cartData?.filter(card => card.email == email);
    setCartProduct(file);
  }, [cartData]);

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

export default MyCart;
