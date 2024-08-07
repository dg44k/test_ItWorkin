import React, { useContext } from "react";
import ImageHeroFruit from "@assets/hero-fruit.svg";
import GameContext from "../Context/GameContext/GameContext";
import "./clicker.scss";

export const Clicker: React.FC = () => {
  const { taps, handleTouch, lengthMultiTap } = useContext(GameContext);
  
  // const [isTouch, setIsTouch] = useState<boolean>(false);

  // Обработка касания
  const handleTouchStart = (e: React.TouchEvent<HTMLButtonElement>) => {
    // setIsTouch(true);
    handleTouch(e);
  };

  // Обработка клика
  // const handleClickInternal = (e: React.MouseEvent<HTMLButtonElement>) => {
  //   if (!isTouch) {
  //     handleClick(e);
  //   }
  // };

  // // Сброс состояния касания при выходе из кнопки
  // const handleTouchEnd = () => {
  //   setIsTouch(false);
  // };

  return (
    <div className="clicker">
      <h1>{lengthMultiTap}</h1>
      <button
        className="clicker__button"
        // onClick={handleClickInternal}
        onTouchStart={handleTouchStart}
        // onTouchEnd={handleTouchEnd}
      >
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
            +{tap.count}
          </div>
        ))}
    </div>
  );
};
