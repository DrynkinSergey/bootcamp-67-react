import React from 'react'
import { Counter } from './components/Counter/Counter'
import { TodoList } from './components/TodoList/TodoList'
import { ColorPicker } from './components/ColorPicker/ColorPicker'

const App = () => {
	return (
		<div>
			<Counter />
			<TodoList />
			<ColorPicker />
		</div>
	)
}

export default App
