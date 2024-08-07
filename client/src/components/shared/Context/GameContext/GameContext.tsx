import { createContext, useState, useCallback } from "react";
import * as constantsValues from "src/constants/gameValues";
import { GameContextProps, GameContextType, TapIndicator } from "./types";
import useCoins from "src/hooks/useCoins";
import useEnergy from "src/hooks/useEnergy";

const initialState: GameContextType = {
  coin: constantsValues.START_VALUE_COIN,
  energy: {
    valueEnergy: constantsValues.START_VALUE_ENERGY,
    valueEnergyPercent: constantsValues.START_VALUE_PERCENT_ENERGY,
  },
  handleTouch: () => {},
  taps: [],
};
const GameContext = createContext<GameContextType>(initialState);

export const GameProvider = ({ children }: GameContextProps) => {
  const [coin, setCoin] = useCoins();
  const [energy, setEnergy] = useEnergy();
  const [taps, setTaps] = useState<TapIndicator[]>([]);

  const handleTouch = useCallback(
    (event: React.TouchEvent<HTMLButtonElement>) => {
      const lengthMultiTap = event.touches.length;

      if (energy.valueEnergy > 0) {
        setCoin((prevCoins: number) => prevCoins + lengthMultiTap);
        setEnergy((prevEnergy) => {
          const newValueEnergy = Math.max(prevEnergy.valueEnergy - lengthMultiTap, 0);
          const newValueEnergyPercent = Math.floor(
            (newValueEnergy * 100) / constantsValues.START_VALUE_ENERGY
          );

          return {
            valueEnergy: newValueEnergy,
            valueEnergyPercent: newValueEnergyPercent,
          };
        });

        const rect = event.currentTarget.getBoundingClientRect();

        const newTap = {
          id: Date.now(),
          x: event.touches[0].clientX - rect.left,
          y: event.touches[0].clientY - rect.top,
          count: event.touches.length,
        };
        setTaps((prevTaps) => [...prevTaps, newTap]);

        setTimeout(() => {
          setTaps((prevTaps) => prevTaps.filter((tap) => tap.id !== newTap.id));
        }, 2000);
      }
    },
    [energy.valueEnergy, setCoin, setEnergy]
  );

  return (
    <GameContext.Provider
      value={{
        coin,
        energy,
        handleTouch,
        taps,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

export default GameContext;
