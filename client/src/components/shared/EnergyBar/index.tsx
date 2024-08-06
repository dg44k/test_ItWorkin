import ProgressBar from "@components/ui/ProgressBar";
import React, { useContext } from "react";
import GameContext from "../Context/GameContext/GameContext";

export const EnergyBar: React.FC = () => {
  const { energy } = useContext(GameContext);

  return (
    <div className="energy-bar">
      <p className="energy-bar__title">Your energy {energy.valueEnergyPercent}%</p>
      <ProgressBar value={energy.valueEnergy} valuePercent={energy.valueEnergyPercent} />
    </div>
  );
};
