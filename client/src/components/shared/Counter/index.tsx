import React, { useContext } from "react";
import ImageCoin from "@assets/coin.png";
import ImageSpotCounter from "@assets/spot-counter.png";
import GameContext from "../Context/GameContext/GameContext";

export const Counter: React.FC = () => {
  const { coin } = useContext(GameContext);

  return (
    <div className="counter">
      <img src={ImageCoin} alt="coin" className="counter__image-coin" />
      <p className="counter__count-click">{coin}</p>
      <img src={ImageSpotCounter} alt="spot" className="counter__image-spot" />
    </div>
  );
};
