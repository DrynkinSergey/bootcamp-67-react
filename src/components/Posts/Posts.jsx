import React, { useCallback, useContext, useEffect, useRef, useState } from 'react'
import { PostList } from './PostList'
import { SearchForm } from './SearchForm'
import s from './Posts.module.css'
import clsx from 'clsx'
import { fetchPosts, fetchPostsByQuery } from '../../services/api'
import { Loader } from './Loader'
import Modal from '../Modal/Modal'
import { UserContext } from '../../context/ContextProvider'

export const Posts = () => {
	const [items, setItems] = useState([])
	const [totalPosts, setTotalPosts] = useState(0)
	const [skip, setSkip] = useState(0)
	const [loading, setLoading] = useState(false)
	const [error, setError] = useState(null)
	const [query, setQuery] = useState('')
	const [isOpen, setIsOpen] = useState(false)
	const [content, setContent] = useState(null)

	const { logout, user } = useContext(UserContext)

	const renderCountRef = useRef(0)

	useEffect(() => {
		renderCountRef.current += 1
		console.log('Render count is:', renderCountRef.current)
	})

	const getData = useCallback(async () => {
		try {
			setLoading(true)
			setError(null)
			const { posts, total } = query ? await fetchPostsByQuery({ skip, q: query }) : await fetchPosts({ skip })
			setItems(prev => [...prev, ...posts])
			setTotalPosts(total)
		} catch (error) {
			setError(error)
		} finally {
			setLoading(false)
		}
	}, [query, skip])

	useEffect(() => {
		getData()
	}, [getData])

	const handleToggleModal = () => {
		setIsOpen(prev => !prev)
	}

	const handleSeeMoreInfo = content => {
		setIsOpen(true)
		setContent(content)
	}

	const handleSetQuery = query => {
		setQuery(query)
		setItems([])
		setSkip(0)
	}

	const handleLoadMore = () => {
		setSkip(prev => prev + 4)
	}
	return (
		<div>
			<button onClick={logout} className={s.button}>
				Logout
			</button>
			<h1>Hello, {user}!</h1>
			<h1 className={s.title}>Posts</h1>
			<SearchForm handleSetQuery={handleSetQuery} />

			{query && <h2>Now you search: {query}</h2>}
			{error && <h2>Something went wrong!! Try again</h2>}

			<PostList openModal={handleSeeMoreInfo} posts={items} />

			{loading && !items.length && <Loader />}

			{items.length && items.length < totalPosts ? (
				<button onClick={handleLoadMore} className={clsx(s.button, s.center)}>
					{loading ? 'Loading....' : 'Load more'}
				</button>
			) : null}

			{isOpen && (
				<Modal closeModal={handleToggleModal}>
					<h2>{content.title}</h2>
					<p>{content.body}</p>
					<p>Likes count: {content.reactions}</p>
					<ul className={s.tagsModal}>
						{content.tags.map(tag => (
							<li key={tag}>{tag}</li>
						))}
					</ul>
				</Modal>
			)}
		</div>
	)
}
