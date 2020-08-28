import React, { useState } from "react";
import "./slider.scss";
import ImgComp from "./ImgComp";
function Slider() {
  const [x, setX] = useState(0);
  let sliderArray = [
    <ImgComp src="https://images.unsplash.com/photo-1597283889412-e4b50d53f3c7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" />,
    <ImgComp src="https://images.unsplash.com/photo-1593043403085-6a76cd73b212?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" />,
    <ImgComp src="https://images.unsplash.com/photo-1484950763426-56b5bf172dbb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" />,
    <ImgComp src="https://images.unsplash.com/photo-1597283889412-e4b50d53f3c7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" />,
    <ImgComp src="https://images.unsplash.com/photo-1589198360919-1fb67e42bda5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" />,
    <ImgComp src="https://images.unsplash.com/photo-1515419682769-91a8a6bdaf68?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" />,
  ];
  const goLeft = () => {
    x === 0 ? setX(-100 * (sliderArray.length - 1)) : setX(x + 100);
  };
  const goRight = () => {
    x === -100 * (sliderArray.length - 1) ? setX(0) : setX(x - 100);
  };
  return (
    <div className="slider">
      {sliderArray.map((item, index) => {
        return (
          <div
            key="index"
            className="slide"
            style={{ transform: `translateX(${x}%)` }}
          >
            {item}
          </div>
        );
      })}
      <button id="goLeft" onClick={goLeft}>
        Left
      </button>
      <button id="goRight" onClick={goRight}>
        Right
      </button>
    </div>
  );
}

export default Slider;
