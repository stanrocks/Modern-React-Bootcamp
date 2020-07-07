import React, { Component } from 'react';
import Todo from './Todo';
import NewTodoForm from './NewTodoForm';
// import EditTodoForm from './EditTodoForm';

class TodoList extends Component {
	constructor(props) {
		super(props);
		this.state = { todos: [] };
		this.createTodo = this.createTodo.bind(this);
	}

	removeTodo(id) {
		this.setState({
			todos: this.state.todos.filter((todo) => todo.id !== id)
		});
	}

	// editTodoForm(id) {
	// 	console.log(id);
	// 	const todoCopy = this.state;
	// 	if ((todoCopy.id = id)) {
	// 		todoCopy.isEdited = true;
	// 	}
	// 	this.setState({
	// 		todo: todoCopy
	// 	});
	// }

	createTodo(newTodo) {
		this.setState({
			todos: [ ...this.state.todos, newTodo ]
		});
	}

	render() {
		const todos = this.state.todos.map((todo) => (
			<Todo
				key={todo.id}
				id={todo.id}
				todo={todo.todo}
				removeTodo={() => this.removeTodo(todo.id)}
				// editTodoForm={() => this.editTodoForm(todo.id)}
			/>
		));

		return (
			<div>
				<h1>Todo List!</h1>
				<p>A Simple React Todo List App.</p>
				{todos}
				<NewTodoForm createTodo={this.createTodo} />
			</div>
		);
	}
}

export default TodoList;
