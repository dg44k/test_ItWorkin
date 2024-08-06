export interface GameContextProps {
  children: React.ReactNode;
}

export interface GameContextType {
  coin: number;
  energy: {
    valueEnergy: number;
    valueEnergyPercent: number;
  };
  handleClick: () => void;
}
