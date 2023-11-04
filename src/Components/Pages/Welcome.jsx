import { FaRegLightbulb, FaHeadset } from "react-icons/fa";
import { BsGearWideConnected } from "react-icons/bs";

const OurServices = () => {
  return (
    <div>
      <section className="max-w-6xl mx-auto">
        <div>
          <h1 className=" text-4xl font-medium text-center mt-20" id="welcome">
            Our Services
          </h1>

          <div className="flex justify-center mt-5 mb-14">
            <img src="https://i.ibb.co/2t3xwdf/border-vector.png" alt="" />
          </div>

          <div className="grid mx-auto ml-5 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* card-1  */}
            <div data-aos="fade-right">
              <div
                className="hero h-[380px] w-[350px]"
                style={{
                  backgroundImage:
                    "url(https://i.ibb.co/vYB0xCD/bg-3-dark.jpg)",
                }}
              >
                <div className="hero-overlay bg-opacity-0"></div>
                <div className="hero-content text-center text-neutral-content">
                  <div className="max-w-md">
                    <div className="flex justify-center text-4xl text-[#b378d4] hover:text-white">
                      <FaRegLightbulb></FaRegLightbulb>
                    </div>
                    <h1 className="mb-5 text-5xl " id="welcome">
                      Product Ability
                    </h1>
                    <p className="mb-5">
                      Product Ability refers to a product's effectiveness and
                      features, ensuring it fulfills its intended purpose and
                      meets customer expectations. It's crucial for customer
                      satisfaction and brand success.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* card-2  */}
            <div data-aos="fade-left">
              <div
                className="hero h-[380px] w-[350px]"
                style={{
                  backgroundImage:
                    "url(https://i.ibb.co/zH4dTLY/bg-4-dark.jpg)",
                }}
              >
                <div className="hero-overlay bg-opacity-0"></div>
                <div className="hero-content text-center text-neutral-content">
                  <div className="max-w-md">
                    <div className="flex justify-center text-4xl text-[#b378d4] hover:text-white">
                      <BsGearWideConnected></BsGearWideConnected>
                    </div>
                    <h1 className="mb-5 text-5xl " id="welcome">
                      Product Guaranty
                    </h1>
                    <p className="mb-5">
                      A product guarantee is a promise by a manufacturer or
                      seller to stand behind their product, providing
                      reassurance to buyers that it will perform as expected.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* card-3 */}
            <div data-aos="fade-right">
              <div
                className="hero h-[380px] w-[350px]"
                style={{
                  backgroundImage:
                    "url(https://i.ibb.co/y5FDfS3/bg-5-1-dark.jpg)",
                }}
              >
                <div className="hero-overlay bg-opacity-0"></div>
                <div className="hero-content text-center text-neutral-content">
                  <div className="max-w-md">
                    <div className="flex justify-center text-4xl text-[#b378d4] hover:text-white">
                      <FaHeadset></FaHeadset>
                    </div>
                    <h1 className="mb-5 text-5xl " id="welcome">
                      Customer Support
                    </h1>
                    <p className="mb-5">
                      Customer support is vital for resolving issues, answering
                      queries, and enhancing customer satisfaction. It plays a
                      pivotal role in building brand loyalty and trust.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurServices;
