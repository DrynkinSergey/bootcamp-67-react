import React, { createContext, useContext } from 'react'
import './index.css'
import { Counter } from './components/Counter/Counter'
import { TodoList } from './components/TodoList/TodoList'
import { ColorPicker } from './components/ColorPicker/ColorPicker'
import { Posts } from './components/Posts/Posts'
import { Employee } from './components/Employees/Employee'
import colors from './assets/colors.json'
import { Context } from './components/Context/Context'
import { ContextProvider, UserContext } from './context/ContextProvider'
import { LoginForm } from './components/LoginForm/LoginForm'

export const MyContext = createContext()
const contextValue = {
	film: 'Terminator',
	colors: ['red', 'green', 'blue'],
}

const App = () => {
	const { isLoggedIn } = useContext(UserContext)

	if (!isLoggedIn) {
		return <LoginForm />
	}

	return (
		<>
			{/* <Context auto='audi' /> */}
			{/* <Counter /> */}
			{/* <ColorPicker colors={colors} /> */}
			{/* <TodoList /> */}
			{/* <Employee /> */}
			<Posts />
		</>
	)
}

export default App
