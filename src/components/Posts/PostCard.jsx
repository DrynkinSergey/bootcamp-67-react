import React from 'react'
import s from './Posts.module.css'
export const PostCard = ({ id, title, body, openModal, reactions, tags }) => {
	return (
		<li className={s.card}>
			<h2>{title}</h2>
			<p>{body}</p>
			<button onClick={() => openModal({ id, title, body, reactions, tags })}>See more...</button>
		</li>
	)
}
