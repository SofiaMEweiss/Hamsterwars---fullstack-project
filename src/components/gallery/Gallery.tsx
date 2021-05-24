import { HamsterItem } from '../../types/HamsterItem'

interface Props {
	items: HamsterItem[]
}

const Gallery = ({ items }: Props) => (
	<div>
		<div>
			Bild på hamster<br/>
			{ items.length === 0 ?'Finns inga hamstrar.' : 'TODO: mappa alla hamstrar' } <br/>
			<button>Mer info om hamster</button>
		</div>
	</div>
)

export default Gallery;