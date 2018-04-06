import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/header/Header';
import Landing from './components/landing/Landing';
import Footer from './components/footer/Footer';

class App extends Component {
	render() {
		return (
			<div className="App">
				<Header />
				<div className="container">
					<Landing />
				</div>
				<Footer />
			</div>
		);
	}
}

export default App;
