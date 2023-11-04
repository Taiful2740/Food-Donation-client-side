import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const Details = () => {
  const product = useLoaderData();
  const { photo, type, name, brand, price, description, rating } = product;

  console.log(product);

  const { user } = useContext(AuthContext);
  const email = user.email;
  const handleAddToCart = () => {
    const newProduct = {
      name,
      brand,
      price,
      description,
      rating,
      photo,
      type,
      email,
    };
    console.log(newProduct);

    // send data to the server
    fetch("https://taiful-taiful-islams-projects.vercel.app/cart", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newProduct),
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "product Added Successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });
  };

  return (
    <div>
      <div className="mx-auto max-w-screen-xl px-9 py-12">
        <div
          className="hero rounded-lg h-[36rem]"
          style={{ backgroundImage: `url(${photo})` }}
        >
          <div className="hero-overlay rounded-b-lg h-32 mt-[28rem]  bg-opacity-60"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="mt-[28rem] lg:mr-[50rem]">
              <button
                onClick={handleAddToCart}
                className="px-6 py-4 rounded-md text-white bg-[#FF444A]"
              >
                Add To Cart
              </button>
            </div>
          </div>
        </div>
        <h2 className="mb-2 block mt-14 font-sans text-4xl font-semibold leading-[1.3] tracking-normal text-blue-gray-900 antialiased">
          {name}
        </h2>
        <p className="block font-sans text-[15px] font-normal leading-relaxed text-gray-700 antialiased">
          {description}
        </p>
      </div>
    </div>
  );
};

export default Details;
