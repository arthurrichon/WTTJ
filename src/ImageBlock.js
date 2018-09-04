import React, { Component } from 'react';
import Block from './Block'
import './Block.css';

class ImageBlock extends Component {
	render() {
		return (
			<img src={this.props.url} />
		)
	}
}

export default ImageBlock;
