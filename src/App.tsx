import React from 'react';
import { BrowserRouter as Router, Link, Switch, Route, Redirect } from 'react-router-dom';
import Gallery from './components/gallery/Gallery';
import Battle from './components/battle/Battle';
import Statistics from './components/statistics/Statistics';
import History from './components/history/History';
import Start from './components/start/Start';
import './App.css';
import hamsterlogo from './img/hamster1.svg'
import hamsterlogo2 from './img/hamster2.svg'
import hamsterlogo3 from './img/hamster3.svg'

function App() {
	
  return (
	  <Router>
    <div className="App">
      <header className="App-header">
		  <nav>
		  <img src={hamsterlogo3} className="imghamster"/>
		  <img src={hamsterlogo} className="imghamster"/>
		  <img src={hamsterlogo2} className="imghamster"/>
			  <Link to="/">Start</Link>
			  <Link to="/gallery">Galleri</Link>
			  <Link to="/battle">Tävla</Link>
			  <Link to="/statistics">Statestik</Link>
			  <Link to="/history">Historik</Link>
		  </nav>
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
