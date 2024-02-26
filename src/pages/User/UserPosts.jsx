import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { fetchPostsByUserId } from '../../services/api'

const UserPosts = () => {
	const { id } = useParams()
	const [posts, setPosts] = useState(null)
	const [error, setError] = useState(null)
	useEffect(() => {
		fetchPostsByUserId(id)
			.then(data => setPosts(data))
			.catch(err => setError(err.message))
	}, [id])
	if (!posts) {
		return <h2>Loading posts...</h2>
	}

	return (
		<div>
			<h2>Posts by user</h2>
			<ol>
				{posts.map(post => (
					<li key={post.id}>{post.title}</li>
				))}
			</ol>
		</div>
	)
}

export default UserPosts
