import React, { Component } from 'react';

class Box extends Component {
	render() {
		return <div className="Box" style={{ backgroundColor: this.props.color }} />;
	}
}

export default Box;
