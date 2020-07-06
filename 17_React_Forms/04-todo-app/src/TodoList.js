import React, { Component } from 'react';
import Todo from './Todo';
import NewTodoForm from './NewTodoForm';

class TodoList extends Component {
	render() {
		return (
			<div>
				{/* Show all todos */}
				<Todo />
				<NewTodoForm />
			</div>
		);
	}
}

export default TodoList;
