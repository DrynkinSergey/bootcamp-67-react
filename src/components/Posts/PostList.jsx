import React from 'react'
import { PostCard } from './PostCard'
import s from './Posts.module.css'
export const PostList = ({ posts, openModal }) => {
	return (
		<ul className={s.listWrapper}>
			{posts.map(post => (
				<PostCard key={post.id} {...post} openModal={openModal} />
			))}
		</ul>
	)
}
