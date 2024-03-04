import React, { useEffect } from 'react'
import { AddForm } from './AddForm'
import { useDispatch, useSelector } from 'react-redux'
import { fetchArticlesThunk } from '../../redux/articles/operations'
import { selectArticles } from '../../redux/articles/slice'
import { Card } from './Card'

export const Articles = () => {
	const dispatch = useDispatch()
	useEffect(() => {
		dispatch(fetchArticlesThunk())
	}, [dispatch])
	const articles = useSelector(selectArticles)
	return (
		<div>
			<AddForm />
			<ul>
				{articles.map(item => (
					<Card key={item.id} item={item} />
				))}
			</ul>
		</div>
	)
}
