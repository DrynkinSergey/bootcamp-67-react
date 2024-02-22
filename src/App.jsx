import React, { createContext, useContext, useState } from 'react'
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
import { Form } from './components/Form/Form'
import Modal from './components/Modal/Modal'
import { useModal } from './hooks/useModal'

export const MyContext = createContext()
const contextValue = {
	film: 'Terminator',
	colors: ['red', 'green', 'blue'],
}

const App = () => {
	const { isLoggedIn } = useContext(UserContext)
	const { isOpen, close, open } = useModal()
	// const [isOpen, setIsOpen] = useState(false)

	// const closeModal = () => setIsOpen(false)
	// const openModal = () => setIsOpen(true)

	if (!isLoggedIn) {
		return <LoginForm />
	}

	return (
		<>
			{/* <Context auto='audi' /> */}
			{/* <Counter /> */}
			{/* <ColorPicker colors={colors} /> */}
			<TodoList />
			{/* <Employee /> */}
			{/* <Posts /> */}
			<Form />
			<button onClick={open}>Open modal</button>
			{isOpen && (
				<Modal closeModal={close}>
					<h1>Привіт!!</h1>
				</Modal>
			)}
		</>
	)
}

export default App
