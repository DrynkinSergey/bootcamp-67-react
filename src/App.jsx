import React from 'react'
import { Employee } from './components/Employees/Employee'
import './index.css'
import { Header } from './components/Header/Header'
import { Counter } from './components/Counter/Counter'
class App extends React.Component {
	render() {
		return (
			<>
				<Header />
				{/* <Employee /> */}
				<Counter />
			</>
		)
	}
}

export default App
