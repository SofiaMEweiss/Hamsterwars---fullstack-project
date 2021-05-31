import React from 'react';
import { BrowserRouter as Router, Link, Switch, Route, Redirect } from 'react-router-dom';
import Gallery from './components/gallery/Gallery';
import Battle from './components/battle/Battle';
import Statistics from './components/statistics/Statistics';
import History from './components/history/History';
import Start from './components/start/Start';
import Nav from './components/nav/Nav';
import './App.css';
import './index.css';

function App() {
	return (
		<Router>
    		<div className="app">
      			<header className="app-header">
					<Nav />
      			</header>
				<main>
		  			<Switch>
			  			<Route path="/gallery"> <Gallery /> </Route>
			  			<Route path="/battle"> <Battle /> </Route>
			  			<Route path="/battel">
				 			<Redirect to="/battle" />
						</Route>
			  			<Route path="/statistics"> <Statistics /> </Route>
			  			<Route path="/history"> <History /> </Route>
			  			<Route path="/"> <Start /> </Route>
		  			</Switch>
	  			</main>
    		</div>
		</Router>
  	);
}

export default App;