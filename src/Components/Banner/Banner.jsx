const Banner = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: "url(https://i.ibb.co/QbSj0VD/banner.jpg)",
      }}
    >
      <div className=" bg-opacity-00"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="w-full">
          <h1 className="mb-5 text-5xl font-bold text-start shadow-sm">
            GIFT STYLE
          </h1>
          <p className="mb-5 text-start shadow-sm">
            Find fun matching sets and tracksuits in bold colors for everyone on
            your list.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
