import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteArticleThunk } from '../../redux/articles/operations'

export const Card = ({ item }) => {
	const dispatch = useDispatch()
	const { title, id, body, author } = item
	return (
		<div>
			<h2>{title}</h2>
			<h4>{author}</h4>
			<p>{body}</p>
			<button onClick={() => dispatch(deleteArticleThunk(id))}>Delete</button>
		</div>
	)
}
