import React from 'react'
import './Gallery.css';
import { useEffect } from 'react';
import { useState } from 'react';
import HamsterInfo from './HamsterInfo';


const HamsterCard = () => {
	const [hamsters, setHamsters] = useState<null | any[]>(null)
	//Ändra any, funkar så länge, skapa inteface
	useEffect(() => {
		async function get() {
	const response = await fetch('/hamsters', {method: 'GET'})
	const data: string[] = await response.json()
	setHamsters(data)
	//OBS! Bättre att hämta data i APP-komponenten, eftersom den alltid är MOUNTED.

}
get()	
	}, [])


	
	return (
		<div className="hamster-container">
			
		{hamsters ? hamsters.map(hamster =>(	
			<div className="hamstercard" key={hamster.id}>
				<img src={`img/${hamster.imgName}`}alt="hamster" />
				<h2>{hamster.name}</h2><br/>
				<HamsterInfo />
			</div>
			)) : 'Hämtar hamstrar från API'}
			</div>
			
	)
}

export default HamsterCard;