import React from "react";
import Slider from "react-slick";
import image1 from "../img/carniceriafoto.jpg";
import image2 from "../img/carniceriafoto2.jpg";
import image3 from "../img/carniceriafoto3.jpg";
import image4 from "../img/carniceriafoto4.jpg";
import image5 from "../img/carniceriafoto5.jpg";
import image6 from "../img/carniceriafoto6.jpg";
import image7 from "../img/carniceriafoto7.jpg";
import image8 from "../img/carniceriafoto8.jpg";

function MultipleItems() {
  const images = [
   image1,image2,image3,image4,image5,image6,image7,image8
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index}>
            <img style={{width:"300px", height:"auto"}} src={image} alt={`Image ${index + 1}`} />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default MultipleItems;
