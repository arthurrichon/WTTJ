import React, { Component } from 'react';
import Block from './Block'
import './Block.css';

class VideoBlock extends Component {
	playVideo(id) {
		console.log('play');
	}

	render() {
		return (
			<div className="Block-Video-container" data-id={this.props.key}>
				<iframe src={this.props.url} allowFullScreen></iframe>
				<div className="Block-Video-caption">
					<div className="Play-Button" onClick={ this.playVideo() }>
						<i className="fa fa-play"/>
					</div>
					<div className="Block-Video-headline">
						<span className="Headline-Title">{this.props.title + ' ' + this.props.subtitle}</span>
					</div>
				</div>
			</div>

		)
	}
}

export default VideoBlock;
