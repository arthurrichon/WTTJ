import React, { Component } from 'react';
import logo from './logo.svg';
import './Footer.css';

class Footer extends Component {
  render() {
    return (
			<footer className="App-footer">
				<img src={logo} />
			</footer>
    );
  }
}

export default Footer;
