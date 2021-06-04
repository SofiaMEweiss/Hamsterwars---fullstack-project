import React from 'react'
import {useState} from 'react'
// import {useEffect} from 'react'
import { Hamster } from '../../types/Hamster'
import { Matches } from '../../types/Matches'
import './HamsterInfo.css';

interface Props {
	hamster: Hamster
}

const HamsterInfo = ({ hamster }: Props) => {
	const[showHamsterInfo, setShowHamsterInfo] = useState(false)
	const [losers, setLosers] = useState<null | Matches[]>(null)
	const [localHamsters, setLocalHamsters] = useState<null | Hamster[]>(null)

	async function getLocalHamsters() {
		const response = await fetch('/hamsters', {method: 'GET'})
		const data: Hamster[] = await response.json()
		setLocalHamsters(data)
		// console.log(data);
		// console.log(localHamsters)
		
	}

	function showData(){
		if(localHamsters&&losers){
		return (
		<div className="hamster-info">
		{losers? losers.map(loser=> {
		if(!localHamsters) return'No hamster'
		 
		let matching=localHamsters.find(({id}) =>id===loser.loserId)
		 
		if(!matching) return'Besegrad hamster finns ej längre'
		// console.log('Vinnande hamster i en match', matching)
		return<div key={matching.id}>
		{/* {matching.name} */}

		{(matching.imgName.startsWith('http')) ? 
				<img className="hamstercard-img" src={matching.imgName} alt="a hamster" />
				: <img className="hamstercard-img" src={`img/${matching.imgName}`} alt="a hamster" />}
		{/* {match.loserId} */}
		 </div>
		 })
		:'Hämtar'}
		 </div>
		 )
		 }
		 }
		 
		const show=showData()

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
				<div onClick={()=> getMatchesWinners(hamster.id)}><p className="matchwinners-link">Klicka för att se besegrade</p></div>
				<div>{show}</div>

				{/* {localHamsters.filter} */}
				{/* {losers ?  
				losers.map(l =>(	
					<section key={l.id}>
						<h5>
						{l.loserId}
						</h5>
				</section>))
				: null
				}  */}
				
			</div>
		)
	}

	const toggleVisibility = () => {
		setShowHamsterInfo( !showHamsterInfo )
	}

	async function getMatchesWinners(id:string) {
		const response = await fetch('/matchWinners/' + id, {method: 'GET'})
		if(response.ok){
		const data = await response.json();
		setLosers(data);
		getLocalHamsters() 
		// console.log(data);
		// if (localHamsters) {
		// localHamsters()
		// } 
		}
		else {
		setLosers([]);
		}
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

