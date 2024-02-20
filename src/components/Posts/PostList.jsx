import React from 'react'
import { PostCard } from './PostCard'
import s from './Posts.module.css'
export const PostList = () => {
	return (
		<ul className={s.listWrapper}>
			<PostCard />
			<PostCard />
			<PostCard />
		</ul>
	)
}
