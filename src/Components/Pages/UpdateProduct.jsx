import Swal from "sweetalert2";
import Footer from "../Footer/Footer";
import { useLoaderData } from "react-router-dom";

const UpdateProduct = () => {
  const product = useLoaderData();

  const { _id, name, brand, type, price, rating, description, photo } = product;

  const handleUpdateProduct = event => {
    event.preventDefault();

    const form = event.target;
    const name = form.name.value;
    const brand = form.brand.value;
    const type = form.type.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const description = form.description.value;
    const photo = form.photo.value;

    const updatedProduct = {
      name,
      brand,
      type,
      price,
      rating,
      description,
      photo,
    };
    console.log(updatedProduct);

    // send data to server
    fetch(`https://taiful-taiful-islams-projects.vercel.app/product/${_id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedProduct),
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            icon: "success",
            title: "Success",
            text: "Product Updated Successfully!",
            confirmButtonText: "Cool",
          });
        }
      });
  };
  return (
    <>
      <div className="bg-gray-200 p-24">
        <h1 className="text-3xl font-extrabold text-center mb-4">
          Update Product
        </h1>
        <form onSubmit={handleUpdateProduct}>
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
                  defaultValue={name}
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
                  defaultValue={brand}
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
                  defaultValue={type}
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
                  defaultValue={price}
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
                  defaultValue={rating}
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
                  defaultValue={description}
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
                  defaultValue={photo}
                  placeholder="Enter Photo URL"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>
          <input
            type="submit"
            value="Update Product"
            className="mt-6 bg-[#d804a3] text-white hover:bg-green-600 btn btn-block"
          />
        </form>
      </div>
      <Footer></Footer>
    </>
  );
};

export default UpdateProduct;
