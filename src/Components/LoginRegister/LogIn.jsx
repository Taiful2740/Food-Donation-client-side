import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import swal from "sweetalert";
import Swal from "sweetalert2";
import { FaGoogle } from "react-icons/fa";
import Footer from "../Footer/Footer";

const LogIn = () => {
  const { signInUser, signInWithGoogle } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogin = e => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);

    signInUser(email, password)
      .then(result => {
        console.log(result.user);
        swal("Good job!", "Login Successfully!", "success");
        if (result.user) {
          navigate(location?.state ? location?.state : "/");
        }
        e.target.reset();
      })
      .catch(error => {
        console.log(error.message);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Invalid Email or Password!",
          footer: '<a href="">Why do I have this issue?</a>',
        });
      });
  };
  const handleGoogle = () => {
    signInWithGoogle()
      .then(result => {
        navigate(location?.state ? location?.state : "/");
        console.log(result.user);
        swal("Good job!", "Login Successfully!", "success");
      })
      .catch(error => {
        console.log(error.message);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Invalid Email or Password!",
          footer: '<a href="">Why do I have this issue?</a>',
        });
      });
  };
  return (
    <>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col ">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
          </div>
          <div className="card flex-shrink-0 w-96 mt-4 max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleLogin}>
              <div className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    placeholder="email"
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
                    placeholder="password"
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
                  <button className="btn bg-[#FF3811] text-white">Login</button>
                </div>
              </div>
            </form>
            <p className="text-center mb-2">
              New here? Please{" "}
              <Link to="/register" className="font-bold text-[#FF3811]">
                Register
              </Link>
            </p>
            <p className="text-lg text-center font-bold">or</p>
            <p className="text-center mb-6 mt-2">
              <button
                onClick={handleGoogle}
                className="btn bg-[#FF3811] text-white"
              >
                <FaGoogle></FaGoogle>
                Login With Google
              </button>
            </p>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default LogIn;
