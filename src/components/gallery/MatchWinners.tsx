import { useEffect, useState } from 'react';
import MatchWinnersHeader from './MatchWinnersHeader';
import { Matches } from '../../types/Matches'
import './MatchWinners.css';



const MatchWinners = () => {

	const [losers, setLosers] = useState<null | Matches[]>(null)
	// const [hamsterById, setHamsterById] = useState<null | Hamster>(null)
	
	useEffect(() => {
		getMatchesWinners()
		
	}, [])

	async function getMatchesWinners() {
		const response = await fetch('/matchWinners/cJ5e8oV3fap3cTemWJpm', {method: 'GET'})
		const data: Matches[] = await response.json()
		setLosers(data)	
	}



	return (
	<div className="matchwinners-container">
		<MatchWinnersHeader />
		<div className="defeated-container">
			{losers ? 
			losers.map(l => { 
			
				return (	
			<section className="defeatedcard" key={l.id}>
				<h3>
					loserid: {l.loserId}
				</h3>
			</section>)}) 
			: 'Hämtar matchwinners från API'}
		</div>	

	</div>
)}

export default MatchWinners;