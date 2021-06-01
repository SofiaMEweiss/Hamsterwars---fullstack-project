import React from 'react'
import {useState} from 'react'
import { Hamster } from '../../types/Hamster'
import './HamsterInfo.css';

interface Props {
	hamster: Hamster
}

const HamsterInfo = ({ hamster }: Props) => {
	const[showHamsterInfo, setShowHamsterInfo] = useState(false)

	let maybeHamsterInfo = null

	if ( showHamsterInfo ) {
		maybeHamsterInfo = (
			<div className="hamster-info" >
				<p><span>Age:</span> {hamster.age}</p>
				<p><span>Favorite food:</span> {hamster.favFood}</p>
				<p><span>Loves:</span> {hamster.loves}</p>
				<p><span>Wins:</span> {hamster.wins}</p>
				<p><span>Defeats:</span> {hamster.defeats}</p>
				<p><span>Games:</span> {hamster.games}</p>
			</div>
		)
	}

	const toggleVisibility = () => {
		setShowHamsterInfo( !showHamsterInfo )
	}

	return (
		<div className="hamster-info-container">
				<button onClick={toggleVisibility}>
					{showHamsterInfo ? 'Show less info' : 'Show more info'}
				</button>
				{maybeHamsterInfo}
		</div>
	)
}

export default HamsterInfo;