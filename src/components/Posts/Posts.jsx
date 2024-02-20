import React from 'react'
import { PostList } from './PostList'
import { SearchForm } from './SearchForm'
import s from './Posts.module.css'
import clsx from 'clsx'
import { fetchPosts, fetchPostsByQuery } from '../../services/api'
import { Comment } from 'react-loader-spinner'
import { Loader } from './Loader'
export class Posts extends React.Component {
	state = {
		items: [],
		totalPosts: 0,
		skip: 0,
		loading: false,
		error: null,
		query: '',
	}

	async componentDidMount() {
		try {
			this.setState({ loading: true })
			const { posts, total } = await fetchPosts()
			this.setState({ items: posts, totalPosts: total })
		} catch (error) {
			this.setState({ error })
		} finally {
			this.setState({ loading: false })
		}
	}

	async componentDidUpdate(prevProps, prevState) {
		if (prevState.skip !== this.state.skip || prevState.query !== this.state.query) {
			try {
				this.setState({ loading: true })
				const { posts, total } = this.state.query
					? await fetchPostsByQuery({ skip: this.state.skip, q: this.state.query })
					: await fetchPosts({ skip: this.state.skip })
				this.setState(prev => ({ items: [...prev.items, ...posts], totalPosts: total }))
			} catch (error) {
			} finally {
				this.setState({ loading: false })
			}
		}
	}

	handleSetQuery = query => {
		// Обнуляємо пости а також скидаємо скіп
		this.setState({ query, items: [], skip: 0 })
	}

	handleLoadMore = () => {
		this.setState(prev => ({ skip: prev.skip + 4 }))
	}

	render() {
		const { items, loading, totalPosts } = this.state
		return (
			<div>
				<h1 className={s.title}>Posts</h1>
				<SearchForm handleSetQuery={this.handleSetQuery} />
				<PostList posts={items} />

				{/* Перевіряємо чи є загрузка? Якщо вона є, перевіряємо чи є елементи? Якщо елементів немає - показуємо лоадер. Тобто лише один раз при старті */}
				{loading && !items.length && <Loader />}

				{items.length && items.length < totalPosts ? (
					<button onClick={this.handleLoadMore} className={clsx(s.button, s.center)}>
						{loading ? 'Loading....' : 'Load more'}
					</button>
				) : null}
			</div>
		)
	}
}
// Get
// Post
// Delete
// Put / Patch
