import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// src/Carousel.js
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
const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const images = [image1, image5, image6];


  return (
    <div className="carousel">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index}>
            <img src={image} alt={`Slide ${index}`} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
