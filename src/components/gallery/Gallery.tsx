import { useEffect } from 'react';
import { useState } from 'react';
import { HamsterItem } from '../../types/HamsterItem'

interface Props {
	items: HamsterItem[]
}

const Gallery = ({ items }: Props) => {
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
	<div>
		{hamsters ? hamsters.map(hamster =>(	
		<div key={hamster.id}>
			<img src={`img/${hamster.imgName}`}alt="hamster" /><br/>
			{hamster.name}<br/>
			<button>Mer info om hamster</button>
		</div>
		)) : 'Hämtar hamstrar från API'}

<div>
			Bild på hamster<br/>
			{ items.length === 0 ?'Finns inga hamstrar.' : 'TODO: mappa alla hamstrar' } <br/>
			<button>Mer info om hamster</button>
		</div>
	</div>
)
}

export default Gallery;