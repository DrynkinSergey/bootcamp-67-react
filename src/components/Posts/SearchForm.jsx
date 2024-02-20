import React from 'react'
import s from './Posts.module.css'
import { toast } from 'react-toastify'
export class SearchForm extends React.Component {
	state = {
		searchValue: '',
	}

	handleChangeValue = e => {
		this.setState({ searchValue: e.target.value })
	}

	handleSubmit = e => {
		e.preventDefault()
		// toast.success(this.state.searchValue)
		console.log(this.state)
		// Відправляємо дані з форми до компонента Posts
		this.props.handleSetQuery(this.state.searchValue)
		this.setState({ searchValue: '' })
	}
	render() {
		return (
			<form onSubmit={this.handleSubmit} className={s.searchForm}>
				<input type='text' value={this.state.searchValue} onChange={this.handleChangeValue} />
				<button className={s.button}>Search</button>
			</form>
		)
	}
}
