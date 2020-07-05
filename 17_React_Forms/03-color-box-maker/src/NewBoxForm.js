import React, { Component } from 'react';

class NewBoxForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			height: '',
			width: '',
			color: ''
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(evt) {
		this.setState({
			[evt.target.name]: evt.target.value
		});
	}

	handleSubmit(evt) {
		evt.preventDefault();
		this.props.addBox(this.state);
		this.setState({ height: '', width: '', color: '' });
	}

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<div>
					<label htmlFor="height">Height: </label>
					<input id="height" name="height" value={this.state.height} onChange={this.handleChange} />
				</div>
				<div>
					<label htmlFor="width">Width: </label>
					<input id="width" name="width" value={this.state.width} onChange={this.handleChange} />
				</div>
				<div>
					<label htmlFor="color">backgroundColor: </label>
					<input id="color" name="color" value={this.state.color} onChange={this.handleChange} />
				</div>
				<button>Add a new box!</button>
			</form>
		);
	}
}

export default NewBoxForm;
