export interface GameContextProps {
  children: React.ReactNode;
}

export interface TapIndicator {
  id: number;
  x: number;
  y: number;
}


export interface GameContextType {
  coin: number;
  energy: {
    valueEnergy: number;
    valueEnergyPercent: number;
  };
  handleClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  handleTouch: (e: React.TouchEvent<HTMLButtonElement>) => void;
  lengthMultiTap: number;
  taps: TapIndicator[];
}