import React, { Component } from 'react';
import logo from './logo-filled.png';
import './Header.css';

class Header extends Component {

	constructor(props) {
    super(props);
    this.state = {
			col: 2,
			line: 2
		};

		this.scrollForward = this.scrollForward.bind(this);
		this.scrollBackward = this.scrollBackward.bind(this);
  }

	componentDidMount() {
    this.setState({
			col: this.props.match.params.column,
			line: this.props.match.params.line
		})
  }

	// Animate scrolling
	scrollTo(element, to, duration) {
    var start = element.scrollLeft,
        change = to - start,
        currentTime = 0,
        increment = 20;

		Math.easeInOutQuad = function (t, b, c, d) {
		  t /= d/2;
			if (t < 1) return c/2*t*t + b;
			t--;
			return -c/2 * (t*(t-2) - 1) + b;
		}

    var animateScroll = function(){
        currentTime += increment;
        var val = Math.easeInOutQuad(currentTime, start, change, duration);
        element.scrollLeft = val;
        if(currentTime < duration) {
            setTimeout(animateScroll, increment);
        }
    };
    animateScroll();


	}



	scrollForward() {
		var grid = document.getElementsByClassName('Grid')[0],
				ww = window.innerWidth,
				pxToScroll = (ww / 100) * (100 / this.state.col);

		this.scrollTo(grid, grid.scrollLeft + pxToScroll, 200);
		// grid.scrollTo(grid.scrollLeft + pxToScroll, 0);
	}

	scrollBackward() {
		var grid = document.getElementsByClassName('Grid')[0],
				ww = window.innerWidth,
				pxToScroll = (ww / 100) * (100 / this.state.col);
		this.scrollTo(grid, grid.scrollLeft - pxToScroll, 200);
	}

  render() {
    return (
			<header className="App-header">
				<div className="App-Logo-Container">
					<img src={logo} className="App-logo" alt="logo" />
					<h1 className="App-title">Welcome to the jungle</h1>
				</div>
				<div className="App-Header-Controls">
					<div className="Button Button-Backward" onClick={ this.scrollBackward }>
						<i className=" fa fa-arrow-left"/>
					</div>
					<div className="Button Button-Forward" onClick={ this.scrollForward }>
						<i className=" fa fa-arrow-right"/>
					</div>
				</div>
			</header>
    );
  }
}

export default Header;
