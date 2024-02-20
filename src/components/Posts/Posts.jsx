import React from 'react'
import { PostList } from './PostList'
import { SearchForm } from './SearchForm'
import s from './Posts.module.css'
import clsx from 'clsx'
export class Posts extends React.Component {
	render() {
		return (
			<div>
				<h1 className={s.title}>Posts</h1>
				<SearchForm />
				<PostList />
				<button className={clsx(s.button, s.center)}>Load more</button>
			</div>
		)
	}
}
// Get
// Post
// Delete
// Put / Patch
