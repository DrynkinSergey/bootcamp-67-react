import React from 'react'
import s from './Posts.module.css'
export class SearchForm extends React.Component {
	render() {
		return (
			<form className={s.searchForm}>
				<input type='text' />
				<button className={s.button}>Search</button>
			</form>
		)
	}
}
