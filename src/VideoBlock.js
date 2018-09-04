import React, { Component } from 'react';
import Block from './Block'
import './Block.css';

class VideoBlock extends Component {
	playVideo(id) {
		// Play video
	}

	render() {
		return (
			<div className="Block-Video-container" data-id={this.props.key}>
				<iframe src={this.props.url} allowFullScreen></iframe>
				<div className="Block-Video-caption">
					<div className="Play-Button" onClick={ this.playVideo(this.props.key) }>
						<i className="fa fa-play"/>
					</div>
					<div className="Block-Video-headline">
						<span className="Headline-Title">{this.props.title}<br/>{this.props.subtitle}</span>
					</div>
				</div>
			</div>
		)
	}
}

export default VideoBlock;
