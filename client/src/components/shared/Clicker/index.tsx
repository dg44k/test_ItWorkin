import React, { useContext } from "react";
import ImageHeroFruit from "@assets/hero_fruit.png";
import GameContext from "../Context/GameContext/GameContext";


export const Clicker: React.FC = () => {
  const { handleClick } = useContext(GameContext);

  return (
    <div className="clicker">
      <button className="clicker__button" onClick={handleClick}>
        <img src={ImageHeroFruit} alt="fruit" className="clicker__image-hero" />
      </button>
    </div>
  );
};
