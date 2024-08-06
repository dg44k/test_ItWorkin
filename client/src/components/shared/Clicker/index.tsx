import React from 'react';
import ImageHeroFruit from '@assets/hero_fruit.png'

interface ClickerProps {
}

export const Clicker: React.FC<ClickerProps> = () => {
	return (
		<div className='clicker'>
			<button className='clicker__button'>
				<img src={ImageHeroFruit} alt="fruit" className='clicker__image-hero' />
			</button>
		</div>
	);
};
