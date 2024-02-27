import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { fetchPostsByUserId } from '../../services/api'
import { useHttp } from '../../hooks/useHttp'
import Modal from '../../components/Modal/Modal'
import { useModal } from '../../hooks/useModal'

const UserPosts = () => {
	const { userId } = useParams()
	const { toggle, isOpen } = useModal()
	const [content, setContent] = useState(null)
	const [posts] = useHttp(fetchPostsByUserId, userId)
	const handleSeePost = content => {
		toggle()
		setContent(content)
	}

	if (!posts) {
		return <h2>Loading posts...</h2>
	}

	return (
		<div>
			<h2>Posts by user</h2>
			<ol>
				{posts.map(post => (
					<li onClick={() => handleSeePost(post)} key={post.id}>
						{post.title}
					</li>
				))}
			</ol>
			{isOpen && (
				<Modal closeModal={toggle}>
					<h1>{content.title}</h1>
					<p>{content.body}</p>
				</Modal>
			)}
		</div>
	)
}

export default UserPosts
