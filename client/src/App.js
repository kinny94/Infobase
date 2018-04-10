import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/header/Header';
import Landing from './components/landing/Landing';
import Footer from './components/footer/Footer';
import Steam from './components/main/steam/Steam';
import Github from './components/main/github/Github';
class App extends Component {
	render() {
		return (
			<div className="App">
				<BrowserRouter>
					<div className="container">
						<Route path="/" exact component={ Landing 	 }/>
						<Route path="/steam" exact component={ Steam } />
						<Route path="/github" exact component={ Github } />
					</div>
				</BrowserRouter>
			</div>

		);
	}
}

export default App;
