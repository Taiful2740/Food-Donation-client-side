/* eslint-disable react/no-unescaped-entities */
const WhoWeAre = () => {
  return (
    <div className="max-w-6xl mx-auto mb-32">
      <h1 className=" text-4xl font-semibold text-center mt-20" id="welcome">
        Who <span className="text-[#FF3811]">We</span> Are
      </h1>

      <div className="flex justify-center mt-5 mb-14">
        <img src="https://i.ibb.co/2t3xwdf/border-vector.png" alt="img" />
      </div>
      <div className="flex justify-center items-center">
        <div className="w-1/2">
          <img
            className="h-72 "
            src="https://www.aahar.org.in/images/chart.png"
            alt="img"
          />
        </div>
        <div className="w-1/2">
          <h3 className="text-right text-xl font-light">THE BEGINNING</h3>
          <h1 className="text-right text-3xl font-semibold my-4">
            Our Approach
          </h1>
          <p className="text-right ml-5">
            Food is a brain child of Indore divisional Commissioner Sanjak
            Durey, ably supported by his son Santana Durey a Tech student at
            FITB and Rakish Jain director of 'INFARCTS Web Solutions'. The
            initiative ropes in hoteliers, caterers, bakeries, sweet shops,
            hostels, malls, individuals & NGO's.Initiative helps
            citizens/people/organization to donate cooked/prepared/ packed food
            to serve to the people in need of food. It works in 3 modes.
          </p>
        </div>
      </div>
      <div className="flex gap-4 mt-10">
        {/* card-1 */}
        <div className="card w-96 bg-base-100 shadow-2xl">
          <figure className="px-10 pt-10">
            <img
              src="https://www.aahar.org.in/images/sandwich.png"
              alt="img"
              className="rounded-xl"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title hover:text-[#FF3811]">Surplus Food</h2>
            <p>
              Any surplus food prepared during functions/ <br /> parties can be
              donated through food app.
            </p>
          </div>
        </div>
        {/* card-2 */}
        <div className="card w-96 bg-base-100 shadow-2xl">
          <figure className="px-10 pt-10">
            <img
              src="https://www.aahar.org.in/images/salad.png"
              alt="img"
              className="rounded-xl"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title hover:text-[#FF3811]">Fresh Food</h2>
            <p>
              Fresh food prepared at select locations can be donated to feed
              hungry people by contributing in cash.
            </p>
          </div>
        </div>
        {/* card-3 */}
        <div className="card w-96 bg-base-100 shadow-2xl">
          <figure className="px-10 pt-10">
            <img
              src="https://www.aahar.org.in/images/groceries.png"
              alt="img"
              className="rounded-xl"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title hover:text-[#FF3811]">Packed Food</h2>
            <p>
              Packed food nearing expiry can be advertised to be sold to
              consumers at discounted price.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhoWeAre;
