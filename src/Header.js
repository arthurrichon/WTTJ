import React, { Component } from 'react';
import logo from './logo-filled.png';
import './Header.css';

class Header extends Component {
  render() {
    return (
			<header className="App-header">
				<div className="App-Logo-Container">
					<img src={logo} className="App-logo" alt="logo" />
					<h1 className="App-title">Welcome to the jungle</h1>
				</div>
				<div className="App-Header-Controls">
				</div>
			</header>
    );
  }
}

export default Header;
