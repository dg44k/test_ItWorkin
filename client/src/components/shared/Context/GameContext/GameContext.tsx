import { createContext, useEffect, useState } from "react";
import {
  START_VALUE_COIN,
  START_VALUE_ENERGY,
  START_VALUE_PERCENT_ENERGY,
} from "src/constants/gameValues";
import { GameContextProps, GameContextType } from "./types";

const initialState: GameContextType = {
  coin: START_VALUE_COIN,
  energy: {
    valueEnergy: START_VALUE_ENERGY,
    valueEnergyPercent: START_VALUE_PERCENT_ENERGY,
  },
  handleClick: () => {},
};

const GameContext = createContext<GameContextType>(initialState);

export const GameProvider = ({ children }: GameContextProps) => {
  const [coin, setCoin] = useState(START_VALUE_COIN);
  const [energy, setEnergy] = useState({
    valueEnergy: START_VALUE_ENERGY,
    valueEnergyPercent: START_VALUE_PERCENT_ENERGY,
  });

  const handleClick = () => {
    if (energy.valueEnergy > 0) {
      setCoin((prevCoins) => prevCoins + 1);

      setEnergy((prevEnergy) => {
        const newValueEnergy = prevEnergy.valueEnergy - 1;
        const newValueEnergyPercent = Math.floor(
          (newValueEnergy * 100) / START_VALUE_ENERGY
        );

        return {
          valueEnergy: newValueEnergy,
          valueEnergyPercent: newValueEnergyPercent,
        };
      });
    }
  };

  useEffect(() => {
    const energyInterval = setInterval(() => {
      if (energy.valueEnergy < START_VALUE_ENERGY) {
        setEnergy((prevEnergy) => {
          const newValueEnergy = prevEnergy.valueEnergy + 1;
          const newValueEnergyPercent = Math.floor(
            (newValueEnergy * 100) / START_VALUE_ENERGY
          );

          return {
            valueEnergy: newValueEnergy,
            valueEnergyPercent: newValueEnergyPercent,
          };
        });
      }
    }, 1000);

    return () => clearInterval(energyInterval);
  }, [energy]);

  useEffect(() => {
    const coinsInterval = setInterval(() => {
      setCoin((prevCoins) => prevCoins + 1);
    }, 1000);

    return () => clearInterval(coinsInterval);
  }, []);

  return (
    <GameContext.Provider
      value={{
        coin,
        energy,
        handleClick,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

export default GameContext;
