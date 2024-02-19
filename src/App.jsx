import React from 'react'
import { Employee } from './components/Employees/Employee'
import './index.css'
import { Header } from './components/Header/Header'
import { Counter } from './components/Counter/Counter'
import { ErrorBoundary } from './components/ErrorBoundary'
import Modal from './components/Modal/Modal'
class App extends React.Component {
	state = {
		isOpen: false,
	}
	componentDidMount() {
		// setTimeout(() => {
		// 	this.setState({ isOpen: true })
		// }, 3000)
	}

	handleToggleModal = () => {
		this.setState(prev => ({ isOpen: !prev.isOpen }))
	}

	handleCloseModal = () => {
		this.setState({ isOpen: false })
	}
	handleOpenModal = () => {
		this.setState({ isOpen: true })
	}

	render() {
		const { isOpen } = this.state
		return (
			<>
				<Header openModal={this.handleOpenModal} />
				<Employee />
				{/* <Counter /> */}
				{isOpen && (
					<Modal closeModal={this.handleToggleModal}>
						<h2>Modal text</h2>
					</Modal>
				)}
			</>
		)
	}
}

export default App
