import React, { Component } from 'react';
import Block from './Block';
import './Grid.css';

class Grid extends Component {
	constructor(props) {
    super(props);
    this.state = {
			col: 2,
			line: 2
		};
  }

	componentDidMount() {
    this.setState({
			col: this.props.match.params.column,
			line: this.props.match.params.line
		})
  }

	getBlockWidth() {
		return 100 / this.state.col
	}

	getBlockHeight() {
		return 100 / this.state.line
	}

  render() {
    return (
      <div className="Grid" data-col={this.props.match.params.column} data-line={this.props.match.params.line}>
				{this.props.data.block.map((block, i) => {
					 // Return the element with the width/height settings. Also pass key to allow targeting
					 return (<Block width={this.getBlockWidth()} height={this.getBlockHeight()} data={block} key={i}/>)
				})}
      </div>
    );
  }
}

export default Grid;
