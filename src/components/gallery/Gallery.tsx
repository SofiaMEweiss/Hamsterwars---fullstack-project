import React from 'react'
import GalleryHeader from './GalleryHeader';
import HamsterCard from './HamsterCard';
import './Gallery.css';

const Gallery = () => (
	<main className="gallery-container">
		<GalleryHeader />
		<HamsterCard />
	</main>
)

export default Gallery;