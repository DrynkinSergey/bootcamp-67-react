import React, { useEffect, useRef, useState } from 'react'
import s from './Posts.module.css'
import { toast } from 'react-toastify'
export const SearchForm = ({ handleSetQuery }) => {
	const [searchValue, setSearchValue] = useState('')
	const inputRef = useRef(null)
	const buttonRef = useRef(null)
	useEffect(() => {
		console.log(inputRef)
		inputRef.current.focus()
		setTimeout(() => {
			inputRef.current.value = 'cat'
			buttonRef.current.innerHTML = 'Modified button'
		}, 2000)
		// setInterval(() => {
		// 	buttonRef.current.click()
		// }, 100)
	}, [])

	const handleChangeValue = e => {
		// this.setState({ searchValue: e.target.value })
		setSearchValue(e.target.value)
	}

	const handleSubmit = e => {
		e.preventDefault()
		// toast.success(this.state.searchValue)
		// console.log(this.state)
		// Відправляємо дані з форми до компонента Posts
		handleSetQuery(searchValue)
		setSearchValue('')
		// this.setState({ searchValue: '' })
	}

	return (
		<form onSubmit={handleSubmit} className={s.searchForm}>
			<input ref={inputRef} type='text' value={searchValue} onChange={handleChangeValue} />
			<button className={s.button}>Search</button>
			<button onClick={() => console.log('click')} ref={buttonRef} className={s.button}>
				Click me
			</button>
		</form>
	)
}
