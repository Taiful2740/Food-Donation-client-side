/* eslint-disable react/no-unescaped-entities */
const Welcome = () => {
  return (
    <div className="max-w-6xl mx-auto mb-32">
      <div className="mx-5 md:mx-10">
        <h1 className=" text-4xl font-semibold text-center mt-20" id="welcome">
          Welcome
        </h1>

        <div className="flex justify-center mt-5 mb-14">
          <img src="https://i.ibb.co/2t3xwdf/border-vector.png" alt="" />
        </div>
        <h2 className="text-4xl font-semibold text-center mt-10">
          An <span className="text-[#FF3811]">initiative</span> that uses
          technology to distribute surplus food among <br />
          needy and <span className="text-[#FF3811]">hungry people.</span>
        </h2>
        <p className="text-center mt-5">
          There are 189.2 million undernourished people in India alone. The aim
          was to not let anyone sleep hungry, but we knew that was far- <br />{" "}
          fetched. So, we decided to at least take one tiny step towards this
          giant issue. 'Food' is our initiative for this cause.
        </p>
        <p className="text-center mt-5">
          It started with one city, and has now been launched in 53 cities, all
          over India.
        </p>
        <p className="text-center mt-5">
          Food is our commitment towards the community to use excess cooked food
          to serve the undeserved people. With this initiative, we <br /> help
          users reduce food wastage and make better and right use of their
          surplus food. From social events to parties organized at home, <br />{" "}
          there are several instances where you have perfectly good food left
          with you in large quantities. However, it becomes useless by the{" "}
          <br /> next day or so. Instead of throwing the food away, we urge
          people to let the food reach the right mouths. Join hands with us
          today! A <br /> little thought on your part can mean the world to
          others!
        </p>
      </div>
    </div>
  );
};

export default Welcome;
