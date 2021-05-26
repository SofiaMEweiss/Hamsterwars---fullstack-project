import React from 'react'
import './Gallery.css';
import HamsterCard from './HamsterCard';
import HamsterInfo from './HamsterInfo';

const Gallery = () => {
	return (
<main className="gallery-container">
	<h1>Välkommen till galleriet</h1>
	<HamsterCard />
	<hr />
	<HamsterInfo />
	</main>
	)
}

export default Gallery;