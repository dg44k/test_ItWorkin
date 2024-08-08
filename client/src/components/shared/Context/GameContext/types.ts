export interface GameContextProps {
  children: React.ReactNode;
}

export interface TapIndicator {
  id: number;
  x: number;
  y: number;
  count: number;
}

export interface GameContextType {
  coin: number;
  energy: {
    valueEnergy: number;
    valueEnergyPercent: number;
  };
  handleClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  handleTouch: (e: React.TouchEvent<HTMLButtonElement>) => void;
  taps: TapIndicator[];
}
