import React from 'react'
import { PostList } from './PostList'
import { SearchForm } from './SearchForm'
import s from './Posts.module.css'
import clsx from 'clsx'
import { fetchPosts } from '../../services/api'
import { Comment } from 'react-loader-spinner'
import { Loader } from './Loader'
export class Posts extends React.Component {
	state = {
		items: [],
		totalPosts: 0,
		skip: 0,
		loading: false,
		error: null,
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
		if (prevState.skip !== this.state.skip) {
			try {
				const { posts, total } = await fetchPosts({ skip: this.state.skip })
				this.setState(prev => ({ items: [...prev.items, ...posts], totalPosts: total }))
			} catch (error) {}
		}
	}

	handleLoadMore = () => {
		this.setState(prev => ({ skip: prev.skip + 4 }))
	}

	render() {
		const { items, loading } = this.state
		return (
			<div>
				<h1 className={s.title}>Posts</h1>
				<SearchForm />
				<PostList posts={items} />

				{loading && <Loader />}

				{items.length ? (
					<button onClick={this.handleLoadMore} className={clsx(s.button, s.center)}>
						Load more
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
