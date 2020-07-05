import React, { Component } from 'react';

class Box extends Component {
	render() {
		return <div style={{ backgroundColor: this.props.color }} />;
	}
}
