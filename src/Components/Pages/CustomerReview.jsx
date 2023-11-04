const CustomerReview = () => {
  return (
    <div className="max-w-6xl mx-auto">
      <h1 className=" text-4xl font-medium text-center mt-20" id="welcome">
        Our Customers Say
      </h1>

      <div className="flex justify-center mt-5 mb-14">
        <img src="https://i.ibb.co/2t3xwdf/border-vector.png" alt="" />
      </div>
      <section className="my-10">
        <div className="card card-side flex flex-col bg-base-100 shadow-xl my-10 md:flex-row lg:flex-row ">
          <figure>
            <img
              className="ml-10"
              src="https://demo.zozothemes.com/wedding/wp-content/uploads/sites/7/2017/09/testim1-300x300.jpg"
              alt="Movie"
            />
          </figure>
          <div className="card-body">
            <p>
              Adidas is a leading athletic brand known for its stylish and
              durable products. Their sneakers and sportswear are comfortable
              and high-quality, making them worth the investment. While their
              prices can be on the higher side, the longevity and performance of
              their products make them a top choice for athletes and fashion
              enthusiasts alike.
            </p>
            <h2 className="text-3xl text-center">Catherine Teresa</h2>
          </div>
        </div>
        <div className="card card-side flex flex-col bg-base-100 shadow-xl my-10 md:flex-row-reverse lg:flex-row-reverse">
          <figure>
            <img
              src="https://demo.zozothemes.com/wedding/wp-content/uploads/sites/7/2017/09/testim3-300x300.jpg"
              alt="Movie"
            />
          </figure>
          <div className="card-body">
            <p>
              Gucci epitomizes luxury, offering exquisite fashion, accessories,
              and fragrances. Their iconic designs and craftsmanship are second
              to none. However, the steep price tags can be prohibitive for
              many. It's a brand for those seeking status and prestige, but
              budget-conscious consumers may opt for more affordable
              alternatives.
            </p>
            <h2 className="text-3xl text-center">Kristen Stewart</h2>
          </div>
        </div>
        <div className="card card-side flex flex-col bg-base-100 shadow-xl my-10 md:flex-row lg:flex-row">
          <figure>
            <img
              className="ml-10"
              src="https://demo.zozothemes.com/wedding/wp-content/uploads/sites/7/2017/09/testim2-300x300.jpg"
              alt="Movie"
            />
          </figure>
          <div className="card-body">
            <p>
              Puma delivers stylish athletic and casual wear. Their products are
              comfortable and affordable, making them accessible to a wide
              audience. While not as premium as some competitors, Puma offers
              excellent value for the price. Whether for sports or fashion, it's
              a solid choice for those seeking quality without breaking the
              bank.
            </p>
            <h2 className="text-3xl text-center">Gabriela Justin</h2>
          </div>
        </div>
        <div className="card card-side flex flex-col bg-base-100 shadow-xl my-10 md:flex-row-reverse lg:flex-row-reverse">
          <figure>
            <img
              src="https://demo.zozothemes.com/wedding/wp-content/uploads/sites/7/2017/09/testim4-300x300.jpg"
              alt="Movie"
            />
          </figure>
          <div className="card-body">
            <p>
              Reebok provides reliable sportswear and footwear. Their products
              are comfortable and reasonably priced, catering to fitness
              enthusiasts and athletes. While lacking the high-end allure of
              some brands, Reebok's commitment to performance and affordability
              makes it a smart choice for those prioritizing functionality and
              value in their athletic gear.
            </p>
            <h2 className="text-3xl text-center">Stuart Broad</h2>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CustomerReview;
