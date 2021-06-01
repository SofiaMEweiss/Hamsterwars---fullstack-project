import React from 'react'
import './HamsterCard.css';
import { useEffect, useState } from 'react';
import HamsterInfo from './HamsterInfo';
import { Hamster } from '../../types/Hamster'

const HamsterCard = () => {
	const [hamsters, setHamsters] = useState<null | Hamster[]>(null)
	
	useEffect(() => {
		getHamsters()	
	}, [])

	async function getHamsters() {
		const response = await fetch('/hamsters', {method: 'GET'})
		const data: Hamster[] = await response.json()
		setHamsters(data)	
	}

	async function removeHamster(id:string) {
		await fetch("/hamsters/" + id, { method: 'DELETE' })
		window.location.reload()
	}

	return (
		<div className="hamster-container">
			{hamsters ? 
			hamsters.map(h =>(	
			<section className="hamstercard" key={h.id}>
				<button onClick={() => removeHamster(h.id)}>
					Remove Hamster
				</button>
				{(h.imgName.startsWith('http')) ? 
				<img src={h.imgName}alt="hamster" />
				: <img src={`img/${h.imgName}`}alt="hamster" />}
				<h3>
					{h.name}
				</h3>
				<HamsterInfo hamster ={h}/>
			</section>)) 
			: 'Hämtar hamstrar från API'}
		</div>	
	)
}

export default HamsterCard;