import React, { Component } from 'react';
import Block from './Block'
import './Block.css';

class ImageBlock extends Component {
	render() {
		return (
			<div className="Block-Image-Container">
				<div className="image" style={{ backgroundImage: 'url(' + this.props.url + ')'}}></div>
			</div>
		)
	}
}

export default ImageBlock;
