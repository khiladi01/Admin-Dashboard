import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Sliderone from '../assets/sliderimg/sliderone.jpg'
import Slidertwo from '../assets/sliderimg/slidertwo.jpg'
import Sliderthree from '../assets/sliderimg/sliderthree.jpg'
import Sliderfour from '../assets/sliderimg/sliderfour.jpg'
import Sliderfive from '../assets/sliderimg/sliderfive.jpg'

const Sliderimage = () => {
  const settings = { 
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
  };

  const images = [Sliderone , Slidertwo , Sliderthree , Sliderfour , Sliderfive];

  return (
    <div className="w-[90%] mx-auto">
      <Slider {...settings} >
        {images.map((img, index) => (
          <div key={index} >
            <img src={img} alt={`slide-${index}`} className="w-full h-[400px] object-cover shadow" />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Sliderimage;
