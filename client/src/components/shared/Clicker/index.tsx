import React, { useContext } from "react";
import ImageHeroFruit from "@assets/hero_fruit.png";
import GameContext from "../Context/GameContext/GameContext";
import './clicker.scss';

export const Clicker: React.FC = () => {
  const { handleClick, taps } = useContext(GameContext);

  return (
    <div className="clicker">
      <button className="clicker__button" onClick={handleClick}>
        <img src={ImageHeroFruit} alt="fruit" className="clicker__image-hero" />
      </button>
      {taps.map((tap, index) => (
        <div
          key={index}
          className="clicker__tap-indicator"
          style={{
            left: `${tap.x}px`,
            top: `${tap.y}px`,
            transform: 'translate(-50%, -50%)'
          }}
        >
          <span>{tap.value}</span>
        </div>
      ))}
    </div>
  );
};
