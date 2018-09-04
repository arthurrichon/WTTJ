import React, { Component } from 'react';
import ImageBlock from './ImageBlock';
import VideoBlock from './VideoBlock';
import QuoteBlock from './QuoteBlock';
import './Block.css';

class Block extends Component {

	constructor(props) {
		super(props);
	}

  render() {
    return (
      <div className={'Block Block-' + this.props.data.type} style={{width: this.props.width + '%', height: this.props.height + '%' }} data-type={this.props.data.type}>
				{
					this.props.data.type === 'image' ? (<ImageBlock url={this.props.data.url} title={this.props.data.title} />) :
					this.props.data.type === 'video' ? (<VideoBlock url={this.props.data.url} title={this.props.data.title} subtitle={this.props.data.subtitle} />) :
					(<QuoteBlock text={this.props.data.text} />)
				}
      </div>
    );
  }
}

export default Block;
