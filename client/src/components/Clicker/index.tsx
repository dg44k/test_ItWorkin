import React from 'react';
import ImageHeroFruit from '../../assets/hero_fruit.png'
import ImageBigSpot from '../../assets/big_spot.png'

interface ClickerProps {
}

export const Clicker: React.FC<ClickerProps> = () => {
	return (
		<div className='clicker'>
			<button className='clicker__button'>
				<img src={ImageHeroFruit} alt="fruit" />
			</button>
			<img src={ImageBigSpot} alt="spot" className='clicker__big-spot' />
		</div>
	);
};
