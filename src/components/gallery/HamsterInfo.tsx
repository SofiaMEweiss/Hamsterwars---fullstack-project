import React from 'react'
import './Gallery.css';
import {useState} from 'react'
import { Hamster } from '../../types/Hamster'

interface Props {
	hamster: Hamster
}

const HamsterInfo = ({ hamster }: Props) => {
	const[isVisibleHamsterInfo, setIsVisibleHamsterInfo] = useState(false)

	let maybeHamsterInfo = null
	if ( isVisibleHamsterInfo ) {
		maybeHamsterInfo = (
		<div>
	<p>Ålder: {hamster.age}</p>
	<p>Favoritmat:{hamster.favFood}</p>
	<p>Älskar: {hamster.loves}</p>
	<p>Vinster: {hamster.wins}</p>
	<p>Förluster: {hamster.defeats}</p>
		<p>Matcher:{hamster.games}</p>
		</div>)
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