import { useState, useEffect } from 'react';
import { START_VALUE_ENERGY, START_VALUE_PERCENT_ENERGY } from 'src/constants/gameValues';

const useEnergy = () => {
  const [energy, setEnergy] = useState({
    valueEnergy: START_VALUE_ENERGY,
    valueEnergyPercent: START_VALUE_PERCENT_ENERGY,
  });

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

  return [energy, setEnergy] as const;
};

export default useEnergy;
