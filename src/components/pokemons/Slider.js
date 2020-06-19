import React from "react";
import Swiper from "react-id-swiper";
import "swiper/css/swiper.css";

const Slider = ({ frontImage, backImage }) => {
  const params = {
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  };
  console.log(backImage);
  return (
    <div className="box-pokemon-slider">
      {backImage === null ? (
        <div className="box-pokemon-slider-slide">
          <img
            src={frontImage}
            alt=""
            className="box-pokemon-slider-slide-image"
          />
        </div>
      ) : (
        <Swiper {...params}>
          <div className="box-pokemon-slider-slide">
            <img
              src={frontImage}
              alt=""
              className="box-pokemon-slider-slide-image"
            />
          </div>
          <div className="box-pokemon-slider-slide">
            <img
              src={backImage}
              alt=""
              className="box-pokemon-slider-slide-image"
            />
          </div>
        </Swiper>
      )}
    </div>
  );
};

export default Slider;
