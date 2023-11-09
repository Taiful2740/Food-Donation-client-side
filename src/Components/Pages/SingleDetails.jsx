import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const SingleDetails = ({ data }) => {
  const { user } = useContext(AuthContext);
  const { _id, food_photo, name, notes, quantity, date, location, available } =
    data;
  console.log(data);

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
        <p>Pickup Location: {location}</p>
        <p>Food Status: {available}</p>

        <div className="text-center">
          <Link to={`/details/${_id}`}>
            <button className="btn bg-[#FF444A] text-white text-lg">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SingleDetails;
SingleDetails.propTypes = {
  data: PropTypes.node,
  filter: PropTypes.string,
  cartProduct: PropTypes.node,
  setCartProduct: PropTypes.node,
};
