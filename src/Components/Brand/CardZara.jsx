import { Rating } from "@mui/material";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const CardZara = ({ data }) => {
  const { _id, photo, type, name, brand, price, description, rating } = data;
  return (
    <div>
      <div className="card w-80 bg-base-100 shadow-xl">
        <figure>
          <img src={photo} alt="Img" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <div className="flex justify-between">
            <span>Type: {type}</span>
            <span>Brand: {brand}</span>
          </div>
          <p className="text-xl">Price: ${price}</p>
          <Rating
            name="half-rating-read"
            defaultValue={rating}
            precision={0.5}
            readOnly
          />
          <p>{description}</p>
          <div className="card-actions justify-end">
            <Link to={`/details/${_id}`}>
              <button className="btn btn-success">View Details</button>
            </Link>
            <Link to={`/updateProduct/${_id}`}>
              <button className="btn btn-error">Update</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardZara;
CardZara.propTypes = {
  data: PropTypes.string,
};
