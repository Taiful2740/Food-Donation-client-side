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
    url: "https://bagallery.com/cdn/shop/collections/Gucci-fragrance-perfume-and-cologne-for-men-and-women.webp?v=1667542866&width=2048",
    // caption: "Slide 1",
  },
  {
    url: "https://www.losmeraldo.com/img/cms/gucci-banner--marchio-giugno-2023.jpg",
    // caption: "Slide 2",
  },
  {
    url: "https://assets.vogue.com/photos/63e6426e148b5d0876332d14/master/w_2560%2Cc_limit/00-story.jpg",
    // caption: "Slide 3",
  },
  {
    url: "https://i.ytimg.com/vi/NIebZ5zjP2E/hq720.jpg",
    // caption: "Slide 4",
  },
];

const GucciSlider = () => {
  return (
    <div>
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

export default GucciSlider;
