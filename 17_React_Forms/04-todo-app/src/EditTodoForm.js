import React, { Component } from 'react';

class EditTodoForm extends Component {
	constructor(props) {
		super(props);
		this.state = { todo: '' };
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
		// const newTodo = { ...this.state, id: uuid(), isEdited: false };
		// this.props.createTodo(newTodo);
		// this.setState({
		// 	todo: ''
		// });
	}

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<label htmlFor="todoEdit">Edit Todo</label>
				<input type="text" name="todoEdit" onChange={this.handleChange} id="todoEdit" value={this.props.todo} />
				<button>Save</button>
			</form>
		);
	}
}

export default EditTodoForm;
