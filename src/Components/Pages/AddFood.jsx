import Swal from "sweetalert2";
import Footer from "../Footer/Footer";
const AddFood = () => {
  const handleAddProduct = event => {
    event.preventDefault();

    const form = event.target;
    const name = form.name.value;
    const brand = form.brand.value;
    const type = form.type.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const description = form.description.value;
    const photo = form.photo.value;

    const newProduct = {
      name,
      brand,
      type,
      price,
      rating,
      description,
      photo,
    };
    console.log(newProduct);

    // send data to server
    fetch("https://taiful-taiful-islams-projects.vercel.app/product", {
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
            text: "Coffee Added Successfully!",
            confirmButtonText: "Cool",
          });
        }
      });
  };
  return (
    <>
      <div className="bg-gray-200 p-24">
        <h1 className="text-3xl font-extrabold text-center mb-4">
          Add Product
        </h1>
        <form onSubmit={handleAddProduct}>
          {/* form row name */}
          <div className=" md:flex justify-center">
            <div className="form-control mr-4 md:w-1/2">
              <label className="label">
                <span className="label-text">Product Name</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="name"
                  placeholder="Enter product name"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Brand Name</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="brand"
                  placeholder=" Enter brand name"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>
          {/* form row Supplier */}
          <div className=" md:flex justify-center">
            <div className="form-control mr-4 md:w-1/2">
              <label className="label">
                <span className="label-text">Type</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="type"
                  placeholder="Enter product type"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Price</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="price"
                  placeholder="Enter product price"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>
          {/* form row Category  */}
          <div className=" md:flex justify-center">
            <div className="form-control mr-4 md:w-1/2">
              <label className="label">
                <span className="label-text">Rating</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="rating"
                  placeholder="Enter product rating"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Short Description</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="description"
                  placeholder="Enter project description"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>
          {/* photo url */}
          <div className="justify-center">
            <div className="form-control mr-4 md:w-full">
              <label className="label">
                <span className="label-text">Photo </span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="photo"
                  placeholder="Enter Photo URL"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>
          <input
            type="submit"
            value="Add Product"
            className="mt-6 bg-[#d804a3] text-white hover:bg-green-600 btn btn-block"
          />
        </form>
      </div>
      <Footer></Footer>
    </>
  );
};

export default AddFood;
