import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/header/Header';
import Landing from './components/landing/Landing';
import Footer from './components/footer/Footer';

class App extends Component {
	render() {
		return (
			<div className="App">
				<div className="container">
					<Landing />
				</div>
			</div>
		);
	}
}

export default App;
