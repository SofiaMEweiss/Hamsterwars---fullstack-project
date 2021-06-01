import React from 'react'
import './Gallery.css';
import HamsterCard from './HamsterCard';
import GalleryHeader from './GalleryHeader';

const Gallery = () => (
	<main className="gallery-container">
		<GalleryHeader />
		<HamsterCard />
	</main>
)

export default Gallery;