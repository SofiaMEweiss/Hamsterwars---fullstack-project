import React from 'react'
import './Gallery.css';
import HamsterCard from './HamsterCard';
import { Link } from 'react-router-dom';

const Gallery = () => {
	return (
<main className="gallery-container">
	<div className="gallery-header"><h1>So many cuties</h1>
	<Link to="/addnewhamster">
				<button>Add new hamster</button>
			</Link></div>
	<HamsterCard />
	</main>
	)
}

export default Gallery;