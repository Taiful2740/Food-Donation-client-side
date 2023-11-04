import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const spanStyle = {};

const divStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundSize: "cover",
  height: "400px",
};
const slideImages = [
  {
    url: "https://cdn.shopify.com/s/files/1/0259/9531/3248/files/adidas_new_arrival_july_23.jpg?v=1689672264",
    // caption: "Slide 1",
  },
  {
    url: "https://cdn.shopify.com/s/files/1/0508/5387/1800/collections/Womens-Hockey-Shoes.jpg?v=1615448473",
    // caption: "Slide 2",
  },
  {
    url: "https://www.hockeydirect.com/cdn/shop/collections/Adidas_Hockey_Shoes.webp?v=1685628775",
    // caption: "Slide 3",
  },
  {
    url: "https://www.hockeydirect.com/cdn/shop/collections/Adidas-_brand_-inner_page_banner.webp?v=1685628986",
    // caption: "Slide 4",
  },
];

const AdidasSlider = () => {
  return (
    <div className="">
      <div className="slide-container">
        <Slide>
          {slideImages.map((slideImage, index) => (
            <div key={index}>
              <div
                style={{
                  ...divStyle,
                  backgroundImage: `url(${slideImage.url})`,
                }}
              >
                <span style={spanStyle}>{slideImage.caption}</span>
              </div>
            </div>
          ))}
        </Slide>
      </div>
    </div>
  );
};

export default AdidasSlider;
