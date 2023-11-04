import swal from "sweetalert";
import Swal from "sweetalert2";

import { Link, useLocation, useNavigate } from "react-router-dom";
import Footer from "../Footer/Footer";
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const Register = () => {
  const { createUser, profileUpdate } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const handleRegister = e => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const photo = e.target.photo.value;

    console.log(name, email, password);

    if (password.length < 6) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Password must be least 6 characters!",
        footer: '<a href="">Why do I have this issue?</a>',
      });
      return;
    } else if (
      !/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/.test(password)
    ) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Should be uppercase & special characters!",
        footer: '<a href="">Why do I have this issue?</a>',
      });
      return;
    }

    // create user in firebase
    createUser(email, password)
      .then(result => {
        if (result.user) {
          swal("Good job!", "User Created Successfully!", "success");
          profileUpdate({ displayName: name, photoURL: photo });
        }
        e.target.reset("");
        navigate(location?.state ? location?.state : "/");
      })
      .catch(error => {
        console.log(error.message);
      });
  };
  return (
    <>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col ">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Create an account!</h1>
          </div>
          <div className="card flex-shrink-0 w-96 mt-4 max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleRegister}>
              <div className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Your Name</span>
                  </label>
                  <input
                    type="name"
                    placeholder="Your name"
                    name="name"
                    required
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Photo URL</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Photo URL"
                    name="photo"
                    required
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    placeholder="Email"
                    name="email"
                    required
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    placeholder="Password"
                    name="password"
                    required
                    className="input input-bordered"
                  />
                  <label className="label">
                    <a href="#" className="label-text-alt link link-hover">
                      Forgot password?
                    </a>
                  </label>
                </div>
                <div className="form-control mt-6">
                  <button className="btn bg-[#FF3811] text-white">
                    Register
                  </button>
                </div>
              </div>
            </form>
            <p className="text-center mb-6">
              Already have account? Please{" "}
              <Link to="/login" className="font-bold text-[#FF3811]">
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default Register;
