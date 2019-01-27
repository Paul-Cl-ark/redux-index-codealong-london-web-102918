import React, { Component } from 'react'
import { connect } from 'react-redux'
import Todo from './Todo'

class ToDosContainer extends Component {
	constructor(props) {
		super(props)
		this.state = { todos: [] }
	}

	renderTodos = () => this.props.todos.map((todo, id) => <Todo key={id} text={todo} />)

	render() {
		return <React.Fragment>{this.renderTodos()}</React.Fragment>
	}
}

const mapStateToProps = state => {
	return {
		todos: state.todos
	}
}

export default connect(mapStateToProps)(ToDosContainer)
