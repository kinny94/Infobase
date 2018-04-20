import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/header/Header';
import Landing from './components/landing/Landing';
import Footer from './components/footer/Footer';
import Steam from './components/main/steam/Steam';
import Github from './components/main/github/Github';
import Music from './components/main/music/Music';
import Movies from './components/main/movies/Movies';
import Weather from './components/main/weather/Weather';
import Books from './components/main/books/Books';
import GooglePlus from './components/main/googleplus/GooglePlus';
import Expedia from './components/main/expedia/Expedia';
import SteamUser from './components/main/steam/user/SteamUser';

class App extends Component {
	render() {
		return (
			<div className="App">
				<BrowserRouter>
					<div className="container">
						<Route path="/" exact component={ Landing }/>
						<Route path="/steam" exact component={ Steam } />
						<Route path="/github" exact component={ Github } />
						<Route path="/music" exact  component={ Music } />
						<Route path="/movies" exact component={ Movies } />
						<Route path="/weather" exact component={ Weather} />
						<Route path="/books" exact component={ Books } />
						<Route path="/googleplus" exact component={ GooglePlus } />
						<Route path="/expedia" exact component={ Expedia } />
						<Route path="/steam/:id" exact component={ SteamUser } />
					</div>
				</BrowserRouter>
			</div>

		);
	}
}

export default App;
