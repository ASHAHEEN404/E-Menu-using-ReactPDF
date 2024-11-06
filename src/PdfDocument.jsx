import img1 from "../public/1.png";
import img2 from "../public/2.png";
import img3 from "../public/3.png";
import img4 from "../public/4.png";
import img5 from "../public/5.png";
import img6 from "../public/6.png";
import img7 from "../public/7.png";
import img8 from "../public/8.png";
import img9 from "../public/9.png";
import img10 from "../public/10.png";
import img11 from "../public/11.png";
import img12 from "../public/12.png";
import img13 from "../public/13.png";
import img14 from "../public/14.png";
import img15 from "../public/15.png";
import img16 from "../public/16.png";

const images = [
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  img9,
  img10,
  img11,
  img12,
  img13,
  img14,
  img15,
  img16,
];

const Quixote = () => {
  return (
    <div className="pdf-container">
      {images.map((image, index) => (
        <div className="pdf-page" key={index}>
          <img src={image} alt={`Page ${index + 1}`} className="pdf-image" />
        </div>
      ))}
    </div>
  );
};

export default Quixote;
