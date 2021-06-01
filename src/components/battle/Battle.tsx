import React from 'react'
import { useEffect, useState } from 'react';
import { Hamster } from '../../types/Hamster'
import BattleHeader from './BattleHeader';
import './Battle.css';

const Battle = () => {

	const [randomHamster, setRandomHamster] = useState<null | Hamster>(null)
	const [randomHamster2, setRandomHamster2] = useState<null | Hamster>(null)
	const[allInfoIsVisible, setAllInfoIsVisible] = useState(false)
		
	useEffect(() => {
		async function getRandomHamster(random:any) {
		const response = await fetch('/hamsters/random', {method: 'GET'})
		const data: Hamster = await response.json()
		random(data)
		}
		getRandomHamster(setRandomHamster);
		getRandomHamster(setRandomHamster2);	
	}, [])

		const randomHamsterLeft = () => {
			setAllInfoIsVisible( true )
		}

		const randomHamsterRight = () => {
			setAllInfoIsVisible( true )
		}

	return (
		<div className="battle-container">
			<BattleHeader />
			<div className="battle-hamster-container">
				{randomHamster ? 
				<div key={randomHamster.id} onClick={randomHamsterLeft}>
					{(randomHamster.imgName.startsWith('http')) ? 
					<img src={randomHamster.imgName}alt="hamster" />
					: <img src={`img/${randomHamster.imgName}`}alt="hamster" />}
					<h4>
						{ randomHamster.name}
					</h4>
					<p>
						<span>Age:</span> { randomHamster.age}
					</p>
					<p>
						<span>Favorite food:</span>	{ randomHamster.favFood}
					</p>
					<p>
						<span>Loves:</span> { randomHamster.loves}
					</p>
					{allInfoIsVisible ? 
					<div>
						<p>
							<span>Wins:</span> {randomHamster.wins}
						</p> 
						<p>
							<span>Defeats:</span> {randomHamster.defeats}
						</p>
					</div>
					: ''}
				</div> 
				: 'Hämtar random hamster från API'}
				<div className="vs-container"><h3>VS</h3>
					<button onClick={() => window.location.reload()}>
						New Battle
					</button>
				</div>
				{randomHamster2 ? 
				<div key={randomHamster2.id} onClick={randomHamsterRight}>
					{(randomHamster2.imgName.startsWith('http')) ? 
					<img src={randomHamster2.imgName}alt="hamster" />
					: <img src={`img/${randomHamster2.imgName}`}alt="hamster" />}
					<h4>
					{ randomHamster2.name}
					</h4>
					<p>
						<span>Age:</span> { randomHamster2.age}
					</p>
					<p>
						<span>Favorite food:</span>	{ randomHamster2.favFood}
					</p>
					<p>
						<span>Loves:</span> { randomHamster2.loves}
					</p>
					{allInfoIsVisible ?
					<div>
						<p>
							<span>Wins:</span> {randomHamster2.wins}
						</p> 
						<p>
							<span>Defeats:</span> {randomHamster2.defeats}
						</p>
					</div>
					: ''}
				</div> 
				: 'Hämtar random hamster från API'}
			</div>	
		</div>
	)
}

export default Battle;