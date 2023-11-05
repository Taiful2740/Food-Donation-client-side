const SuccessStories = () => {
  return (
    <div className="max-w-6xl mx-auto mb-32">
      <h1 className=" text-4xl font-semibold text-center mt-20" id="welcome">
        <span className="text-[#FF3811]">Success</span> Stories
      </h1>

      <div className="flex justify-center mt-5 mb-14">
        <img src="https://i.ibb.co/2t3xwdf/border-vector.png" alt="" />
      </div>
      {/* Story-1 */}
      <div className="hero  bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src="https://static.deinadieu.ch/uploads/2017/07/Rat_Berucksichtigung-NGO.jpg"
            className="w-1/2 rounded-lg shadow-2xl"
          />
          <div className="w-1/2">
            <h1 className="text-5xl font-bold pl-5">BBC News</h1>
            <p className="py-6 pl-5">
              BBC News Hindi covered food in their episode. The video received
              great response and garnered appreciation from all over the world.
              The social entrepreneurship practices are receiving recognition
              from the honorable Prime Minister Narmada Modi himself, in the
              form of launch of the ‘self4society’ portal. This led to people
              from all over the world inquiring about food and wanting to adapt
              it in their respective places.
            </p>
          </div>
        </div>
      </div>
      {/* Story-2 */}
      <div className="hero  bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src="https://i.ibb.co/DrJ4ZtN/img2.jpg"
            className="w-1/2 rounded-lg shadow-2xl"
          />
          <div className="w-1/2">
            <h1 className="text-5xl font-bold pl-5">How to Works</h1>
            <p className="py-6 pl-5">
              Food a social platform that brings together volunteers and donors
              interested in donating food. Aimed at eliminating food wastage,
              food is a unique concept started in Indore. Basic objective of
              food involves – Using excess cooked food to feed the hungry and
              needy Connecting individuals interested in procuring as well as
              donating food at different establishments. With a network of
              individuals and community organizations, food is helping
              distribute food to those who really need it.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessStories;
