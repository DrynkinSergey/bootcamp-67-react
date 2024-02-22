import React, { useContext } from 'react'
import s from './Posts.module.css'
import { TestContext } from '../../context/TestProvider'
export const PostCard = ({ id, title, body, openModal, reactions, tags }) => {
	const { testValue } = useContext(TestContext)
	return (
		<li className={s.card}>
			<h2>{title}</h2>
			<p>{body}</p>
			<button onClick={() => openModal({ id, title, body, reactions, tags })}>See more...</button>
			<p>{testValue}</p>
		</li>
	)
}
