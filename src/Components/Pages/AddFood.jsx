import Swal from "sweetalert2";
import Footer from "../Footer/Footer";
const AddFood = () => {
  const handleAddFood = event => {
    event.preventDefault();

    const form = event.target;
    const name = form.name.value;
    const quantity = form.quantity.value;
    const location = form.location.value;
    const date = form.date.value;
    const notes = form.notes.value;
    const food_photo = form.food_photo.value;
    const available = form.available.value;

    const newProduct = {
      name,

      quantity,
      location,
      date,
      notes,
      food_photo,

      available,
    };
    console.log(newProduct);

    // send data to server
    fetch("https://taiful.vercel.app/food", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newProduct),
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            icon: "success",
            title: "Success",
            text: "Food Added Successfully!",
            confirmButtonText: "Cool",
          });
        }
      });
  };
  return (
    <>
      <div className="bg-gray-200 p-24">
        <h1 className="text-3xl font-extrabold text-center mb-4">Add Food</h1>
        <form onSubmit={handleAddFood}>
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
                  placeholder="Enter food name"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Food Status</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="available"
                  placeholder=" Enter food status"
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
                  placeholder="Enter Notes"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>
          {/* photo url */}
          <div className=" md:flex justify-center items-center">
            <div className="form-control md:w-full">
              <label className="label">
                <span className="label-text">Food Image</span>
              </label>
              <label className="input-group">
                <input
                  type="photo"
                  name="food_photo"
                  placeholder="Enter Photo URL"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>

          <input
            type="submit"
            value="Add Food"
            className="mt-6 bg-[#d804a3] text-white hover:bg-green-600 btn btn-block"
          />
        </form>
      </div>
      <Footer></Footer>
    </>
  );
};

export default AddFood;
