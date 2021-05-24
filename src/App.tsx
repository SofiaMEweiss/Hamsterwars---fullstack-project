import React from 'react';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
	  <Router>
    <div className="App">
      <header className="App-header">
		  <nav>
			  <Link to="/">Start</Link>
			  <Link to="/gallery">Galleri</Link>
			  <Link to="/battle">Tävla</Link>
			  <Link to="/statistics">Statestik</Link>
			  <Link to="/history">Historik</Link>
			  nav
		  </nav>
      </header>
	  <main>
		  före switch
		  <Switch>
			  <Route path="/gallery"> Galleri </Route>
			  <Route path="/battle"> Tävla </Route>
			  <Route path="/statistics"> Statestik </Route>
			  <Route path="/history"> Historik </Route>
			  <Route path="/"> Start </Route>
		  main
		  </Switch>
		  efter switch
	  </main>
    </div>
	</Router>
  );
}

export default App;
