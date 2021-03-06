import { Link } from "react-router-dom";
import "./Nav.css";

const Nav = () => (
  <nav className="nav-container">
    <Link to="/">Home</Link>
    <Link to="/battle">Battle</Link>
    <Link to="/gallery">Gallery</Link>
    <Link to="/statistics">Top 5</Link>
    <Link to="/history">All matches</Link>
    <img src="./img/hamsterlogo.svg" alt="a hamster with angry eyes" />
  </nav>
);

export default Nav;
