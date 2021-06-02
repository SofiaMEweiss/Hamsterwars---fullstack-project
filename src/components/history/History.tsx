import HistoryHeader from './HistoryHeader';
import { useEffect, useState } from 'react';
import { Matches } from '../../types/Matches'
import { Hamster } from '../../types/Hamster'
import './History.css';

const History = () => {

	const [matches, setMatches] = useState<null | Matches[]>(null)
	const [hamsterById, setHamsterById] = useState<null | Hamster>(null)
	
	useEffect(() => {
		getMatches()
		// getHamsterById()	
	}, [])

	async function getMatches() {
		const response = await fetch('/matches', {method: 'GET'})
		const data: Matches[] = await response.json()
		setMatches(data)	
	}

	async function removeMatch(id:string) {
		await fetch("/matches/" + id, { method: 'DELETE' })
		getMatches()
	}

	// async function getHamsterById(winnerId:string) {
	// 	await fetch("/hamsters/" + winnerId, { method: 'GET' })
	// 	// const dataHamsterById: Hamster = await response.json()
	// 	// setHamsterById(dataHamsterById)
	// }


	// async function getHamsters() {
	// 	const response = await fetch('/hamsters', {method: 'GET'})
	// 	const data: Hamster[] = await response.json()
	// 	setHamsters(data)	
	// }

	//Steg 1 - hämta alla matcher CHECK!
	//Steg 2 - Hämta hamsterid med hjälp av id från winnerid från match
	//Steg 3 - hämta hamster på id
	//Steg 4 - Visa upp hamster med

	return (
	<div className="history-container">
		<HistoryHeader />
		<div className="matches-container">
			{matches ? 
			matches.map(m => { 
				// const winner = //todo hitta vinner hamster från hamster array
				// const loser = //todo hitta loser hamster från hamster array

				return (	
			<section className="historycard" key={m.id}>
				<img className="delete-history" onClick={() => removeMatch(m.id)} src="./img/remove.svg" alt="Image of a delete cross"/>
				<h3>
					winnerid: {m.winnerId}
					{/* winner.id */}
				</h3>
				<h3>
					loserid: {m.loserId}
				</h3>
			</section>)}) 
			: 'Hämtar matcher från API'}
		</div>	

	</div>
)
	}

export default History;
