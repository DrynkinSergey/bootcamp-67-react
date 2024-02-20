import React from 'react'
import './index.css'
import { Header } from './components/Header/Header'
import { Posts } from './components/Posts/Posts'
class App extends React.Component {
	render() {
		return (
			<>
				<Header openModal={this.handleOpenModal} />
				<Posts />
			</>
		)
	}
}

export default App
