import Footer from "../Footer/Footer";
import logo from "../../assets/logo.png";

const ContactUs = () => {
  return (
    <>
      <div className="flex justify-center items-center mt-20 mb-16">
        <div className="card card-compact bg-base-100 shadow-2xl ">
          <figure>
            <div className="flex justify-center ">
              <img src={logo} alt="" />
            </div>
          </figure>
          <div className="card-body">
            <h2 className="card-title  justify-center">
              2404 Redwood Ct, Auburn, WA 98092, USA
            </h2>
            <p className="text-center text-xl">(+1) 207 187 1989</p>
            <p className="text-center text-xl">taifulpersonal@gmail.com</p>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default ContactUs;
