import React, { Component } from 'react';
import GithubUserInfo from './GithubUserInfo';
import logo from './logo.svg';
import './App.css';

class App extends Component {
	render() {
		return (
			<div className="App">
				<GithubUserInfo username="Elie" />
				<GithubUserInfo username="colt" />
				<GithubUserInfo username="stanrocks" />
			</div>
		);
	}
}

export default App;
