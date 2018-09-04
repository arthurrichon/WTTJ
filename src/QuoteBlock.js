import React, { Component } from 'react';
import Block from './Block'
import './Block.css';

class QuoteBlock extends Component {
	render() {
		return (
			<div className="Block-Quote-caption">
				<i className="fa fa-quote-left fa-3x"/>
				<h2>{this.props.text}</h2>
			</div>
		)
	}
}

export default QuoteBlock;
