import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div>
      <h1 className="text-center text-4xl font-bold mt-10">Sorry!</h1>
      <h2 className="text-center text-2xl font-bold">
        This page is not found.
      </h2>

      <div className="flex justify-center items-center mx-auto w-[650px] ">
        <img src="https://i.ibb.co/nb1qcXZ/3747371.jpg" alt="" />
      </div>
      <div className="flex justify-center mt-3 ">
        <Link to="/">
          <button className="btn bg-black text-white">Go to homepage</button>
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
