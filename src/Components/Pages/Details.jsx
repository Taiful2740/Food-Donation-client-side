import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const Details = () => {
  const data = useLoaderData();
  const {
    food_photo,
    location,
    name,
    quantity,
    notes,
    donar_name,
    donar_photo,
    date,
  } = data;

  console.log(data);

  const { user } = useContext(AuthContext);
  const email = user.email;
  const handleAddToCart = () => {
    const newFood = {
      name,
      food_photo,
      notes,
      donar_name,
      donar_photo,
      quantity,
      location,
      date,
      email,
    };
    console.log(newFood);

    // send data to the server
    fetch("https://taiful.vercel.app/carts", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newFood),
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Food Added Successfully",
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
          style={{ backgroundImage: `url(${food_photo})` }}
        >
          <div className="hero-overlay rounded-b-lg h-32 mt-[28rem]  bg-opacity-60"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="mt-[28rem] lg:mr-[50rem]">
              <button
                onClick={handleAddToCart}
                className="px-6 py-4 rounded-md text-white bg-[#FF444A]"
              >
                Request
              </button>
            </div>
          </div>
        </div>
        <h2 className="mb-2 block mt-14 font-sans text-4xl font-semibold leading-[1.3] tracking-normal text-blue-gray-900 antialiased">
          {name}
        </h2>
        <p className="block font-sans text-[15px] font-normal leading-relaxed text-gray-700 antialiased">
          {notes}
        </p>
      </div>
    </div>
  );
};

export default Details;
