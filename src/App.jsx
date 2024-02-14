import React from 'react'
import { Counter } from './components/Counter/Counter'
import { TodoList } from './components/TodoList/TodoList'
import { ColorPicker } from './components/ColorPicker/ColorPicker'
import { StyledPreview } from './components/StyledPreview/StyledPreview'

const App = () => {
	return (
		<div>
			{/* <StyledPreview /> */}
			<Counter />
			{/* <TodoList /> */}
			{/* <ColorPicker /> */}
		</div>
	)
}

export default App
