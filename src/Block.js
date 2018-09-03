import React, { Component } from 'react';
import './Block.css';

class Block extends Component {
  render() {
    return (
      <div className="Block" style={{width: this.props.width + '%', height: this.props.height + 'vh' }} data-type={this.props.data.type}>

      </div>
    );
  }
}

export default Block;
