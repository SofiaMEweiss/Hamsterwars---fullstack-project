import React from 'react'
import { useEffect, useState } from 'react';
// import { useState } from 'react';
import { Hamster } from '../../types/Hamster'
import './Battle.css';

const Battle = () => {
		const [randomHamster, setRandomHamster] = useState<null | Hamster>(null)
		const [randomHamster2, setRandomHamster2] = useState<null | Hamster>(null)
		const[IsVisibleRandomHamster, setIsVisibleRandomHamster] = useState(false)
		
		useEffect(() => {
			async function getRandomHamster(random:any) {
		const response = await fetch('/hamsters/random', {method: 'GET'})
		const data: Hamster = await response.json()
		random(data)
	//Kolla att id1 != id2
	}

	getRandomHamster(setRandomHamster);
	// console.log(randomHamster ? randomHamster.wins : 'no hamster');
	
	getRandomHamster(setRandomHamster2);	
		}, [])

		const randomHamsterCopy = randomHamster

		const randomHamsterLeft = () => {
			setIsVisibleRandomHamster( true )

			
			// // setRandomHamster (randomHamster.wins ++);
			// setRandomHamster2 (randomHamster2.defeats ++
		}

		const randomHamsterRight = () => {
			setIsVisibleRandomHamster( true )
			//wins +
			//Andra hamstern defeats +
		}

	return (
<main className="battle-container">

{randomHamster ? 
<div key={randomHamster.id} onClick={randomHamsterLeft}>
{(randomHamster.imgName.startsWith('http')) ? <img src={randomHamster.imgName}alt="hamster" />: <img src={`img/${randomHamster.imgName}`}alt="hamster" />}
<p>{randomHamster.name}</p>
<p>{randomHamster.age}</p>
<p>{randomHamster.favFood}</p>
<p>{randomHamster.loves}</p>
{IsVisibleRandomHamster ? <div><p>Wins: {randomHamster.wins}</p> <p>Defeats: {randomHamster.defeats}</p></div>: 'Du får inte veta vinst/förlust förrän du röstat ;)'}
</div> : 'Hämtar random hamster från API'}


{randomHamster2 ? 
<div key={randomHamster2.id} onClick={randomHamsterRight}>
{(randomHamster2.imgName.startsWith('http')) ? <img src={randomHamster2.imgName}alt="hamster" />: <img src={`img/${randomHamster2.imgName}`}alt="hamster" />}
<p>{randomHamster2.name}</p>
<p>{randomHamster2.age}</p>
<p>{randomHamster2.favFood}</p>
<p>{randomHamster2.loves}</p>
{IsVisibleRandomHamster ? <div><p>Wins: {randomHamster2.wins}</p> <p>Defeats: {randomHamster2.defeats}</p></div>: 'Du får inte veta vinst/förlust förrän du röstat ;)'}


</div> : 'Hämtar random hamster från API'}

{/* randomHamster.id === randomHamster2.id 
randomHamster.id != randomHamster2.id  */}


			
	</main>
	)
}

export default Battle;