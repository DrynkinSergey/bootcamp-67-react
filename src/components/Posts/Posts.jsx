import React, { useEffect, useRef, useState } from 'react'
import { PostList } from './PostList'
import { SearchForm } from './SearchForm'
import s from './Posts.module.css'
import clsx from 'clsx'
import { fetchPosts, fetchPostsByQuery } from '../../services/api'
import { Loader } from './Loader'
import Modal from '../Modal/Modal'

export const Posts = () => {
	const [items, setItems] = useState([])
	const [totalPosts, setTotalPosts] = useState(0)
	const [skip, setSkip] = useState(0)
	const [loading, setLoading] = useState(false)
	const [error, setError] = useState(null)
	const [query, setQuery] = useState('')
	const [isOpen, setIsOpen] = useState(false)
	const [content, setContent] = useState(null)

	const renderCountRef = useRef(0)

	useEffect(() => {
		renderCountRef.current += 1
		console.log('Render count is:', renderCountRef.current)
	})

	useEffect(() => {
		const getData = async () => {
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
		}
		getData()
	}, [query, skip])

	const handleToggleModal = () => {
		// this.setState(prev => ({ isOpen: !prev.isOpen }))
		setIsOpen(prev => !prev)
	}

	const handleSeeMoreInfo = content => {
		// this.setState({ isOpen: true, content })
		setIsOpen(true)
		setContent(content)
	}

	const handleSetQuery = query => {
		// Обнуляємо пости а також скидаємо скіп
		// this.setState({ query, items: [], skip: 0 })
		setQuery(query)
		setItems([])
		setSkip(0)
	}

	const handleLoadMore = () => {
		// this.setState(prev => ({ skip: prev.skip + 4 }))
		setSkip(prev => prev + 4)
	}
	return (
		<div>
			<h1 className={s.title}>Posts</h1>
			<SearchForm handleSetQuery={handleSetQuery} />
			{/* <button
				onClick={() => {
					renderCountRef.current += 1
				}}
			>
				Render count {renderCountRef.current}
			</button> */}
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

// export class Posts extends React.Component {
// 	state = {
// 		items: [],
// 		totalPosts: 0,
// 		skip: 0,
// 		loading: false,
// 		error: null,
// 		query: '',
// 		isOpen: false,
// 		content: null,
// 	}

// 	async componentDidMount() {
// 		try {
// 			this.setState({ loading: true, error: null })
// 			const { posts, total } = await fetchPosts()
// 			this.setState({ items: posts, totalPosts: total })
// 		} catch (error) {
// 			this.setState({ error })
// 		} finally {
// 			this.setState({ loading: false })
// 		}
// 	}

// 	async componentDidUpdate(prevProps, prevState) {
// 		if (prevState.skip !== this.state.skip || prevState.query !== this.state.query) {
// 			try {
// 				this.setState({ loading: true, error: null })
// 				const { posts, total } = this.state.query
// 					? await fetchPostsByQuery({ skip: this.state.skip, q: this.state.query })
// 					: await fetchPosts({ skip: this.state.skip })
// 				this.setState(prev => ({ items: [...prev.items, ...posts], totalPosts: total }))
// 			} catch (error) {
// 				this.setState({ error })
// 			} finally {
// 				this.setState({ loading: false })
// 			}
// 		}
// 	}

// handleToggleModal = () => {
// 	this.setState(prev => ({ isOpen: !prev.isOpen }))
// }

// handleSeeMoreInfo = content => {
// 	this.setState({ isOpen: true, content })
// }

// handleSetQuery = query => {
// 	// Обнуляємо пости а також скидаємо скіп
// 	this.setState({ query, items: [], skip: 0 })
// }

// handleLoadMore = () => {
// 	this.setState(prev => ({ skip: prev.skip + 4 }))
// }

// 	render() {
// 		const { items, loading, totalPosts, query, isOpen, content, error } = this.state
// 		const { title, body, tags, reactions } = content || {}
// return (
// 	<div>
// 		<h1 className={s.title}>Posts</h1>
// 		<SearchForm handleSetQuery={this.handleSetQuery} />

// 		{query && <h2>Now you search: {query}</h2>}
// 		{error && <h2>Something went wrong!! Try again</h2>}
// 		<PostList openModal={this.handleSeeMoreInfo} posts={items} />

// 		{/* Перевіряємо чи є загрузка? Якщо вона є, перевіряємо чи є елементи? Якщо елементів немає - показуємо лоадер. Тобто лише один раз при старті */}
// 		{loading && !items.length && <Loader />}

// 		{items.length && items.length < totalPosts ? (
// 			<button onClick={this.handleLoadMore} className={clsx(s.button, s.center)}>
// 				{loading ? 'Loading....' : 'Load more'}
// 			</button>
// 		) : null}

// 		{isOpen && (
// 			<Modal closeModal={this.handleToggleModal}>
// 				<h2>{title}</h2>
// 				<p>{body}</p>
// 				<p>Likes count: {reactions}</p>
// 				<ul className={s.tagsModal}>
// 					{tags.map(tag => (
// 						<li key={tag}>{tag}</li>
// 					))}
// 				</ul>
// 			</Modal>
// 		)}
// 	</div>
// )
// 	}
// }
