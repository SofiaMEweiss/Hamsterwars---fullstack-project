import { Link } from 'react-router-dom';
import './Nav.css';

const Nav = () => (
	<nav className="nav-container">
		<Link to="/">Start</Link>
		<Link to="/gallery">Galleri</Link>
		<Link to="/battle">Tävla</Link>
		<Link to="/statistics">Statestik</Link>
		<Link to="/history">Historik</Link>
		<img src="./img/hamsterlogo.svg" alt="Logga med en arg hamster"/>
	</nav>
)

export default Nav;