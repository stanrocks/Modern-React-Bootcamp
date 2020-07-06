import React, { Component } from 'react';
import Todo from './Todo';
import NewTodoForm from './NewTodoForm';

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

	createTodo(newTodo) {
		this.setState({
			todos: [ ...this.state.todos, newTodo ]
		});
	}

	render() {
		const todos = this.state.todos.map((todo) => (
			<Todo key={todo.id} id={todo.id} todo={todo.todo} removeTodo={() => this.removeTodo(todo.id)} />
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
