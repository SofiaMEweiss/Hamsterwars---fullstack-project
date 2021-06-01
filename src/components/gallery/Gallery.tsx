import React from 'react'
import GalleryHeader from './GalleryHeader';
import HamsterCard from './HamsterCard';
import './Gallery.css';

const Gallery = () => (
	<div className="gallery-container">
		<GalleryHeader />
		<HamsterCard />
	</div>
)

export default Gallery;