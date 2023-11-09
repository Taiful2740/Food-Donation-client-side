/* eslint-disable react-hooks/exhaustive-deps */
import { useLoaderData } from "react-router-dom";
import { useRef } from "react";
// import { useContext, useState } from "react";
// import { AuthContext } from "../../AuthProvider/AuthProvider";

import { useEffect, useState } from "react";
import GetComponent from "../GetComponent/GetComponent";
import SingleDetails from "../Pages/SingleDetails";

const AvailableFoods = () => {
  const cartData = useLoaderData();
  console.log(cartData);

  const inputRef = useRef();

  const [cartProduct, setCartProduct] = useState(cartData);

  // const { user } = useContext(AuthContext);
  // const email = user?.email;
  const { foodData } = GetComponent();

  const [foodSearch, setFoodSearch] = useState([foodData]);
  console.log(foodSearch);
  useEffect(() => {
    setFoodSearch(foodData);
  }, [foodData]);

  const handleSearch = e => {
    let searchText = e.current.value;
    if (searchText) {
      let filter = foodData.filter(
        foodData => foodData.category.toLowerCase() == searchText.toLowerCase()
      );
      if (filter?.length > 0) {
        setFoodSearch(filter);
        e.current.value = "";
      } else {
        setFoodSearch([]);
        e.current.value;
      }
    }
  };

  return (
    <>
      <div className="relative w-7/12 mt-10  mx-auto mb-10">
        <input
          ref={inputRef}
          className="block p-2.5 w-full z-20 text-sm  bg-gray-50 rounded-lg border text-black border-[#FF444A]"
          placeholder="Search here...."
          type="text"
        />
        <button
          onClick={() => handleSearch(inputRef)}
          type="submit"
          className="absolute cursor-pointer top-0 right-0 p-2.5 px-5 text-sm font-medium h-full text-white  bg-[#FF444A] rounded-r-lg border-[#FF444A]   "
        >
          <h1>Search</h1>
          <span className="sr-only"></span>
        </button>
      </div>

      <div className="max-w-screen-xl mx-auto">
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-5">
          {cartProduct?.map(data => (
            <SingleDetails
              key={data._id}
              cartProduct={cartProduct}
              setCartProduct={setCartProduct}
              data={data}
            ></SingleDetails>
          ))}
        </div>
      </div>
    </>
  );
};

export default AvailableFoods;
