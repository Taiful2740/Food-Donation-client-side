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
    url: "https://m.media-amazon.com/images/S/stores-image-uploads-eu-prod/7/AmazonStores/A21TJRUUN4KGV/88eec4cafa7912ce0f592a9b795d953f.w3000.h600.jpg",
    // caption: "Slide 1",
  },
  {
    url: "https://images-static.nykaa.com/uploads/ab6f9a0f-1719-47b4-bea7-3e0ab8e60377.jpg?tr=w-600,cm-pad_resize",
    // caption: "Slide 2",
  },
  {
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKC_n_v7jv4UzBWW_LTZQXEEUN4FI0nvHCW6qtUV3KiVDptjEFkoxGCa1-8tyV0r0wcA&usqp=CAU",
    // caption: "Slide 3",
  },
  {
    url: "https://ossinework.com/media/brand/brand/reebok-brand-page-banner-1.jpg",
    // caption: "Slide 4",
  },
];

const ReebokSlider = () => {
  return (
    <div className="-mr-14">
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

export default ReebokSlider;
