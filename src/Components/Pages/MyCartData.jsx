import Swal from "sweetalert2";
import PropTypes from "prop-types";

const MyCartData = ({ data, cartProduct, setCartProduct }) => {
  const { _id, food_photo, name, notes, donar_name, donar_photo } = data;
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
        fetch(`https://taiful-taiful-islams-projects.vercel.app/cart/${_id}`, {
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
        <p>{notes}</p>
        <div>
          <div className="avatar">
            <div className="w-24 rounded-full">
              <img src={donar_photo} />
            </div>
          </div>
          <p>Donar Name: {donar_name}</p>
        </div>
        <div className="card-actions justify-center">
          <button onClick={() => handleDelete(_id)} className="btn btn-error">
            Delate
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
