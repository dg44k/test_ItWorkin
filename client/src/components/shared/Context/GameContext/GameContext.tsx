import { createContext, useEffect, useState, useCallback } from "react";
import {
  START_VALUE_COIN,
  START_VALUE_ENERGY,
  START_VALUE_PERCENT_ENERGY,
} from "src/constants/gameValues";
import { GameContextProps, GameContextType, TapIndicator } from "./types";

const initialState: GameContextType = {
  coin: START_VALUE_COIN,
  energy: {
    valueEnergy: START_VALUE_ENERGY,
    valueEnergyPercent: START_VALUE_PERCENT_ENERGY,
  },
  handleTouch: () => {},
  handleClick: () => {},
  lengthMultiTap: 1,
  taps: [],
};

const GameContext = createContext<GameContextType>(initialState);

export const GameProvider = ({ children }: GameContextProps) => {
  const [coin, setCoin] = useState(initialState.coin);
  const [energy, setEnergy] = useState(initialState.energy);
  const [taps, setTaps] = useState<TapIndicator[]>([]);
  const [lengthMultiTap, setLengthMultiTap] = useState(
    initialState.lengthMultiTap
  );
  const handleClick = () => {}
  // const handleTouch = (e: React.TouchEvent<HTMLButtonElement>) => {
  //   setLengthMultiTap(e.touches.length);
  //   const rect = e.currentTarget.getBoundingClientRect();
  //   const newTap = {
  //     id: Date.now() + Math.random(),
  //     x: e.touches[1].clientX - rect.left,
  //     y: e.touches[1].clientY - rect.top,
  //     count: e.touches.length,
  //   };
  //   setTaps([...taps, newTap]);
  // };

  const handleTouch = useCallback(
    (event: React.TouchEvent<HTMLButtonElement>) => {
      setLengthMultiTap(event.touches.length);
      if (energy.valueEnergy > 0) {
        setCoin((prevCoins) => prevCoins + lengthMultiTap);
        setEnergy((prevEnergy) => {
          const newValueEnergy = prevEnergy.valueEnergy - lengthMultiTap;
          const newValueEnergyPercent = Math.floor(
            (newValueEnergy * 100) / START_VALUE_ENERGY
          );

          return {
            valueEnergy: newValueEnergy,
            valueEnergyPercent: newValueEnergyPercent,
          };
        });

        const rect = event.currentTarget.getBoundingClientRect();
        const newTap = {
          id: Date.now() + Math.random(),
          x: event.touches[1].clientX - rect.left,
          y: event.touches[1].clientY - rect.top,
          count: event.touches.length,
        };
        setTaps((prevTaps) => [...prevTaps, newTap]);

        setTimeout(() => {
          setTaps((prevTaps) => prevTaps.filter((tap) => tap.id !== newTap.id));
        }, 2000);
      }
    },
    [energy.valueEnergy, lengthMultiTap]
  );

  useEffect(() => {
    const energyInterval = setInterval(() => {
      setEnergy((prevEnergy) => {
        if (prevEnergy.valueEnergy < START_VALUE_ENERGY) {
          const newValueEnergy = prevEnergy.valueEnergy + 1;
          const newValueEnergyPercent = Math.floor(
            (newValueEnergy * 100) / START_VALUE_ENERGY
          );

          return {
            valueEnergy: newValueEnergy,
            valueEnergyPercent: newValueEnergyPercent,
          };
        }
        return prevEnergy;
      });
    }, 1000);

    return () => clearInterval(energyInterval);
  }, []);

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
        handleTouch,
        lengthMultiTap,
        taps,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

export default GameContext;
