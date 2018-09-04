import React, { Component } from 'react';
import './Block.css';

class Block extends Component {

	constructor(props) {
		super(props);
	}

	getBlock(props) {

	}

  render() {
    return (
      <div className="Block" style={{width: this.props.width + '%', height: this.props.height + '%' }} data-type={this.props.data.type}>
				{
					this.props.data.type === 'image' ? (<img src={this.props.data.imageLink} className="Block-image" />) :
					this.props.data.type === 'video' ? (<video src="" className="Block-video"></video>) :
					(<div className="Block-quote"></div>)
				}
      </div>
    );
  }
}

export default Block;
