import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const spanStyle = {};

const divStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundSize: "cover",
  height: "500px",
};
const slideImages = [
  {
    url: "https://i.ibb.co/YWYywPF/img-1.jpg",
    // caption: "Slide 2",
  },
  {
    url: "https://i.ibb.co/DwWvcMz/img-2.jpg",
    // caption: "Slide 2",
  },
  {
    url: "https://i.ibb.co/59CRv4y/img-3.jpg",
    // caption: "Slide 3",
  },
  {
    url: "https://i.ibb.co/RzHx6y2/img-8.jpg",
    // caption: "Slide 4",
  },
  {
    url: "https://i.ibb.co/h7rGSSp/img-9.jpg",
    // caption: "Slide 5",
  },
  {
    url: "https://i.ibb.co/4RjcPf7/img-11.jpg",
    // caption: "Slide 6",
  },
];

const Slider = () => {
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

export default Slider;
