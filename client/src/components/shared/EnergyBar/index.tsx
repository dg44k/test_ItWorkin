import ProgressBar from "@components/ui/ProgressBar";
import React from "react";

export const EnergyBar: React.FC = () => {
  return (
    <div className="energy-bar">
			<p className="energy-bar__title">Your energy {95}%</p>
      <ProgressBar value={5000} valuePercent={45} />
    </div>
  );
};
