import React, { Component } from 'react';
import './App.css';
import FirstPage from './components/pages/first-page/first-page.js';
import SecondPage from './components/pages/second-page/second-page.js';
import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends Component {
	render () {
		return (
			<Router>
				<div className="App">
					<Route path='/' exact component={FirstPage} />
					<Route path='/2' exact component={SecondPage} />
				</div>
			</Router>
			
		  );
	}
}

export default App;
