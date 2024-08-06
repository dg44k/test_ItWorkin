export interface GameContextProps {
  children: React.ReactNode;
}

export interface GameContextType {
  coin: number;
  energy: {
    valueEnergy: number;
    valueEnergyPercent: number;
  };
  handleClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  taps: Array<{x: number, y: number, value: number}>;
}
