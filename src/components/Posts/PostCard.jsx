import React from 'react'
import s from './Posts.module.css'
export const PostCard = ({ title, body }) => {
	return (
		<li className={s.card}>
			<h2>{title}</h2>
			<p>{body}</p>
		</li>
	)
}
