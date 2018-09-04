import React, { Component } from 'react';
import Block from './Block'
import './Block.css';

class ImageBlock extends Component {
	render() {
		return (
			<div className="Block-Image-Container">
				<img src={this.props.url} />
				<div className="Hover">
					<span>{this.props.title}</span>
				</div>
			</div>


		)
	}
}

export default ImageBlock;
