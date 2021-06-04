import React from 'react'
import { useEffect, useState } from 'react';
import { Hamster } from '../../types/Hamster'
import BattleHeader from './BattleHeader';
import './Battle.css';

const Battle = () => {

	const [randomHamster, setRandomHamster] = useState<null | Hamster>(null)
	const [randomHamster2, setRandomHamster2] = useState<null | Hamster>(null)
	const[allInfoIsVisible, setAllInfoIsVisible] = useState(false)
	const[winnerLeft, setWinnerLeft] = useState(false)
	const[winnerRight, setWinnerRight] = useState(false)
	
	useEffect(() => {
		async function getRandomHamster(random:(data:Hamster)=>void) {
			const response = await fetch('/hamsters/random', {method: 'GET'})
			const data: Hamster = await response.json()
			random(data)
		}
		getRandomHamster(setRandomHamster);
		getRandomHamster(setRandomHamster2);	
	}, [])

	
	const nextBattle = () => {
		setAllInfoIsVisible(false)
		setWinnerLeft(false)
		setWinnerRight(false)

		async function getRandomHamster(random:(data:Hamster)=>void) {
			const response = await fetch('/hamsters/random', {method: 'GET'})
			const data: Hamster = await response.json()
			random(data)
		}
		getRandomHamster(setRandomHamster);
		getRandomHamster(setRandomHamster2);
	};

	async function putWinnerHamster(winner: Hamster) {
		const winnerUpdate = {
			'wins': winner.wins + 1,
			'games': winner.games + 1
		}
	
		await fetch("/hamsters/" + winner.id, {
			method: 'PUT',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(winnerUpdate)
		})	
	}

	async function putLoserHamster(loser: Hamster) {
		const loserUpdate = {
			'defeats': loser.defeats + 1,
			'games': loser.games + 1
		}
		
		await fetch("/hamsters/" + loser.id, {
			method: 'PUT',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(loserUpdate)
		})	
	}

	async function postMatchLeft() {
		if (!randomHamster || !randomHamster2) return
		const newMatch = {
			'winnerId': randomHamster.id,
			'loserId': randomHamster2.id
		}
	
		await fetch('/matches', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(newMatch)
		})	
	}

	async function postMatchRight() {
		if (!randomHamster || !randomHamster2) return
		const newMatch = {
			'winnerId': randomHamster2.id,
			'loserId': randomHamster.id
		}
	
		await fetch('/matches', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(newMatch)
		})	
	}

		const randomHamsterLeft = () => {
			if (!randomHamster || !randomHamster2) return
			setAllInfoIsVisible( true )
			setWinnerRight ( true )
			let winner = { ...randomHamster, wins: randomHamster.wins +1, games: randomHamster.games +1 }
			let loser = { ...randomHamster2, defeats:  randomHamster.defeats +1, games: randomHamster.games +1 }
			setRandomHamster(winner)
			setRandomHamster2(loser)
			putWinnerHamster(randomHamster)
			putLoserHamster(randomHamster2)
			postMatchLeft()
		}

		const randomHamsterRight = () => {
			if (!randomHamster2 || !randomHamster) return
			setAllInfoIsVisible( true )
			setWinnerLeft ( true )
			let winner = { ...randomHamster2, wins: randomHamster.wins +1, games: randomHamster.games +1 }
			let loser = { ...randomHamster, defeats:  randomHamster.defeats +1, games: randomHamster.games +1 }
			setRandomHamster2(winner)
			setRandomHamster(loser)
			putWinnerHamster(randomHamster2)
			putLoserHamster(randomHamster)
			postMatchRight()
		}

	return (
		<div className="battle-container">
			<BattleHeader />
			<div className="battle-hamster-container">
				{randomHamster ? 
				<div key={randomHamster.id} onClick={randomHamsterLeft}>
					{(randomHamster.imgName.startsWith('http')) ? 
					<img src={randomHamster.imgName}alt="a hamster" />
					: <img src={`img/${randomHamster.imgName}`}alt="a hamster" />}
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
						{winnerLeft ? <h4>LOSER</h4> : <h4>WINNER</h4>}
						</p>
						<p>
							<span>Wins:</span> {randomHamster.wins}
						</p> 
						<p>
							<span>Defeats:</span> {randomHamster.defeats}
						</p>
					</div>
					: ''}
				</div> 
				: <div className="battle-error-message"><p>Hämtar slumpad hamster från API</p></div>}
				<div className="vs-container"><h3>VS</h3>
					<button onClick={() => nextBattle()}>
						Next Battle
					</button>
				</div>
				{randomHamster2 ? 
				<div key={randomHamster2.id} onClick={randomHamsterRight}>
					{(randomHamster2.imgName.startsWith('http')) ? 
					<img src={randomHamster2.imgName}alt="a hamster" />
					: <img src={`img/${randomHamster2.imgName}`}alt="a hamster" />}
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
							{winnerRight ? <h4>LOSER</h4> : <h4>WINNER</h4>}
						</p>
						<p>
							<span>Wins:</span> {randomHamster2.wins}
						</p> 
						<p>
							<span>Defeats:</span> {randomHamster2.defeats}
						</p>
					</div>
					: ''}
				</div> 
				: <div className="battle-error-message"><p>Hämtar slumpad hamster från API</p></div>}
			</div>	
		</div>
	)
}

export default Battle;