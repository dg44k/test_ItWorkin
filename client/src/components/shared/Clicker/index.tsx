import React, { useContext } from "react";
import ImageHeroFruit from "@assets/hero-fruit.svg";
import GameContext from "../Context/GameContext/GameContext";
import "./clicker.scss";

export const Clicker: React.FC = () => {
  const { handleClick } = useContext(GameContext);

  return (
    <div className="clicker">
      <button className="clicker__button" onClick={handleClick}>
        <ImageHeroFruit />
      </button>
    </div>
  );
};
