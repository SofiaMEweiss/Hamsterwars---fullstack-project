import { Link } from 'react-router-dom';
import './GalleryHeader.css';

const GalleryHeader = () => (
	<div className="gallery-header">
		<h2>Gallery</h2>
		<p>
			So many cuties
		</p>
		<p>
			Do you want to add one more?
		</p>
		<Link to="/addnewhamster">
			<button>
				Add new hamster
			</button>
		</Link>
	</div>
)

export default GalleryHeader;