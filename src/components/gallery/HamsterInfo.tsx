import React from 'react'
import './Gallery.css';
import {useState} from 'react'

const HamsterInfo = () => {
	const[isVisibleHamsterInfo, setIsVisibleHamsterInfo] = useState(false)

	let maybeHamsterInfo = null
	if ( isVisibleHamsterInfo ) {
		maybeHamsterInfo = (<div><p>Hamster Bild</p>
		<h2>Hamster Namn</h2></div>)
	}

	const toggleVisibility = () => {
		setIsVisibleHamsterInfo( !isVisibleHamsterInfo )
	}

	return (
		<div className="hamstercard">
	<div>
		<button onClick={toggleVisibility}>{isVisibleHamsterInfo ? 'Visa mindre info' : 'Visa mer info'}</button>
	</div>
	<div>
		{maybeHamsterInfo}
		</div>
	</div>
	)
}

export default HamsterInfo;