import React, { useContext, useState } from "react";
import ImageHeroFruit from "@assets/hero-fruit.svg";
import GameContext from "../Context/GameContext/GameContext";
import "./clicker.scss";

export const Clicker: React.FC = () => {
  const { handleClick, taps } = useContext(GameContext);
  const [lengthMultiTap, setLengthMultiTap] = useState(1);

  const handleTouch = (e: React.TouchEvent<HTMLButtonElement>) => {
    setLengthMultiTap(e.changedTouches.length);
  }

  return (
    <div className="clicker">
      <button className="clicker__button" onClick={handleClick} onTouchStart={handleTouch}>
        <ImageHeroFruit />
      </button>
      {taps.length > 0 &&
        taps.map((tap) => (
          <div
            key={tap.id}
            className="clicker__tap-indicator"
            style={{
              left: `${tap.x}px`,
              top: `${tap.y}px`,
              transform: "translate(-50%, -50%)",
              position: "absolute",
            }}
          >
            +{lengthMultiTap}
          </div>
        ))}
    </div>
  );
};
