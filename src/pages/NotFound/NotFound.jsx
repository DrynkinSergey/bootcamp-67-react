import React from 'react'
import { Link } from 'react-router-dom'
import s from './NotFound.module.css'
const NotFound = () => {
	return (
		<div className={s.wrapper}>
			<h1>Page is not found... Try again!</h1>
			<Link to='/'>Go home!</Link>
		</div>
	)
}

export default NotFound
