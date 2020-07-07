import React, { Component } from 'react';
import EditTodoForm from './EditTodoForm';

class Todo extends Component {
	constructor(props) {
		super(props);
		this.state = { isEdited: false };
		this.handleEdit = this.handleEdit.bind(this);
	}

	handleEdit() {
		this.setState({
			isEdited: true
		});
	}

	render() {
		const todoLayout = (
			<span>
				{' '}
				{this.props.todo} <button onClick={this.handleEdit}>Edit</button>
				<button onClick={this.props.removeTodo}>X</button>
			</span>
		);

		return <div>{this.state.isEdited ? <EditTodoForm todo={this.props.todo} /> : todoLayout}</div>;
	}
}

export default Todo;
