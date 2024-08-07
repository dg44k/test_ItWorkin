import { useState, useEffect } from 'react';
import { START_VALUE_COIN } from 'src/constants/gameValues';

const useCoins = () => {
  const [coin, setCoin] = useState(START_VALUE_COIN);

  useEffect(() => {
    const coinsInterval = setInterval(() => {
      setCoin((prevCoins) => prevCoins + 1);
    }, 1000);

    return () => clearInterval(coinsInterval);
  }, []);

  return [coin, setCoin] as const;
};

export default useCoins;
