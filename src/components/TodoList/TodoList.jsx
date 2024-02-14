import { StyledButton } from '../Counter/Counter.styled'
import { StyledInput, StyledTodo, StyledTodoList } from './TodoList.styled'
import todosData from './../../assets/todos.json'
import React from 'react'
import { nanoid } from 'nanoid'

export class TodoList extends React.Component {
	state = {
		todos: todosData,
		newTodoTitle: '',
	}

	handleToggleTodo = id => {
		console.log(id)
		// Пробігти по массиву
		// Знайти елемент з айді
		// Змінити значення комплітед на протилежне
		this.setState(prev => ({
			todos: prev.todos.map(item => (item.id === id ? { ...item, completed: !item.completed } : item)),
		}))
	}

	handleChangeNewTodo = e => {
		console.log(e.target.value)
		this.setState({ newTodoTitle: e.target.value })
	}

	handleAddTodo = () => {
		const newTodo = { id: nanoid(), todo: this.state.newTodoTitle, completed: false }
		console.log(newTodo)
		this.setState(prev => ({ todos: [...prev.todos, newTodo], newTodoTitle: '' }))
	}

	handleDeleteTodo = id => {
		console.log(id)
		this.setState(prev => ({ todos: prev.todos.filter(item => item.id !== id) }))
	}

	render() {
		const { todos, newTodoTitle } = this.state
		return (
			<StyledTodoList>
				<div>
					<StyledInput value={newTodoTitle} onChange={this.handleChangeNewTodo} type='text' />
					<StyledButton onClick={this.handleAddTodo}>Add</StyledButton>
				</div>
				{todos.map(item => (
					<StyledTodo key={item.id}>
						<input checked={item.completed} onChange={() => this.handleToggleTodo(item.id)} type='checkbox' />
						<span>{item.todo}</span>
						<StyledButton onClick={() => this.handleDeleteTodo(item.id)} size='18px'>
							Delete
						</StyledButton>
					</StyledTodo>
				))}
				<button onClick={() => this.setState({ todos: [] })}>Clear</button>
			</StyledTodoList>
		)
	}
}

// export const TodoList = () => {
// 	return (
// 		<StyledTodoList>
// 			<div>
// 				<StyledInput type='text' />
// 				<StyledButton>Add</StyledButton>
// 			</div>
// 			{todos.map(item => (
// 				<StyledTodo key={item.id}>
// 					<input type='checkbox' />
// 					<span>{item.todo}</span>
// 					<StyledButton size='18px'>Delete</StyledButton>
// 				</StyledTodo>
// 			))}
// 			<button>Clear</button>
// 		</StyledTodoList>
// 	)
// }
