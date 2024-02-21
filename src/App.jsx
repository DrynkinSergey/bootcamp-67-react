import React from 'react'
import './index.css'
import { Header } from './components/Header/Header'
import { Counter } from './components/Counter/Counter'
import { TodoList } from './components/TodoList/TodoList'
import { ColorPicker } from './components/ColorPicker/ColorPicker'
import { Posts } from './components/Posts/Posts'
import { Employee } from './components/Employees/Employee'
import colors from './assets/colors.json'
class App extends React.Component {
	render() {
		return (
			<>
				<Header openModal={this.handleOpenModal} />
				{/* <Counter /> */}
				{/* <ColorPicker colors={colors} /> */}
				{/* <TodoList /> */}
				{/* <Employee /> */}
				<Posts />
			</>
		)
	}
}

export default App
