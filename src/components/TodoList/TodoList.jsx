import { StyledButton } from '../Counter/Counter.styled'
import { StyledInput, StyledTodo, StyledTodoList } from './TodoList.styled'
import todosData from './../../assets/todos.json'
import React, { useState } from 'react'
import { nanoid } from 'nanoid'

export const TodoList = () => {
	const [todos, setTodos] = useState(todosData)
	const [newTodoTitle, setNewTodoTitle] = useState('')

	const handleToggleTodo = id => {
		console.log(id)
		// Пробігти по массиву
		// Знайти елемент з айді
		// // Змінити значення комплітед на протилежне
		// this.setState(prev => ({
		// 	todos: prev.todos.map(item => (item.id === id ? { ...item, completed: !item.completed } : item)),
		// }))
		setTodos(prev => prev.map(item => (item.id === id ? { ...item, completed: !item.completed } : item)))
	}

	const handleChangeNewTodo = e => {
		console.log(e.target.value)
		// this.setState({ newTodoTitle: e.target.value })
		setNewTodoTitle(e.target.value)
	}

	const handleAddTodo = () => {
		const newTodo = { id: nanoid(), todo: newTodoTitle, completed: false }
		console.log(newTodo)
		// this.setState(prev => ({ todos: [...prev.todos, newTodo], newTodoTitle: '' }))
		setTodos(prev => [...prev, newTodo])
		setNewTodoTitle('')
	}

	const handleDeleteTodo = id => {
		console.log(id)
		// this.setState(prev => ({ todos: prev.todos.filter(item => item.id !== id) }))
		setTodos(prev => prev.filter(item => item.id !== id))
	}
	return (
		<StyledTodoList>
			<div>
				<StyledInput value={newTodoTitle} onChange={handleChangeNewTodo} type='text' />
				<StyledButton onClick={handleAddTodo}>Add</StyledButton>
			</div>
			{todos.map(item => (
				<StyledTodo key={item.id}>
					<input checked={item.completed} onChange={() => handleToggleTodo(item.id)} type='checkbox' />
					<span>{item.todo}</span>
					<StyledButton onClick={() => handleDeleteTodo(item.id)} size='18px'>
						Delete
					</StyledButton>
				</StyledTodo>
			))}
			<button onClick={() => setTodos([])}>Clear</button>
		</StyledTodoList>
	)
}
// export class TodoList extends React.Component {
// 	state = {
// 		todos: todosData,
// 		newTodoTitle: '',
// 	}

// handleToggleTodo = id => {
// 	console.log(id)
// 	// Пробігти по массиву
// 	// Знайти елемент з айді
// 	// Змінити значення комплітед на протилежне
// 	this.setState(prev => ({
// 		todos: prev.todos.map(item => (item.id === id ? { ...item, completed: !item.completed } : item)),
// 	}))
// }

// handleChangeNewTodo = e => {
// 	console.log(e.target.value)
// 	this.setState({ newTodoTitle: e.target.value })
// }

// handleAddTodo = () => {
// 	const newTodo = { id: nanoid(), todo: this.state.newTodoTitle, completed: false }
// 	console.log(newTodo)
// 	this.setState(prev => ({ todos: [...prev.todos, newTodo], newTodoTitle: '' }))
// }

// handleDeleteTodo = id => {
// 	console.log(id)
// 	this.setState(prev => ({ todos: prev.todos.filter(item => item.id !== id) }))
// }

// 	render() {
// 		const { todos, newTodoTitle } = this.state
// 		return (
// 			<StyledTodoList>
// 				<div>
// 					<StyledInput value={newTodoTitle} onChange={this.handleChangeNewTodo} type='text' />
// 					<StyledButton onClick={this.handleAddTodo}>Add</StyledButton>
// 				</div>
// 				{todos.map(item => (
// 					<StyledTodo key={item.id}>
// 						<input checked={item.completed} onChange={() => this.handleToggleTodo(item.id)} type='checkbox' />
// 						<span>{item.todo}</span>
// 						<StyledButton onClick={() => this.handleDeleteTodo(item.id)} size='18px'>
// 							Delete
// 						</StyledButton>
// 					</StyledTodo>
// 				))}
// 				<button onClick={() => this.setState({ todos: [] })}>Clear</button>
// 			</StyledTodoList>
// 		)
// 	}
// }
