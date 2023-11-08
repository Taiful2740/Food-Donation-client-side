import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateFood = () => {
  const data = useLoaderData();
  const {
    _id,
    food_photo,
    location,
    name,
    quantity,
    notes,
    donar_name,
    donar_photo,
    date,
  } = data;

  const handleUpdateFood = event => {
    event.preventDefault();

    const form = event.target;
    const name = form.name.value;
    const food_photo = form.food_photo.value;
    const notes = form.notes.value;
    const donar_name = form.donar_name.value;
    const donar_photo = form.donar_photo.value;
    const quantity = form.quantity.value;
    const location = form.location.value;
    const date = form.date.value;

    const updatedFood = {
      name,
      food_photo,
      notes,
      donar_name,
      donar_photo,
      quantity,
      location,
      date,
    };
    console.log(updatedFood);

    // send data to server
    fetch(`http://localhost:5000/food/${_id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedFood),
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            icon: "success",
            title: "Success",
            text: "Coffee Updated Successfully!",
            confirmButtonText: "Cool",
          });
        }
      });
  };
  return (
    <div>
      <div className="bg-gray-200 p-24">
        <h1 className="text-3xl font-extrabold text-center mb-4">
          Update Food
        </h1>
        <form onSubmit={handleUpdateFood}>
          {/* form row name */}
          <div className=" md:flex justify-center">
            <div className="form-control mr-4 md:w-1/2">
              <label className="label">
                <span className="label-text">Food Name</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="name"
                  defaultValue={name}
                  placeholder="Enter food name"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Donar Name</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="donar_name"
                  defaultValue={donar_name}
                  placeholder=" Enter donar name"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>
          {/* form row Supplier */}
          <div className=" md:flex justify-center">
            <div className="form-control mr-4 md:w-1/2">
              <label className="label">
                <span className="label-text">Food Quantity</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="quantity"
                  defaultValue={quantity}
                  placeholder="Enter food quantity"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Pickup Location</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="location"
                  defaultValue={location}
                  placeholder="Enter pickup location"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>
          {/* form row Category  */}
          <div className=" md:flex justify-center">
            <div className="form-control mr-4 md:w-1/2">
              <label className="label">
                <span className="label-text">Expired Date</span>
              </label>
              <label className="input-group">
                <input
                  type="date"
                  name="date"
                  defaultValue={date}
                  placeholder="Enter expiration date"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Additional Notes</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="notes"
                  defaultValue={notes}
                  placeholder="Enter Notes"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>
          {/* photo url */}
          <div className=" md:flex justify-center items-center">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Food Image</span>
              </label>
              <label className="input-group">
                <input
                  type="photo"
                  name="food_photo"
                  defaultValue={food_photo}
                  placeholder="Enter Photo URL"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Donar Image </span>
              </label>
              <label className="input-group">
                <input
                  type="photo"
                  name="donar_photo"
                  defaultValue={donar_photo}
                  placeholder="Enter Photo URL"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>

          <input
            type="submit"
            value="Food Update"
            className="mt-6 bg-[#d804a3] text-white hover:bg-green-600 btn btn-block"
          />
        </form>
      </div>
    </div>
  );
};

export default UpdateFood;
