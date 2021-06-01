import React from 'react'
import './Gallery.css';
import { useEffect, useState } from 'react';
// import { useState } from 'react';
import HamsterInfo from './HamsterInfo';
import { Hamster } from '../../types/Hamster'


const HamsterCard = () => {
	const [hamsters, setHamsters] = useState<null | Hamster[]>(null)
	//Ändra any, funkar så länge, skapa inteface
	useEffect(() => {

getHamsters()	
	}, [])

	async function getHamsters() {
		const response = await fetch('/hamsters', {method: 'GET'})
		const data: Hamster[] = await response.json()
		setHamsters(data)
		//OBS! Bättre att hämta data i APP-komponenten, eftersom den alltid är MOUNTED.
	
	}

	async function removeHamster(id:string) {
		await fetch("/hamsters/" + id, { method: 'DELETE' })
		window.location.reload()
		// setHamsters (await getHamsters())
	}


	
	return (
		<div className="hamster-container">
			
		{hamsters ? hamsters.map(h =>(	
			<div className="hamstercard" key={h.id}>
				{/* ifsats? */}
				{(h.imgName.startsWith('http')) ? <img src={h.imgName}alt="hamster" />: <img src={`img/${h.imgName}`}alt="hamster" />}
				{ /* <img src={`img/${h.imgName}`}alt="hamster" />
				<img src={h.imgName}alt="hamster" /> */}
				<h2>{h.name}</h2><br/>
					<button onClick={() => removeHamster(h.id)}>Remove</button>
				<HamsterInfo hamster ={h}/>
			</div>
			)) : 'Hämtar hamstrar från API'}
			</div>
			
	)
}

export default HamsterCard;