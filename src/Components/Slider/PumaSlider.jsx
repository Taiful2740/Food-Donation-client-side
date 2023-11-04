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
    url: "https://onlinebuyindia.net/wp-content/uploads/2017/06/PumaRunning.jpg",
    // caption: "Slide 1",
  },
  {
    url: "https://s3images.coroflot.com/user_files/individual_files/494449_LngVoXEJTXlVmBD0BVeVbLJwZ.jpg",
    // caption: "Slide 2",
  },
  {
    url: "https://cdnb.artstation.com/p/assets/images/images/047/620/843/large/shaurya-garg-shoe-promo.jpg?1648035064",
    // caption: "Slide 3",
  },
  {
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgt4SO2GrAJTd1sRbkMtaw7ymi7SYmjxsUTUzGAwg4yt1R-lGF6r0JdVvYkOhljTM3rNg&usqp=CAU",
    // caption: "Slide 4",
  },
];

const PumaSlider = () => {
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

export default PumaSlider;
