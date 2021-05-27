import React from 'react'
import './Gallery.css';
import HamsterCard from './HamsterCard';

import AddNewHamster from './AddNewHamster';

const Gallery = () => {
	return (
<main className="gallery-container">
	<h1>Välkommen till galleriet</h1>
	<HamsterCard />
	</main>
	)
}

export default Gallery;