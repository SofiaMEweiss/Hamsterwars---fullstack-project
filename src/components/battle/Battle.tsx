import React from 'react'
import { useEffect, useState } from 'react';
import { Hamster } from '../../types/Hamster'
import BattleHeader from './BattleHeader';
import './Battle.css';

const Battle = () => {

	const [randomHamster, setRandomHamster] = useState<null | Hamster>(null)
	const [randomHamster2, setRandomHamster2] = useState<null | Hamster>(null)
	// const [winner, setWinner] = useState<null | Hamster>(null)
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

	//UPPDATERING VINNANDE HAMSTERN
	async function putWinnerHamster(winner: Hamster) {
		const winnerUpdate = {
			'wins': winner.wins + 1,
			'games': winner.games + 1
		}
	
		const response = await fetch("/hamsters/" + winner.id, {
			method: 'PUT',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(winnerUpdate)
		})	
	}

	//UPPDATERING FÖRLORANDE HAMSTERN
	async function putLoserHamster(loser: Hamster) {
	
		const loserUpdate = {
			'defeats': loser.defeats + 1,
			'games': loser.games + 1
		}
		
		const response = await fetch("/hamsters/" + loser.id, {
			method: 'PUT',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(loserUpdate)
		})	
	}

		//Steg 1 - visa wins & defeat
		//Steg 2 - anropa update-funktion för winner som uppdatera wins & defeats
		//Steg 2b - uppdatera frontenden med uppdateringen av wins/defeats
		//Steg 3 - Skapa likadan funktion fast för loser
		//Steg 4 - Byt plats. Så wins och defeats uppdateras först och sen visas
		//Steg 5 - Posta ny match.
		const randomHamsterLeft = () => {
			if (!randomHamster || !randomHamster2) return
			setAllInfoIsVisible( true )
			let winner = { ...randomHamster, wins: randomHamster.wins +1, games: randomHamster.games +1 }
			let loser = { ...randomHamster2, defeats:  randomHamster.defeats +1, games: randomHamster.games +1 }
			setRandomHamster(winner)
			setRandomHamster2(loser)
			putWinnerHamster(randomHamster)
			putLoserHamster(randomHamster2)
		}

		const randomHamsterRight = () => {
			if (!randomHamster2 || !randomHamster) return
			setAllInfoIsVisible( true )
			let winner = { ...randomHamster2, wins: randomHamster.wins +1, games: randomHamster.games +1 }
			let loser = { ...randomHamster, defeats:  randomHamster.defeats +1, games: randomHamster.games +1 }
			setRandomHamster2(winner)
			setRandomHamster(loser)
			putWinnerHamster(randomHamster2)
			putLoserHamster(randomHamster)
			
			console.log(winner, loser);
		}

	return (
		<div className="battle-container">
			<BattleHeader />
			<div className="battle-hamster-container">
				{randomHamster ? 
				<div key={randomHamster.id} onClick={randomHamsterLeft}>
					{(randomHamster.imgName.startsWith('http')) ? 
					<img src={randomHamster.imgName}alt="Image of a hamster" />
					: <img src={`img/${randomHamster.imgName}`}alt="Image of a hamster" />}
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
						Skip Battle
					</button>
				</div>
				{randomHamster2 ? 
				<div key={randomHamster2.id} onClick={randomHamsterRight}>
					{(randomHamster2.imgName.startsWith('http')) ? 
					<img src={randomHamster2.imgName}alt="Image of a hamster" />
					: <img src={`img/${randomHamster2.imgName}`}alt="Image of a hamster" />}
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