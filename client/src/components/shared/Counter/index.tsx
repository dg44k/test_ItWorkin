import React from "react";
import ImageCoin from "@assets/coin.png";
import ImageSpotCounter from "@assets/spot-counter.png";

export const Counter: React.FC = () => {
  return (
    <div className="counter">
      <img src={ImageCoin} alt="coin" className="counter__image-coin" />
      <p className="counter__count-click">0</p>
      <img src={ImageSpotCounter} alt="spot" className="counter__image-spot" />
    </div>
  );
};
