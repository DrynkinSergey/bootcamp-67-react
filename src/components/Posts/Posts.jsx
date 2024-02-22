import React, { useCallback, useContext, useEffect, useReducer, useRef, useState } from 'react'
import { PostList } from './PostList'
import { SearchForm } from './SearchForm'
import s from './Posts.module.css'
import clsx from 'clsx'
import { fetchPosts, fetchPostsByQuery } from '../../services/api'
import { Loader } from './Loader'
import Modal from '../Modal/Modal'
import { UserContext } from '../../context/ContextProvider'
import { initialState, postReducer } from '../../reducer/postReducer'

export const Posts = () => {
	const [state, dispatch] = useReducer(postReducer, initialState)
	const { items, skip, totalPosts, loading, error, query, isOpen, content } = state

	const { logout, user } = useContext(UserContext)

	const getData = useCallback(async () => {
		try {
			dispatch({ type: 'loading', payload: true })
			dispatch({ type: 'error', payload: null })
			const { posts, total } = query ? await fetchPostsByQuery({ skip, q: query }) : await fetchPosts({ skip })
			dispatch({ type: 'fetchData', payload: { posts, total } })
		} catch (error) {
			dispatch({ type: 'error', payload: error })
		} finally {
			dispatch({ type: 'loading', payload: false })
		}
	}, [query, skip])

	useEffect(() => {
		getData()
	}, [getData])

	const handleToggleModal = () => {
		dispatch({ type: 'toggleModal' })
	}

	const handleSeeMoreInfo = content => {
		dispatch({ type: 'seeInfo', payload: content })
	}

	const handleSetQuery = query => {
		dispatch({ type: 'changeQuery', payload: query })
	}

	const handleLoadMore = () => {
		dispatch({ type: 'loadMore' })
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
