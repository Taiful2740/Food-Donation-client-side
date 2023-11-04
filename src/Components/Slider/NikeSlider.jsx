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
    url: "https://www.sneakerbaas.com/cdn/shop/collections/Brand_banner_NIKE_SB.jpg?v=1612454482",
    // caption: "Slide 1",
  },
  {
    url: "https://c4.wallpaperflare.com/wallpaper/145/267/693/5bd094314b60c-wallpaper-preview.jpg",
    // caption: "Slide 2",
  },
  {
    url: "https://cdnb.artstation.com/p/assets/images/images/044/873/777/large/vishnuvijay-nike-poster-prj.jpg?1641376837",
    // caption: "Slide 3",
  },
  {
    url: "https://i.pinimg.com/originals/fa/45/96/fa4596ad9a9d39901eeb455ed4f74e44.jpg",
    // caption: "Slide 4",
  },
];

const NikeSlider = () => {
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

export default NikeSlider;
