import React, { Component } from 'react';

class Todo extends Component {
	render() {
		return (
			<div>
				{this.props.todo}
				<button>Edit</button>
				<button onClick={this.props.removeTodo}>X</button>
			</div>
		);
	}
}

export default Todo;
