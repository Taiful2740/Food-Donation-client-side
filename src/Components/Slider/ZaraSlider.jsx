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
    url: "https://i.pinimg.com/originals/23/dd/7e/23dd7e13590119d7e975a7662ebb6676.png",
    // caption: "Slide 1",
  },
  {
    url: "https://www.hellonaari.com/wp-content/uploads/2023/06/Zara-1.png",
    // caption: "Slide 2",
  },
  {
    url: "https://image.isu.pub/191024134809-3636c6bd702744ef22ee0d0298b9c820/jpg/page_1.jpg",
    // caption: "Slide 3",
  },
  {
    url: "https://assets.designhill.com/design-blog/wp-content/uploads/2019/01/Zara%E2%80%99s-New-Logo-Indicates-Its-Future-focused-Fashion-Branding.jpg",
    // caption: "Slide 4",
  },
];

const ZaraSlider = () => {
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

export default ZaraSlider;
