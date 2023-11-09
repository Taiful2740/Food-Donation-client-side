import Swal from "sweetalert2";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { FaEye, FaPen } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const MyCartData = ({ data, cartProduct, setCartProduct }) => {
  const { user } = useContext(AuthContext);
  const { _id, food_photo, name, notes, available, quantity, date, location } =
    data;
  console.log(data);
  const handleDelete = _id => {
    console.log(_id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(result => {
      if (result.isConfirmed) {
        fetch(`https://taiful.vercel.app/food/${_id}`, {
          method: "DELETE",
        })
          .then(res => res.json())
          .then(data => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire("Deleted", "Your file has been deleted.", "success");
              const remaining = cartProduct.filter(cart => cart._id !== _id);
              setCartProduct(remaining);
            }
          });
      }
    });
  };

  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={food_photo} alt="Img" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Food Name: {name}</h2>
        <div className="flex justify-center items-center">
          <div className="avatar">
            <div className="w-12 rounded-full">
              <img src={user?.photoURL} />
            </div>
          </div>
          <p className="ml-2">Donar Name: {user?.displayName}</p>
        </div>
        <p>{notes}</p>
        <div className="flex">
          <p>Quantity: {quantity}</p>
          <p>Expired Date: {date}</p>
        </div>
        <div>
          <p>Pickup Location: {location}</p>
          <p>Food Status: {available}</p>
        </div>

        <div className="btn-group btn-group-vertical lg:btn-group-horizontal">
          <Link to={`/details/${_id}`}>
            <button className="btn bg-[#D2B48C] text-white text-2xl">
              <FaEye></FaEye>
            </button>
          </Link>
          <Link to={`/updateCoffee/${_id}`}>
            <button className="btn bg-[#3C393B] text-white text-2xl ">
              <FaPen></FaPen>
            </button>
          </Link>

          <button
            onClick={() => handleDelete(_id)}
            className="btn bg-red-600 text-white text-2xl"
          >
            <AiFillDelete></AiFillDelete>
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyCartData;
MyCartData.propTypes = {
  data: PropTypes.node,
  filter: PropTypes.string,
  cartProduct: PropTypes.node,
  setCartProduct: PropTypes.node,
};
