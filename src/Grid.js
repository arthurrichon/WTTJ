import React, { Component } from 'react';
import Block from './Block';
import './Grid.css';

class Grid extends Component {


  render() {
    return (
      <div className="Grid">
				{this.props.data.block.map((block, i) => {
					 console.log("Entered");
					 // Return the element. Also pass key
					 return (<Block width={'50'} height={'50'} data={block}/>)
				})}
      </div>
    );
  }
}

export default Grid;
